// Has it's own DB table
interface ComorionEvent {
  id: string;
  campus: ComorionCampus;
  image: string;
  category: ComorionCategory;
  type: ComorionEventTypes;
  eventEnd: string;
  eventStart: string;
  info: ComorionInfo;
  button: ComorionButton;
  place: ComorionPlace;
  teamId: string;
  audience: ComorionAudience;
  peopleMaybeGoing: number;
  peopleAbsolutelyGoing: number;
  approximatedTotalAttendees: number;
  [key: string]: any;
}
type ComorionGenders = 'MALE' | 'FEMALE';
type ComorionCampus =
  | 'CHIHUAHUA'
  | 'LAGUNA'
  | 'JUAREZ'
  | 'MONTERREY'
  | 'AGUASCALIENTES'
  | 'TAMPICO'
  | 'ZACATECAS'
  | 'SALTILLO';
// Has it's own DB table
interface ComorionUser {
  campus: ComorionCampus;
  id: string;
  gender: 'MALE' | 'FEMALE';
  skinColor: 0 | 1 | 2 | 3 | 4 | 5;
  studentId: string;
  fname: string;
  lname: string;
  bdate: string;
  institution: ComorionInstitution;
  contactInfo: ComorionContactInfo;
  about: string;
  [key: string]: any;
}

// Has it's own DB table
interface ComorionTeam {
  campus: ComorionCampus;
  id: string;
  logo: string;
  info: ComorionInfo;
  contactInfo: ComorionContactInfo;
  isValid: boolean;
  headquarters: ComorionPlace;
  [key: string]: any;
}

// Has it's own DB table
interface ComorionEventFeedback {
  campus: ComorionCampus;
  id: string;
  eventId: string;
  userId: string;
  initialInterest: string;
  loveIndex: number;
  commentary: string;
  mostLovedElement: ComorionEventElements;
  leastLovedElement: ComorionEventElements;
  outreachMethod: ComorionOutreachMethods;
}
type ComorionAudience = 'TEC_ONLY' | 'EVERYONE';
type ComorionEventElements =
  | 'FOOD'
  | 'PLACE'
  | 'SCHEDULE'
  | 'ORGANIZATION'
  | 'ACTIVITIES'
  | 'TOPIC'
  | 'STAFF';

type ComorionOutreachMethods =
  | 'FACEBOOK_ADS'
  | 'ONLINE_ADS'
  | 'FRIENDS'
  | 'SCHOOL'
  | 'WORK';

interface ComorionPlace {
  instructions: string;
  placeId: string;
}

interface ComorionButton {
  label: string;
  link: string;
}

interface ComorionInfo {
  name: string;
  headline: string;
  description: string;
  body: string;
}

interface string {
  caption: string;
  url: string;
}

interface ComorionContactInfo {
  email: string;
  phone: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  facebook?: string;
  github?: string;
  area: ComorionCategory;
}

type ComorionCategory =
  | 'MACHINE_LEARNING'
  | 'BIOTECH'
  | 'IOT'
  | 'DATA_SCIENCE'
  | 'SOFTWARE'
  | 'BLOCKCHAIN'
  | 'INVESTING'
  | 'ENTERPRENEURSHIP';

type ComorionInstitution =
  | 'TEC_SEC'
  | 'TEC_PREPA'
  | 'TEC_UNI'
  | 'TEC_TEACHER'
  | 'TEC_EMPLOYEE'
  | 'EXT_SEC'
  | 'EXT_PREPA'
  | 'EXT_UNI'
  | 'EXT_TEACHER'
  | 'EXT_EMPLOYEE'
  | 'ORION_EMPLOYEE'
  | 'ENTREPRENEUR'
  | 'ORION_INTERNAL';

type ComorionEventTypes =
  | 'HACKATHON' // 50
  | 'COURSE' // 30
  | 'TALK' // 20
  | 'NETWORKING' // 30
  | 'FESTIVAL' // 50
  | 'WORKSHOP' // 30
  | 'DEMO_DAY' // 60
  | 'AWARDING' // 40
  | 'STARTUP' // 60
  | 'BOOTCAMP'; // 30
