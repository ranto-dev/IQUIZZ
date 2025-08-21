import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStopwatch } from "react-icons/fa6";

// Interface pour typer un quiz
interface Quiz {
  question: string;
  reponses_propose: string[];
  response: string;
}

interface QuizGameProps {
  quizzes: Quiz[];
}

const QuizGame: React.FC<QuizGameProps> = ({ quizzes }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(15); // 10 secondes par question
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion =
    quizzes.length > 0 ? quizzes[currentQuestionIndex] : null;
  const totalQuestions = quizzes.length;

  useEffect(() => {
    if (quizFinished || isAnswerSubmitted) {
      return;
    }

    const timer = setTimeout(() => {
      if (questionTimeLeft > 0) {
        setQuestionTimeLeft(questionTimeLeft - 1);
      } else {
        // Le temps est écoulé, on passe à la question suivante
        handleNextQuestion();
      }
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionTimeLeft, isAnswerSubmitted, quizFinished]);

  // Réinitialiser le timer à chaque nouvelle question
  useEffect(() => {
    if (!quizFinished) {
      setQuestionTimeLeft(15);
    }
  }, [currentQuestionIndex, quizFinished]);

  const handleAnswerSelection = (answer: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      setIsAnswerSubmitted(true);
      if (selectedAnswer === currentQuestion?.response) {
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      alert("Veuillez sélectionner une réponse.");
    }
  };

  const handleNextQuestion = () => {
    setIsAnswerSubmitted(false);
    setSelectedAnswer(null);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < totalQuestions) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsAnswerSubmitted(false);
    setQuestionTimeLeft(10);
    setQuizFinished(false);
  };

  const scoreMessage =
    score >= totalQuestions / 2
      ? "Félicitations, vous avez gagné ! 🥳"
      : "Dommage, vous avez perdu. 😟";

  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <div className="rounded-xl shadow-2xl px-5 py-10 w-[40%] flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-[#ed6c18] animate-bounce">
            Quiz terminé !
          </h2>
          <div className="flex flex-col mt-4">
            <p className="text-sm">
              Votre score final est de{" "}
              <span className="font-bold text-green-400">{score}</span> /{" "}
              {totalQuestions}
            </p>
            <p className="text-xl mt-4">{scoreMessage}</p>
            <div className="flex flex-row justify-end items-center gap-4 pt-4">
              <button
                onClick={handleRestart}
                className="bg-green-500 rounded-2xl text-white px-4 py-3"
              >
                Rejouer
              </button>
              <Link
                className="bg-red-500 rounded-2xl text-white px-4 py-3"
                to={"/"}
              >
                Quitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <p className="text-center text-white text-lg mt-10">
        Chargement des questions...
      </p>
    );
  }

  return (
    <div className="relative w-[50%] m-auto flex flex-col items-center justify-center min-h-screen bg-white  text-white p-4">
      <div
        className={`absolute top-4 right-4 text-xl w-[12%] rounded-full px-4 py-1 text-white flex justify-center gap-1 items-center font-medium ${
          questionTimeLeft > 5 ? " bg-green-500" : "bg-red-500"
        }`}
      >
        <span>
          {" "}
          <FaStopwatch />
        </span>{" "}
        <span>
          {questionTimeLeft < 10 ? "0" : null}
          {questionTimeLeft}s
        </span>
      </div>

      <div className="p-8 rounded-lg shadow-xl w-full max-w-xl">
        <h2 className="text-center text-2xl font-bold mb-6 text-[#ed6c18]">
          Question {currentQuestionIndex + 1} / {totalQuestions}
        </h2>
        <p className="text-md text-black text-center mb-8">
          {currentQuestion.question}
        </p>

        <div className="grid grid-cols-1 w-[75%] m-auto gap-4 mb-6">
          {currentQuestion.reponses_propose.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(answer)}
              disabled={isAnswerSubmitted}
              className={`
                p-4 rounded-lg text-sm transition-colors duration-200 ease-in-out
                ${
                  isAnswerSubmitted && answer === currentQuestion.response
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : isAnswerSubmitted && selectedAnswer === answer
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : selectedAnswer === answer
                    ? "bg-[#ed6d18f2] hover:bg-[#ed6c18] text-white"
                    : "bg-white hover:scale-103  text-black border-1 border-black"
                }
                ${isAnswerSubmitted ? "cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              {answer}
            </button>
          ))}
        </div>

        {!isAnswerSubmitted ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={!selectedAnswer}
            className={`
              w-full py-2 text-md font-medium rounded-lg transition-colors duration-200
              ${
                selectedAnswer
                  ? "bg-[#ed6d18f2] hover:bg-[#ed6c18]"
                  : "bg-[#b3510f] cursor-not-allowed"
              }
            `}
          >
            Valider
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="w-full py-2 text-md font-medium bg-green-500 hover:bg-green-600 rounded-lg transition-colors duration-200"
          >
            {currentQuestionIndex < totalQuestions - 1
              ? "Question Suivante"
              : "Voir le Score"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
