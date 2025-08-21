import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header>
      <div>
        <h1 className="text-5xl">
          Connais-tu <span className="text-amber-600 font-semibold">Madagascar</span> ?
        </h1>
      </div>
      <div className="py-5">
        <p>
          If you want to eat a fabilious and delicious food! You can going to
          our stablissement
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <button className="rounded-full px-10 py-4 bg-amber-600">
          <Link to="/commencer-un-quiz" className="text-light text-decoration-none">
            Commencer à jouer
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Hero;
