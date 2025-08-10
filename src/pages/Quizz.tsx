import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/question.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setQuestions(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <FaSpinner />
      </div>
    );

  return (
    <div>
      <h1>Hello, from QUIZZ</h1>
      <div>
        {questions.map((question) => {
          return <p key={question}>{question.question}</p>;
        })}
      </div>
    </div>
  );
}
