import React, { useState, useEffect } from 'react';
import questions from "../BDD/questions.json";
import QuizCard from "./QuizCard";

const Quiz = ({ handleBlueButtonClick, handleGreenButtonClick }) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  // Función para generar números aleatorios únicos dentro del rango de IDs
  const generateRandomUniqueNumbers = (count, max) => {
    const randomNumbers = new Set();
    while (randomNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * max) + 1;
      randomNumbers.add(randomNumber);
    }
    return Array.from(randomNumbers);
  };

  // Función para seleccionar preguntas aleatorias
  const selectRandomQuestions = () => {
    const randomIndexes = generateRandomUniqueNumbers(10, questions.length);
    const selectedQuestions = randomIndexes.map(index => questions.find(question => question.id === index));
    setSelectedQuestions(selectedQuestions);
  };

  useEffect(() => {
    // Cuando el componente se monta, selecciona preguntas aleatorias
    selectRandomQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Cambiar el jugador actual entre 1 y 2
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      {selectedQuestions.length > 0 ? (
        <QuizCard
          question={selectedQuestions[currentQuestionIndex]}
          currentPlayer={currentPlayer}
          handleBlueButtonClick={handleBlueButtonClick}
          handleGreenButtonClick={handleGreenButtonClick}
          handleNextQuestion={handleNextQuestion}
        />
      ) : (
        <p>Cargando preguntas...</p>
      )}
    </div>
  );
}

export default Quiz;
