import React, { useState, useEffect } from "react";
import QuizGame from "../components/QuizGame";

interface Quiz {
  question: string;
  reponses_propose: string[];
  response: string;
}

const shuffleArray = (array: Quiz[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const QuizzBody: React.FC = () => {
  const [fetched, setFetched] = useState<Quiz[]>([]);
  const [selectedQuizzes, setSelectedQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    fetch("/quiz-patterns.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setFetched(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (fetched.length > 0) {
      const shuffled = shuffleArray(fetched);
      const fiveQuizzes = shuffled.slice(0, 5);
      setSelectedQuizzes(fiveQuizzes);
    }
  }, [fetched]);

  return (
    <div>
      {selectedQuizzes.length > 0 ? (
        <QuizGame quizzes={selectedQuizzes} />
      ) : (
        <p>Chargement des quiz...</p>
      )}
    </div>
  );
};

export default QuizzBody;
