# 🧠 Quiz App – React + TypeScript

Une application web de quiz interactive développée avec **React** et **TypeScript**, permettant aux utilisateurs de tester leurs connaissances à travers une série de questions à choix multiples.

---

## 🚀 Fonctionnalités

- ✅ Interface utilisateur responsive et moderne
- ✅ Chargement dynamique des questions (via API ou JSON local)
- ✅ Chronomètre intégré (optionnel)
- ✅ Système de score automatique
- ✅ Navigation entre les questions
- ✅ Affichage des réponses correctes à la fin

---

## 🛠️ Stack technique

- ⚛️ [React](https://reactjs.org/)
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/) (ou autre framework CSS au choix)
- 📦 [Vite](https://vitejs.dev/) _(ou Create React App)_

---

## 📦 Installation

```bash
git clone hgit@github.com:ranto-dev/IQUIZZ.git
cd IQUIZZ
npm install
```

---

## ▶️ Lancement de l'application

```bash
npm run dev
```

L'application sera accessible à : `http://localhost:5173`

---

## 🔧 Configuration

Les questions peuvent être stockées dans un fichier `questions.json` :

```json
[
  {
    "question": "Quel est le plus grand océan du monde ?",
    "choices": ["Atlantique", "Arctique", "Indien", "Pacifique"],
    "answer": "Pacifique"
  }
]
```

---

## ✅ Scripts utiles

| Commande          | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Démarrer le serveur local        |
| `npm run build`   | Générer la version de production |
| `npm run preview` | Prévisualiser le build           |
| `npm run lint`    | Vérifier la qualité du code      |

---

## 📸 Aperçu

![screenshot](./screenshot.png)

---

## 🤝 Contribuer

Les contributions sont les bienvenues !
Merci de créer une issue ou une pull request avec vos propositions.

---

## 📄 Licence

Ce projet est sous licence **MIT**.

---

## 👨‍💻 Auteur

Développé par [ranto-dev](https://github.com/ranto-dev)
