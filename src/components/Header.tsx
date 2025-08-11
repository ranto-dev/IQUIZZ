import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="bg-[#ed6c18] text-center py-20 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-white md:text-4xl font-semibold leading-tight mb-4">
          Connais-tu Madagascar ?
        </h1>
        <p className="text-dm text-white mb-8">
          Participez à des quiz amusants et améliorez votre culture et apprend à
          connaitre de plus en plus votre pays!
        </p>
        <Link
          to={"/quizz-start"}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Commencer le Quiz
        </Link>
      </div>
    </section>
  );
}
