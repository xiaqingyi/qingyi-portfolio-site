import React, { useState } from 'react';
import './CatGame.css';

function CatClickerGame() {
    const [score, setScore] = useState(0);
    const [catText, setCatText] = useState("Click me! 🐾");

    const handleCatClick = () => {
        setScore(score + 1);
        const messages = ["Meow! 🐱", "Purr...", "That tickles!", "Mrow!", "Yay! 🎉"];
        setCatText(messages[Math.floor(Math.random() * messages.length)]);
    };

    return (
        <div className="cat-game-container">
            <h2>🐱 Cat Clicker Game</h2>
            <p className="score">Score: {score}</p>
            <button className="cat-button" onClick={handleCatClick}>
                <img src="/cat.JPG" alt="clickable cat" className="cat-img" />
            </button>
            <p className="cat-text">{catText}</p>
        </div>
    );
}

export default CatClickerGame;
