import dateToString from '../utils/parseDateToString';
import { categories, events, audiences } from '../utils/comorionDictonaries';
export const initialEvent: ComorionEvent = {
  id: 'event-id-mock',
  campus: 'CHIHUAHUA',
  info: {
    headline: 'La headline de tu evento',
    body: `# ¡Esto es un título!\nEste es un texto en **negritas.**\nEste está en *itálicas.*\nAsí se ve un [link](https://google.com).\n---\nArriba se ve una división.`,
    description:
      'Esta es la descripción de tu evento. Úsala para explicar tu evento a grandes rasgos.',
    name: 'El Nombre de tu Evento',
  },
  image:
    'https://s3-us-west-2.amazonaws.com/comorion-content-bucket/example-event-image.png',
  category: 'BIOTECH',
  type: 'HACKATHON',
  audience: 'EVERYONE',
  eventEnd: dateToString(
    new Date(new Date().setDate(new Date().getDate() + 1)),
  ),
  eventStart: dateToString(),
  button: {
    link: 'http://twitter.com',
    label: 'Botón de mi evento',
  },
  place: {
    instructions: 'Nivel 7 del PIT3 (edificio en six-sag)',
    placeId: 'ChIJ5Y3s9nZD6oYRbRfGP9fuugI',
  },
  teamId: 'team-id',
  peopleMaybeGoing: 40,
  peopleAbsolutelyGoing: 100,
  approximatedTotalAttendees: 200,
} as ComorionEvent;
/**
  label: "¿Dónde?",
  label: "Imagen",
  */
export const sections: PaginatedFormSection[] = [
  {
    label: '¿Qué?',
    inputs: [
      {
        valuePath: 'info.name',
        label: 'Nombre',
        validation: [
          {
            validate: v => v.length < 31,
            invalidMessage: 'Máximo 30 caracteres',
          },
        ],
      },
      {
        valuePath: 'info.headline',
        label: 'Headline',
        validation: [
          {
            validate: v => v.length < 61,
            invalidMessage: 'Máximo 60 caracteres',
          },
        ],
      },
      {
        valuePath: 'info.description',
        label: 'Descripción',
        inputType: 'Textarea',
        rows: 3,
        validation: [
          {
            validate: v => v.length < 141,
            invalidMessage: 'Máximo 140 caracteres',
          },
        ],
      },
    ],
  },
  {
    label: '¿Cuándo?',
    inputs: [
      {
        valuePath: 'eventStart',
        label: 'Comienzo',
        validation: [
          {
            validate: v => Boolean(v.match(/\d\d\/\d\d\/\d\d\d\d, \d\d:\d\d/)),
            invalidMessage: 'Sigue el formato: DD/MM/AAAA, HH:MM',
          },
        ],
      },
      {
        valuePath: 'eventEnd',
        label: 'Final',
        validation: [
          {
            validate: v => Boolean(v.match(/\d\d\/\d\d\/\d\d\d\d, \d\d:\d\d/)),
            invalidMessage: 'Sigue el formato: DD/MM/AAAA, HH:MM',
          },
        ],
      },
    ],
  },
  {
    label: 'Categorías',
    inputs: [
      {
        valuePath: 'category',
        label: 'Categoría',
        inputType: 'Select',
        options: [
          'MACHINE_LEARNING',
          'SOFTWARE',
          'BIOTECH',
          'IOT',
          'DATA_SCIENCE',
          'SOFTWARE',
          'BLOCKCHAIN',
          'INVESTING',
          'ENTERPRENEURSHIP',
        ].map(opt => ({
          label: categories[opt as ComorionCategory],
          value: opt,
        })),
      },
      {
        valuePath: 'type',
        label: 'Tipo de Evento',
        inputType: 'Select',
        options: [
          'HACKATHON',
          'COURSE',
          'TALK',
          'NETWORKING',
          'FESTIVAL',
          'WORKSHOP',
          'DEMO_DAY',
          'AWARDING',
          'STARTUP',
          'BOOTCAMP',
        ].map(opt => ({ label: events[opt], value: opt })),
      },
      {
        valuePath: 'audience',
        label: 'Audiencia',
        inputType: 'Select',
        options: ['TEC_ONLY', 'EVERYONE'].map(opt => ({
          label: audiences[opt as ComorionAudience],
          value: opt,
        })),
      },
    ],
  },
  {
    label: 'Botón',
    inputs: [
      {
        valuePath: 'button.label',
        label: 'Botón',
        validation: [
          {
            validate: v => v.length < 21,
            invalidMessage: 'Máximo 20 caracteres',
          },
        ],
      },
      {
        valuePath: 'button.link',
        label: 'Enlace',
      },
    ],
  },
  {
    label: 'Blog',
    inputs: [
      {
        valuePath: 'info.body',
        label: 'Blog',
        inputType: 'Textarea',
        rows: 12,
      },
    ],
  },
  {
    label: '¿Dónde?',
    inputs: [
      {
        inputType: 'Place',
        valuePath: 'place.placeId',
        label: 'Lugar',
      },
      {
        valuePath: 'place.instructions',
        label: 'Instrucciones',
      },
    ],
  },
  {
    label: 'Imagen',
    inputs: [
      {
        label: 'Imagen',
        inputType: 'Image',
        valuePath: 'image',
      },
    ],
  },
];
