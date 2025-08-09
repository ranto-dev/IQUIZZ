import Jumbotron from "./utils/Jumbotron";

export default function BodyApp() {
  const CONTENTS = [
    {
      idToAccess: "/about",
      title: "✨ À propos du projet",
      content: `<strong>Connais-tu réellement Madagascar ? </strong>
        est un quiz interactif et illustré conçu pour tester vos connaissances
        sur la culture, l'histoire, les traditions et les richesses de
        Madagascar 🇲🇬. Le jeu offre une expérience utilisateur gamifiée avec
        effets sonores, visuels et progression dynamique.`,
    },
    {
      idToAccess: "/about-developer",
      title: "💻 À propos du développeur",
      content: `
    Je suis Ranto Andrianandraina, ici à Madagascar 🇲🇬. un être passionné de la technologie. Étant étudiant en informatique à l'université ASJA Antsirabe,
    mon objectif est de créer des outils numériques qui sont à la fois utiles, beaux, et culturellement ancrés.
  `,
    },
  ];
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {CONTENTS.map((content) => {
        return (
          <Jumbotron
            idToAccess={content.idToAccess}
            title={content.title}
            content={content.content}
          />
        );
      })}
    </div>
  );
}
