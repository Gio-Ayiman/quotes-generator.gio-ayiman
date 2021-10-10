const citations = [
  { auteur: "Victor Hugo", texte: "Le souvenir, c'est la présence invisible." },
  {
    auteur: "Oscar Wilde",
    texte: "La beauté est dans les yeux de celui qui regarde.",
  },
  {
    auteur: "Albert Einstein",
    texte: "Un problème sans solution est un problème mal posé.",
  },
  { auteur: "René Descartes", texte: "Je pense, donc je suis." },
  { auteur: "Jules César", texte: "Qui veut la paix prépare la guerre." },
  {
    auteur: "Gandhi",
    texte:
      "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.",
  },
  {
    auteur: "Victor Hugo",
    texte: "C'est de l'enfer des pauvres qu'est fait le paradis de riches.",
  },
  {
    auteur: "Jacques Chirac",
    texte: "Les promesses n'engagent que ceux qui les reçoivent.",
  },
  {
    auteur: "René Descartes",
    texte: "Science sans conscience n'est que ruine de l'âme.",
  },
  {
    auteur: "Friedrich Hegel",
    texte: "Rien ne s'est accompli dans le monde sans passion.",
  },
  {
    auteur: "John Adams",
    texte: "A l'état de nature, l'homme est un loup pour l'homme.",
  },
  {
    auteur: "Pierre Corneille",
    texte:
      "Je suis jeune, il est vrai ; mais aux âmes bien nées la valeur n'attend pas le nombre des années.",
  },
  {
    auteur: "Martin Luther King",
    texte:
      "J'ai le rêve qu'un jour mes quatre enfants vivront dans une nation où ils ne seront pas jugés pour la couleur de leur peau, mais pour leur caractère.",
  },
];

let monBoutton = document.getElementById("boutton-citation");

function getIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getCitation() {
  let content = getIndex(0, citations.length);
  document.getElementById(
    "div-citation"
  ).innerHTML = `"${citations[content].texte}"`;
  document.getElementById("div-auteur").innerHTML = citations[content].auteur;
}

getCitation();

monBoutton.addEventListener("click", function (e) {
  getCitation();
});
