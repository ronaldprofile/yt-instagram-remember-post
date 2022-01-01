let Messages = [
  "Postar uma foto do meu setup",
  "Postar uma frase motivacional",
  "Indicar uma comunidade de estudos",
  "Indicar uma plataforma online de programação",
  "Falar sobre carreira dev",
  "Falar sobre dicas de programação e boas práticas",
  "Falar sobre a técnica do pomodoro",
  "Falar sobre a técnica do active recall"
];

const sortMessage = () => {
  const indexMessage = Math.floor(Math.random() * Messages.length);

  return Messages[indexMessage];
};

export { sortMessage };
