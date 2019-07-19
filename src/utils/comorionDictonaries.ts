import capitalize from './capitalize';
import objectFromEntries from './objectFromEntries';

export const campus = {
  AGUASCALIENTES: 'Aguascalientes',
  CHIHUAHUA: 'Chihuahua',
  LAGUNA: 'Laguna',
  JUAREZ: 'Juárez',
  MONTERREY: 'Monterrey',
  SALTILLO: 'Saltillo',
  TAMPICO: 'Tampico',
  ZACATECAS: 'Zacatecas',
};
export const eventElements = {
  FOOD: 'Comida',
  PLACE: 'Lugar',
  SCHEDULE: 'Horario',
  ORGANIZATION: 'Organización',
  ACTIVITIES: 'Actividades',
  TOPIC: 'Temas',
  STAFF: 'Staff',
};
export const outreachMethods = {
  FACEBOOK_ADS: 'Anuncios de Facebook',
  ONLINE_ADS: 'Publicidad Online',
  FRIENDS: 'Recomendaciones de amigos',
  SCHOOL: 'Escuela',
  WORK: 'Mi trabajo',
};
export const categories = {
  MACHINE_LEARNING: 'Machine Learning',
  BIOTECH: 'Biotech',
  IOT: 'IOT',
  DATA_SCIENCE: 'Data Science',
  SOFTWARE: 'Software',
  BLOCKCHAIN: 'Blockchain',
  INVESTING: 'Inversión',
  ENTERPRENEURSHIP: 'Emprendimiento',
};
export const institutions = {
  TEC_SEC: ' Secundaria - Tec',
  TEC_PREPA: 'Prepa - Tec',
  TEC_UNI: 'Universidad - Tec',
  TEC_TEACHER: 'Docente - Tec',
  TEC_EMPLOYEE: 'Empleado - Tec',
  EXT_SEC: ' Secundaria - Externo',
  EXT_PREPA: 'Prepa - Externo',
  EXT_UNI: 'Universidad - Externo',
  EXT_TEACHER: 'Docente - Externo',
  EXT_EMPLOYEE: 'Empleado - Externo',
  ORION_EMPLOYEE: 'Empleado en el Parque Orión',
  ORION_INTERNAL: 'Equipo interno Orión',
  ENTREPRENEUR: 'Emprendedor (autoempleado)',
};
export const events = objectFromEntries(
  [
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
  ].map(ev => [ev, capitalize(ev)]),
);
export const genders = objectFromEntries(
  ['MALE', 'FEMALE'].map(g => [g, capitalize(g)]),
);
export const audiences = { TEC_ONLY: 'Solo Tec', EVERYONE: 'Todos' };
