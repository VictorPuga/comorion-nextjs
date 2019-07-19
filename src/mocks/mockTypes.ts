export const user: ComorionUser = {
  id: "user-id",
  studentId: "A01568769",
  fname: "Jonnathan",
  lname: "Appleseed",
  bdate: "2002-02-19",
  institution: "ORION_EMPLOYEE",
  about: "I am a coder and have been for 20 years.",
  teamId: "team-id",
  gender: "MALE",
  skinColor: 0,
  contactInfo: {
    email: "acosta_jf@icloud.com",
    phone: "+5216141023897",
    area: "SOFTWARE"
  },
  campus: "CHIHUAHUA"
};
export const event: ComorionEvent = {
  campus: "CHIHUAHUA",
  id: "event-id-mock",
  info: {
    headline: "¡Asiste a este gran evento y crece tus habilidades!",
    body: `# ¡Esto es un título!\nEste es un texto en **negritas.**\nEste está en *itálicas.*\nAsí se ve un [link](https://google.com).\n---\nArriba se ve una división.`,
    description:
      "Este evento busca ayudarte a crecer tus habilidades, crear comunidad, charlar con gente interesante, y buena comida. ¿Qué másssssssssssssss?",
    name: "¡Asiste a este gran evento y crece tus habilidades"
  },
  image:
    "https://s3-us-west-2.amazonaws.com/comorion-content-bucket/example-event-image.png",

  audience: "EVERYONE",
  category: "SOFTWARE",
  eventEnd: "2019-05-19T13:30+08:00",
  eventStart: "2019-05-19T18:30+08:00",
  button: {
    link: "http://twitter.com",
    label: "Botón de mi evento"
  },
  place: {
    instructions: "Nivel 7 del PIT3 (edificio en six-sag)",
    placeId: "ChIJ5Y3s9nZD6oYRbRfGP9fuugI"
  },
  type: "HACKATHON",
  teamId: "team-id",
  peopleMaybeGoing: 40,
  peopleAbsolutelyGoing: 100,
  approximatedTotalAttendees: 200
};
export const team: ComorionTeam = {
  campus: "CHIHUAHUA",
  id: "team-id",
  logo:
    "https://pmchollywoodlife.files.wordpress.com/2017/09/apple-event-iphone-8-ftr.jpg?w=620",
  info: {
    name: "HelloWorld! labs",
    headline: "Coding our future",
    body: `# Do you use technology?
        Tech is evermore pervasive and part of our lives and our society and, being frank and taking everything into account, mostly for good.
        In the last decades we have seen as a society unbeliveable economic, social, and educational progress thanks to technology and, specifically, digital technologies.
        We believe tech is a catalyst for the development and growth of any society and our mission is to bring it closer to everyone for only when everyone is a part of it, does tech really fulfils its promise of openess and colaboration.
        For everyone, anywhere.`,
    description:
      "In few words we teach, connect, and talk with people around tech."
  },
  headquarters: {
    instructions: "Sixth floor. Ask for Jonnathan Appleseed.",
    placeId: "ChIJ5Y3s9nZD6oYRbRfGP9fuugI"
  },
  contactInfo: {
    email: "helloworldlabs@absolutelyfakemail.com",
    phone: "+5216141023897",
    area: "INVESTING"
  },
  isValid: true
};
