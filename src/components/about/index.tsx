import "./about.css";
import { FaRegLightbulb, FaSplotch, FaGraduationCap } from "react-icons/fa6";

export default function About() {
  const appTarget = [
    {
      id: 1,
      icon: <FaRegLightbulb className="text-4xl text-amber-600" />,
      title: "Découvert et culture",
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      icon: <FaGraduationCap className="text-4xl text-amber-600" />,
      title: "Education",
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      icon: <FaSplotch className="text-4xl text-amber-600" />,
      title: "Loisir et divertissement",
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="flex flex-row gap-2 justify-center items-center max-w-full max-h-full p-4 bg-amber-50">
      <div className="flex flex-col justify-center items-center gap-[2rem] text-center">
        {/* About introducton */}
        <div className="w-full lg:w-[75%] m-auto flex flex-col gap-4">
          <h1 className="text-2xl lg:text-4xl text-amber-600">
            ✨ À propos du projet
          </h1>
          <p>
            <span className="font-semibold">
              Connais-tu réellement Madagascar ?
            </span>{" "}
            est un quiz interactif et illustré conçu pour tester vos
            connaissances sur la culture, l'histoire, les traditions et les
            richesses de Madagascar 🇲🇬. Le jeu offre une expérience utilisateur
            gamifiée avec effets sonores, visuels et progression dynamique. Le
            but de ce jeu est de sensibiliser les utilisateurs à la richesse
            culturelle et historique de Madagascar à travers une expérience
            ludique, éducative et interactive.
          </p>
        </div>

        {/* About card */}
        <div className="flex flex-col lg:flex-row gap-2">
          {appTarget.map((t) => {
            return (
              <div
                key={t.id}
                className="rounded-2xl shadow-2xl p-4 w-full h-full flex flex-col gap-4 items-center bg-white hover-effect"
              >
                <div>{t.icon}</div>
                <div>
                  <h1 className="text-xl text-amber-600">{t.title}</h1>
                  <p className="text-sm py-2">{t.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-full w-full about-bg-mada hidden xl:block"></div>
    </div>
  );
}
