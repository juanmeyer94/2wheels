import React, { useState } from 'react';
import Swal from 'sweetalert2';

const QuizCard = ({ question, handleNextQuestion, handleBlueButtonClick, handleGreenButtonClick, currentPlayer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [turns, setTurns] = useState(0);




    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
        setTurns(turns + 1);

        if (turns === 9) {
            Swal.fire({
                title: '¡Juego Terminado!',
                text: 'Se han respondido todas las preguntas. ¿Quieres jugar de nuevo?',
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#5cb85c',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, jugar de nuevo'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        } else {
            if ((currentPlayer === 2) ) {
                if (event.target.value.toLowerCase() === question.correctAnswer.toLowerCase()) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: '¡EXCELENTE!',
                        confirmButtonColor: '#5cb85c',
                    });
                    handleGreenButtonClick();
                    handleNextQuestion();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Sorry..',
                        text: `Mala suerte... La respuesta correcta es ${question.correctAnswer}`,
                        confirmButtonColor: '#ff7f7f',
                    });
                    handleNextQuestion();
                }
            } else {
                if (event.target.value.toLowerCase() === question.correctAnswer.toLowerCase()) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: '¡EXCELENTE!',
                        confirmButtonColor: '#5cb85c',
                    });
                    handleBlueButtonClick();
                    handleNextQuestion();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Sorry..',
                        text: `Mala suerte... La respuesta correcta es ${question.correctAnswer}`,
                        confirmButtonColor: '#ff7f7f',
                    });
                    handleNextQuestion();
                }
            }
        }
    };

    console.log(question.correctAnswer)

    return (
        <div className="quiz-card mt-4 py-4 px-4 ">
            {currentPlayer === 1 ? (
                <div className="d-flex justify-content-center bg-blue-500 py-2 px-2 rounded-lg">
                    <p className="text-white font-extrabold text-2xl">
                        Es el turno del jugador número 1
                    </p>
                </div>
            ) : (
                <div className="d-flex justify-content-center bg-green-500 py-2 px-2 rounded-lg">
                    <p className="text-white font-extrabold text-2xl">
                        Es el turno del jugador número 2
                    </p>
                </div>
            )}
            <p className='text-3xl text-white font-extrabold mx-2 my-2 '>{question.question}</p>
            <form>
                {question.answers.map((answer, index) => (
                    <div key={index} className="mb-4 flex items-center bg-gray-500 rounded-xl py-4 px-4 my-4 -mx-4 ">
                        <input
                            id={`vue-checkbox-${index}`}
                            type="checkbox"
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={handleAnswerChange}
                            className="w-4 h-4 text-blue-600 dark:text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                            htmlFor={`vue-checkbox-${index}`}
                            className="ml-2 block font-sans font-extrabold text-2xl text-white dark:text-gray-300"
                        >
                            {answer}
                        </label>
                    </div>
                ))}
            </form>


        </div>
    );
}

export default QuizCard;
