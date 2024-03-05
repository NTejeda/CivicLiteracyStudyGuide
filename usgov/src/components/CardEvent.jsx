import React, { useState } from "react";
import "../App.css";

function CardEvent({ card, flipStatus, setFlipStatus }) {

    const flipCard = () => {
        setFlipStatus(!flipStatus);
    };

    if (!card) {
        return 'Loading...';
    }

    return (
        <div
            className={`card ${flipStatus ? "back" : "front"}`}
            onClick={flipCard}
        >
            {flipStatus ? card.answer : (
                <div>
                    <p className="questions">{card.question}</p>
                    {card.options && <ul className="options-list">
                        {card.options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>}
                </div>
            )}
        </div>
    );
}

export default CardEvent;