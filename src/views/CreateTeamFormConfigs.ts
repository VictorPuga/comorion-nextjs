export const initialTeam: ComorionTeam = {
  id: "team-mock",
  campus: "CHIHUAHUA",
  info: {
    name: "Mi Equipo Emprendedor",
    body: `# ¡Esto es un título!\nEste es un texto en **negritas.**\nEste está en *itálicas.*\nAsí se ve un [link](https://google.com).\n---\nArriba se ve una división.\nEn este espacio le cuento a todo el mundo de que trata el evento`,
    description: "De esto trata el equipo",
    headline: "Con esto capto su atención"
  },
  logo:
    "https://pmchollywoodlife.files.wordpress.com/2017/09/apple-event-iphone-8-ftr.jpg?w=620",

  headquarters: {
    instructions: "Entra al PIT 3, y visitanos en el piso 6",
    placeId: "ChIJ5Y3s9nZD6oYRbRfGP9fuugI"
  },
  contactInfo: {
    email: "acosta_jf@aicloud.com",
    phone: "+5216141023897",
    area: "DATA_SCIENCE"
  },
  isValid: false
};
export const sections: PaginatedFormSection[] = [
  {
    label: "¿Qué?",
    inputs: [
      {
        valuePath: "info.name",
        label: "Nombre",
        validation: [
          {
            validate: v => v.length < 31,
            invalidMessage: "Máximo 30 caracteres"
          }
        ]
      },
      {
        valuePath: "info.headline",
        label: "Headline",
        validation: [
          {
            validate: v => v.length < 61,
            invalidMessage: "Máximo 60 caracteres"
          }
        ]
      },
      {
        valuePath: "info.description",
        label: "Descripción",
        inputType: "Textarea",
        rows: 3,
        validation: [
          {
            validate: v => v.length < 141,
            invalidMessage: "Máximo 140 caracteres"
          }
        ]
      }
    ]
  },
  {
    label: "Blog",
    inputs: [
      {
        valuePath: "info.body",
        label: "Blog",
        inputType: "Textarea",
        rows: 12
      }
    ]
  },
  {
    label: "Contacto",
    inputs: [
      {
        inputType: "Place",
        valuePath: "headquarters.placeId",
        label: "Lugar"
      },
      {
        valuePath: "headquarters.instructions",
        label: "Instrucciones de Entrada"
      },
      {
        valuePath: "contactInfo.email",
        label: "Email"
      },
      {
        valuePath: "contactInfo.phone",
        label: "Teléfono"
      }
    ]
  },
  {
    label: "Imagen",
    inputs: [
      {
        label: "Imagen",
        inputType: "Image",
        valuePath: "logo"
      }
    ]
  }
];
