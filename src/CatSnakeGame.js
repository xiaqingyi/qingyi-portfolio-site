import React, { useState, useEffect, useRef } from 'react';
import './CatGame.css';

const GRID_SIZE = 20;
const INITIAL_POSITION = [{ x: 5, y: 5 }];
const DIRECTIONS = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
};

function CatSnakeGame() {
    const [snake, setSnake] = useState(INITIAL_POSITION);
    const [food, setFood] = useState(generateFood(INITIAL_POSITION));
    const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => Number(localStorage.getItem('catHighScore')) || 0);
    const [isRunning, setIsRunning] = useState(false);
    const [leaderboard, setLeaderboard] = useState(() => JSON.parse(localStorage.getItem('catLeaderboard')) || []);
    const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
    const gameRef = useRef(null);

    useEffect(() => {
        if (!isRunning || isGameOver) return;

        const interval = setInterval(() => {
            setSnake(prev => moveSnake(prev));
        }, 150);

        return () => clearInterval(interval);
    }, [direction, isRunning, isGameOver]);

    // Key handling: prevent page scroll on arrows/space and update direction.
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Only care about our game when it's running or the grid is focused
            const isArrow = e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight';
            const isSpace = e.code === 'Space';

            if (isArrow || isSpace) {
                // Prevent the browser from scrolling the page
                e.preventDefault();
            }

            if (DIRECTIONS[e.key]) {
                setDirection(DIRECTIONS[e.key]);
            }
        };

        window.addEventListener('keydown', handleKeyDown, { passive: false });
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus the grid when starting so it "owns" the keys
    useEffect(() => {
        if (isRunning && gameRef.current) {
            gameRef.current.focus();
        }
    }, [isRunning]);

    function generateFood(snakeBody) {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            };
        } while (snakeBody.some(seg => seg.x === newFood.x && seg.y === newFood.y));
        return newFood;
    }

    function moveSnake(snakeBody) {
        // NO WRAP: move normally
        const head = snakeBody[0];
        const newHead = {
            x: head.x + direction.x,
            y: head.y + direction.y,
        };

        // Wall collision -> game over
        const hitWall =
            newHead.x < 0 || newHead.x >= GRID_SIZE ||
            newHead.y < 0 || newHead.y >= GRID_SIZE;

        if (hitWall) {
            setIsGameOver(true);
            setIsRunning(false);
            updateLeaderboard(score);
            return snakeBody;
        }

        // Self collision
        if (snakeBody.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
            setIsGameOver(true);
            setIsRunning(false);
            updateLeaderboard(score);
            return snakeBody;
        }

        const newSnake = [newHead, ...snakeBody];

        if (newHead.x === food.x && newHead.y === food.y) {
            const newScore = score + 1;
            setScore(newScore);
            if (newScore > highScore) {
                localStorage.setItem('catHighScore', newScore);
                setHighScore(newScore);
            }
            setFood(generateFood(newSnake));
        } else {
            newSnake.pop();
        }

        return newSnake;
    }

    function handleStart() {
        setSnake(INITIAL_POSITION);
        setDirection(DIRECTIONS.ArrowRight);
        setScore(0);
        setIsGameOver(false);
        setFood(generateFood(INITIAL_POSITION));
        setIsRunning(true);
        // focus happens in the effect tied to isRunning
    }

    function updateLeaderboard(score) {
        const updated = [...leaderboard, { score, date: new Date().toLocaleString() }]
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);
        setLeaderboard(updated);
        localStorage.setItem('catLeaderboard', JSON.stringify(updated));
    }

    // Handle touch for mobile controls
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        setTouchStart({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = (e) => {
        if (!isRunning) return;

        const touch = e.changedTouches[0];
        const touchEnd = { x: touch.clientX, y: touch.clientY };
        const dx = touchEnd.x - touchStart.x;
        const dy = touchEnd.y - touchStart.y;
        const minSwipeDistance = 30; // Minimum distance for a swipe to be registered

        // Check if it's a valid swipe
        if (Math.abs(dx) > minSwipeDistance || Math.abs(dy) > minSwipeDistance) {
            // Determine primary direction
            if (Math.abs(dx) > Math.abs(dy)) {
                // Horizontal swipe
                if (dx > 0) {
                    setDirection(DIRECTIONS.ArrowRight);
                } else {
                    setDirection(DIRECTIONS.ArrowLeft);
                }
            } else {
                // Vertical swipe
                if (dy > 0) {
                    setDirection(DIRECTIONS.ArrowDown);
                } else {
                    setDirection(DIRECTIONS.ArrowUp);
                }
            }
        }
    };

    return (
        <div className="cat-snake-wrapper">
            <h1>🐾 Welcome to the Cat Snake Game! 🐾</h1>
            <img src="/cat.JPG" alt="Cute Cat" className="intro-cat-img" />
            {!isRunning && (
                <button className="start-button" onClick={handleStart}>Start Game</button>
            )}
            <div className="score-display">
                Score: {score} | High Score: {highScore}
            </div>

            {/* Make the grid focusable and focus it on start */}
            <div
                ref={gameRef}
                className="cat-snake-grid"
                tabIndex={0}
                onClick={() => gameRef.current?.focus()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                aria-label="Cat Snake grid"
            >
                {[...Array(GRID_SIZE)].map((_, y) => (
                    <div key={y} className="row">
                        {[...Array(GRID_SIZE)].map((_, x) => {
                            const isHead = snake[0].x === x && snake[0].y === y;
                            const isBody = snake.slice(1).some(seg => seg.x === x && seg.y === y);
                            const isFood = food.x === x && food.y === y;
                            return (
                                <div key={x} className="cell">
                                    {isHead && '😺'}
                                    {isBody && '🐱'}
                                    {isFood && '🐟'}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Mobile controls overlay */}
            <div className="mobile-controls">
                <button
                    className="control-btn up"
                    onClick={() => setDirection(DIRECTIONS.ArrowUp)}
                    aria-label="Move up"
                >↑</button>
                <div className="horizontal-controls">
                    <button
                        className="control-btn left"
                        onClick={() => setDirection(DIRECTIONS.ArrowLeft)}
                        aria-label="Move left"
                    >←</button>
                    <button
                        className="control-btn right"
                        onClick={() => setDirection(DIRECTIONS.ArrowRight)}
                        aria-label="Move right"
                    >→</button>
                </div>
                <button
                    className="control-btn down"
                    onClick={() => setDirection(DIRECTIONS.ArrowDown)}
                    aria-label="Move down"
                >↓</button>
            </div>

            {isGameOver && (
                <>
                    <div className="game-over">Game Over! 🐾</div>
                    <button className="retry-button" onClick={handleStart}>Retry</button>
                </>
            )}

            <div className="leaderboard">
                <h3>🏆 Leaderboard</h3>
                <ol>
                    {leaderboard.map((entry, idx) => (
                        <li key={idx}>Score: {entry.score} ({entry.date})</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default CatSnakeGame;