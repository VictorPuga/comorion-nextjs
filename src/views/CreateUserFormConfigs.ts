import { categories } from '../utils/comorionDictonaries';

export const initialUser: ComorionUser = {
  id: 'mock-user',
  studentId: 'A01568769',
  about: 'Soy un alumno de Prepa',
  fname: 'Felipe',
  lname: 'Acosta',
  bdate: '19/02/2002',
  institution: 'TEC_PREPA',
  gender: 'MALE',
  skinColor: 2,
  campus: 'CHIHUAHUA',
  contactInfo: {
    email: 'acosta_jf@icloud.com',
    phone: '+5216141023897',
    area: 'SOFTWARE',
  },
};
export const sections: PaginatedFormSection[] = [
  {
    label: 'Tú',
    inputs: [
      {
        label: 'Nombre',
        valuePath: 'fname',
      },
      {
        label: 'Apellido',
        valuePath: 'lname',
      },
      {
        inputType: 'Textarea',
        rows: 3,
        label: 'Sobre Tí',
        valuePath: 'about',
      },
    ],
  },
  {
    label: 'Personal',
    inputs: [
      {
        label: 'Institución',
        valuePath: 'institution',
        inputType: 'Select',
        options: [
          {
            value: 'TEC_SEC',
            label: 'Alumno Secundaria - Tec',
          },
          {
            value: 'TEC_PREPA',
            label: 'Alumno Prepa - Tec',
          },
          {
            value: 'TEC_UNI',
            label: 'Alumno Universidad - Tec',
          },
          {
            value: 'TEC_TEACHER',
            label: 'Docente - Tec',
          },
          {
            value: 'TEC_EMPLOYEE',
            label: 'Empleado - Tec',
          },
          {
            value: 'EXT_SEC',
            label: 'Alumno Secundaria - Externo',
          },
          {
            value: 'EXT_PREPA',
            label: 'Alumno Prepa - Externo',
          },
          {
            value: 'EXT_UNI',
            label: 'Alumno Universidad - Externo',
          },
          {
            value: 'EXT_TEACHER',
            label: 'Docente - Externo',
          },
          {
            value: 'EXT_EMPLOYEE',
            label: 'Empleado - Externo',
          },
          {
            value: 'ORION_EMPLOYEE',
            label: 'Empleado en Parque Orión',
          },
          {
            value: 'ORION_INTERNAL',
            label: 'Equipo Orion (interno)',
          },
          {
            value: 'ENTREPRENEUR',
            label: 'Emprendedor',
          },
        ],
      },
      {
        label: 'Matrícula Tec (no requerido)',
        valuePath: 'studentId',
        validation: [
          {
            validate: v => Boolean(v.match(/A0\d\d\d\d\d\d\d/)) || v === '',
            invalidMessage: 'Formato: A0XXXXXXX',
          },
        ],
        required: false,
      },
      {
        label: 'Fecha de Nacimiento',
        valuePath: 'bdate',
        validation: [
          {
            validate: v => Boolean(v.match(/\d\d\/\d\d\/\d\d\d\d/)),
            invalidMessage: 'Formato: DD/MM/AAAA',
          },
        ],
      },
      {
        label: 'Género',
        valuePath: 'gender',
        inputType: 'Select',
        options: [
          {
            label: 'Hombre',
            value: 'MALE',
          },
          {
            label: 'Mujer',
            value: 'FEMALE',
          },
        ],
      },
      {
        label: 'Color de Piel (emoji)',
        valuePath: 'skinColor',
        inputType: 'Select',
        options: ['0', '1', '2', '3', '4'],
      },
    ],
  },
  {
    label: 'Contacto',
    inputs: [
      {
        label: 'Área',
        valuePath: 'contactInfo.area',
        inputType: 'Select',
        options: [
          'MACHINE_LEARNING',
          'BIOTECH',
          'IOT',
          'DATA_SCIENCE',
          'SOFTWARE',
          'BLOCKCHAIN',
          'INVESTING',
          'ENTERPRENEURSHIP',
        ].map(c => ({ label: categories[c as ComorionCategory], value: c })),
      },
      {
        label: 'Email',
        valuePath: 'contactInfo.email',
        validation: [
          {
            validate: v =>
              Boolean(
                v.match(
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                ),
              ),
            invalidMessage: 'Escoge un mail válido',
          },
        ],
      },
      {
        label: 'Teléfono',
        valuePath: 'contactInfo.phone',
        validation: [
          {
            validate: v =>
              Boolean(
                v.match(
                  /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{10,14}/,
                ),
              ),
            invalidMessage: 'Escoge un teléfono válido',
          },
        ],
      },
      {
        label: 'LinkedIn (no requerido)',
        valuePath: 'contactInfo.linkedin',
        required: false,
      },
      {
        label: 'Facebook (no requerido)',
        valuePath: 'contactInfo.facebook',
        required: false,
      },
      {
        label: 'Twitter (no requerido)',
        valuePath: 'contactInfo.twitter',
        required: false,
      },
      {
        label: 'GitHub (no requerido)',
        valuePath: 'contactInfo.github',
        required: false,
      },
      {
        label: 'Portafolio (no requerido)',
        valuePath: 'contactInfo.website',
        required: false,
      },
    ],
  },
];
