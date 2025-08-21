import "./hero.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

function Hero() {
  return (
    <header>
      <div className="rounded-ful text-xl px-3 py-1 flex gap-1 items-center">
        {" "}
        <FaStar className="text-amber-300" />{" "}
        <FaStar className="text-amber-300" /> MadaKo'IS{" "}
        <FaStar className="text-amber-300" />{" "}
        <FaStar className="text-amber-300" />{" "}
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-5xl">
            Connais-tu{" "}
            <span className="text-amber-600 font-semibold">Madagascar</span> ?
          </h1>
        </div>
        <div>
          <p>
            If you want to eat a fabilious and delicious food! You can going to
            our stablissement
          </p>
        </div>
        <div className="flex justify-center gap-2 items-center ">
          <button className="rounded-full px-10 py-4 bg-amber-600">
            <Link
              to="/commencer-un-quiz"
              className="text-light text-decoration-none"
            >
              Démarrer une partie
            </Link>
          </button>
          <button className="rounded-full px-10 py-4 bg-white text-gray-700">
            Comment jouer ?
          </button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
