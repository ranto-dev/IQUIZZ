import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRotateLeft,
  FaHouse,
  FaRegCircleCheck,
  FaStopwatch,
  FaUserGraduate,
} from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";

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
  const [questionTimeLeft, setQuestionTimeLeft] = useState(15);
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
        handleNextQuestion();
      }
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionTimeLeft, isAnswerSubmitted, quizFinished]);

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
      <div className="flex flex-col gap-4 lg:gap-10 bg-white rounded-4xl shadow-2xl p-10 w-[75%] lg:w-[40%] xl:w-[30%]">
        <div>
          <h2 className="text-2xl lg:text-4xl text-[#ed6c18]">Quiz terminé !</h2>
        </div>
        <div>
          <p className="text-black text-sm">
            Votre score final est de{" "}
            <span className="font-bold text-green-400 underline">{score}</span>{" "}
            / {totalQuestions}
          </p>
          <p className="text-xl text-black mt-4">{scoreMessage}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-1 justify-center m-auto">
          <button
            onClick={handleRestart}
            className="bg-green-500 rounded-2xl text-white text-sm lg:text-md px-3 py-2 lg:px-4 lg:py-3 flex gap-1 justify-center items-center"
          >
            <FaArrowRotateLeft />
            Recommencer
          </button>
          <Link
            className="bg-amber-600 rounded-2xl text-white text-sm lg:text-md px-3 py-2 lg:px-4 lg:py-3 flex gap-1 justify-center items-center"
            to={"/"}
          >
            <FaHouse />
            Menu principale
          </Link>
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
    <div className="w-[75%] lg:w-[35%] xl: x-[30%] min-h-full m-auto bg-white p-4 rounded-4xl">
      {/* Timer bock start */}
      <div
        className={`flex justify-end items-center text-lg ${
          questionTimeLeft > 5
            ? " text-green-500"
            : "text-amber-700 animate-pulse"
        } ${!isAnswerSubmitted ? "block" : "hidden"}`}
      >
        <FaStopwatch />
        <span>
          {questionTimeLeft < 10 ? "0" : null}
          {questionTimeLeft}s
        </span>
      </div>
      {/* Timer bock end */}

      {/* Quiz bock start */}
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-2xl text-amber-600">
          {currentQuestionIndex + 1} / {totalQuestions}
        </h2>
        <p className="text-sm text-black text-center">
          {currentQuestion.question}
        </p>

        <div className="flex flex-col gap-2">
          {currentQuestion.reponses_propose.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(answer)}
              disabled={isAnswerSubmitted}
              className={`
                p-2 rounded-lg text-sm transition-colors duration-200 ease-in-out
                ${
                  isAnswerSubmitted && answer === currentQuestion.response
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : isAnswerSubmitted && selectedAnswer === answer
                    ? "bg-amber-700 hover:bg-amber-800 text-white"
                    : selectedAnswer === answer
                    ? "bg-gray-800 hover:bg-gray-900 text-white"
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
              w-full text-md font-medium rounded-lg transition-colors duration-200 flex gap-1 justify-center items-center p-2
              ${
                selectedAnswer
                  ? "bg-[#ed6d18f2] hover:bg-[#ed6c18]"
                  : "bg-[#b3510f] cursor-not-allowed"
              }
            `}
          >
            <FaRegCircleCheck />
            Valider
          </button>
        ) : (
          <div className="flex gap-2 border-t-1 border-gray-800 mt-4 py-4 ">
            <button className="w-full flex gap-1 justify-center items-center p-2 font-medium text-sm bg-gray-700 hover:bg-gray-800 rounded-full transition-colors duration-200">
              <FaUserGraduate />
              Consulter
            </button>
            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                className="w-full flex gap-1 justify-center items-center p-2 font-medium text-sm bg-green-500 hover:bg-green-600 rounded-full transition-colors duration-200"
                onClick={handleNextQuestion}
              >
                <FaArrowCircleRight />
                Suivante
              </button>
            ) : (
              <button
                className="w-full py-2 text-md font-medium bg-green-500 hover:bg-green-600 rounded-lg transition-colors duration-200"
                onClick={handleNextQuestion}
              >
                Voir le score
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
