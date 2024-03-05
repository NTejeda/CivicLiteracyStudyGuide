import { useNavigate } from 'react-router-dom'; // Correct import statement
import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList.json';
import CardEvent from './CardEvent';
import '../App.css';

function Flashcards() {

  const [currentCard, setCurrentCard] = useState(null);
  const [flipStatus, setFlipStatus] = useState(false);
  const [previousCard, setPreviousCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // On initial load, set the current card to a random card in the list
    const randomIndex = Math.floor(Math.random() * FlashcardList.length);
    setCurrentCard(FlashcardList[randomIndex]);
  }, []);

  const nextCard = () => {
    let nextCardIndex;
    do {
      nextCardIndex = Math.floor(Math.random() * FlashcardList.length);
    } while (FlashcardList[nextCardIndex].id === currentCard.id);
    setPreviousCard(currentCard);
    setCurrentCard(FlashcardList[nextCardIndex]);
    setFlipStatus(false);
  };

  const goBack = () => {
    if (previousCard) {
      setCurrentCard(previousCard);
      setPreviousCard(null);
      setFlipStatus(false);
    }
  };

  if (!currentCard) return 'Loading...';

  const goHome = () => {
    navigate('/');
  }
  return (
      <div className="card-container">
       <CardEvent card={currentCard} flipStatus={flipStatus} setFlipStatus={setFlipStatus} />
        <button className="nextButton" onClick={nextCard}>Next</button>
        <button className="homeButton" onClick={goHome}>Home</button>
        <button className="backButton" onClick={goBack}>Back</button>
      </div>
  );
}

export default Flashcards;