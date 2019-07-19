import React from 'react';
import parseStringToDate from '../utils/parseStringToDate';
import { institutions } from '../utils/comorionDictonaries';
function calculateAge(bdte: Date) {
  var ageDifMs = Date.now() - bdte.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
export default function UserView(props: { user: ComorionUser }): JSX.Element {
  const { user } = props;
  const {
    institution,
    fname,
    lname,
    about,
    skinColor,
    gender,
    studentId,
    bdate,
    campus,
    contactInfo,
  } = user;
  const {
    phone,
    email,
    linkedin,
    twitter,
    website,
    github,
    facebook,
    area,
  } = contactInfo;
  const info = [
    ['Área', <>{area}</>, area],
    ['Email', <a href={'mailto:' + email}>{email}</a>, email],
    ['Teléfono', <a href={'tel:' + phone}>{phone}</a>, phone],
    ['Matrícula', <>{studentId}</>, studentId],
    ['Campus', <>{campus[0] + campus.toLowerCase().substr(1)}</>, campus],
    ['LinkedIn', <a href={linkedin}>{linkedin}</a>, linkedin],
    ['Facebook', <a href={facebook}>{facebook}</a>, facebook],
    ['Twitter', <a href={twitter}>{twitter}</a>, twitter],
    ['Github', <a href={github}>{github}</a>, github],
    ['Portafolio', <a href={website}>{website}</a>, website],
  ];
  const emojis: {
    [k: string]: string[];
  } = {
    TEC_SEC: ['👩🏻‍🎓,👩🏼‍🎓,👩🏽‍🎓,👩🏾‍🎓,👩🏿‍🎓', '👨🏻‍🎓,👨🏼‍🎓,👨🏽‍🎓,👨🏾‍🎓,👨🏿‍🎓', '🐏🎓'],
    TEC_PREPA: ['👩🏻‍🎓,👩🏼‍🎓,👩🏽‍🎓,👩🏾‍🎓,👩🏿‍🎓', '👨🏻‍🎓,👨🏼‍🎓,👨🏽‍🎓,👨🏾‍🎓,👨🏿‍🎓', '🐏🎓'],
    TEC_UNI: ['👩🏻‍🎓,👩🏼‍🎓,👩🏽‍🎓,👩🏾‍🎓,👩🏿‍🎓', '👨🏻‍🎓,👨🏼‍🎓,👨🏽‍🎓,👨🏾‍🎓,👨🏿‍🎓', '🐏🎓'],
    TEC_TEACHER: ['👩🏻‍🏫,👩🏼‍🏫,👩🏽‍🏫,👩🏾‍🏫,👩🏿‍🏫', '👨🏻‍🏫,👨🏼‍🏫,👨🏽‍🏫,👨🏾‍🏫,👨🏿‍🏫', '🐏🍎'],
    TEC_EMPLOYEE: ['👩🏻‍💼,👩🏼‍💼,👩🏽‍💼,👩🏾‍💼,👩🏿‍💼', '👨🏻‍💼,👨🏼‍💼,👨🏽‍💼,👨🏾‍💼,👨🏿‍💼', '🐏🏢'],
    EXT_SEC: ['👩🏻‍🎓,👩🏼‍🎓,👩🏽‍🎓,👩🏾‍🎓,👩🏿‍🎓', '👨🏻‍🎓,👨🏼‍🎓,👨🏽‍🎓,👨🏾‍🎓,👨🏿‍🎓', '⚡️🎓'],
    EXT_PREPA: ['👩🏻‍🎓,👩🏼‍🎓,👩🏽‍🎓,👩🏾‍🎓,👩🏿‍🎓', '👨🏻‍🎓,👨🏼‍🎓,👨🏽‍🎓,👨🏾‍🎓,👨🏿‍🎓', '⚡️🎓'],
    EXT_UNI: ['👩🏻‍🎓,👩🏼‍🎓,👩🏽‍🎓,👩🏾‍🎓,👩🏿‍🎓', '👨🏻‍🎓,👨🏼‍🎓,👨🏽‍🎓,👨🏾‍🎓,👨🏿‍🎓', '⚡️🎓'],
    EXT_TEACHER: ['👩🏻‍🏫,👩🏼‍🏫,👩🏽‍🏫,👩🏾‍🏫,👩🏿‍🏫', '👨🏻‍🏫,👨🏼‍🏫,👨🏽‍🏫,👨🏾‍🏫,👨🏿‍🏫', '⚡️🍎'],
    EXT_EMPLOYEE: ['👩🏻‍💼,👩🏼‍💼,👩🏽‍💼,👩🏾‍💼,👩🏿‍💼', '👨🏻‍💼,👨🏼‍💼,👨🏽‍💼,👨🏾‍💼,👨🏿‍💼', '⚡️🏢'],
    ORION_EMPLOYEE: ['👩🏻‍💼,👩🏼‍💼,👩🏽‍💼,👩🏾‍💼,👩🏿‍💼', '👨🏻‍💼,👨🏼‍💼,👨🏽‍💼,👨🏾‍💼,👨🏿‍💼', '🚀🏢'],
    ORION_INTERNAL: ['👩🏻‍💼,👩🏼‍💼,👩🏽‍💼,👩🏾‍💼,👩🏿‍💼', '👨🏻‍💼,👨🏼‍💼,👨🏽‍💼,👨🏾‍💼,👨🏿‍💼', '🚀💪🏼'],
    ENTREPRENEUR: ['👩🏻‍🚀,👩🏼‍🚀,👩🏽‍🚀,👩🏾‍🚀,👩🏿‍🚀', '👨🏻‍🚀,👨🏼‍🚀,👨🏽‍🚀,👨🏾‍🚀,👨🏿‍🚀', '🚀🌎'],
  };
  const genders = {
    FEMALE: 0,
    MALE: 1,
  };
  const emoji = emojis[institution as string][genders[gender]].split(',')[
    skinColor
  ];
  const companion = emojis[institution as string][2];
  return (
    <div>
      <h1 className='wrap'>
        {emoji} {fname} {lname}
      </h1>
      <h4 style={{ textAlign: 'right' }}>
        {companion} {institutions[institution]}
        <br />
        {calculateAge(parseStringToDate(bdate, 'DD/MM/YYYY'))} años
      </h4>
      <h5
        className='text-left mt-3 wrap'
        style={{
          background: '#f5f5f5',
          padding: '0.5em',
          borderLeft: '5px solid #ccc',
        }}
      >
        {about}
      </h5>
      {info.map(([lbl, el, val], i) => (
        <div key={lbl + String(i)}>
          {val && (
            <>
              <strong>{lbl}:</strong>
              {'  '}
              {el}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
