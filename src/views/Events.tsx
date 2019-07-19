import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import EventRepository from '../repositories/EventRepository';
import ConnectionMapper from '../components/ConnectionMapper';
import SelectInput from '../components/SelectInput';
import NoElements from '../components/NoElements';
import { campus as camp } from '../utils/comorionDictonaries';
// import { event } from "../mocks/mockTypes";
const repo = new EventRepository('mock');
export default function Events(): JSX.Element {
  const [campus, setCampus] = useState<ComorionCampus>('CHIHUAHUA');
  return (
    <>
      <SelectInput
        options={[
          'AGUASCALIENTES',
          'CHIHUAHUA',
          'LAGUNA',
          'JUAREZ',
          'MONTERREY',
          'SALTILLO',
          'TAMPICO',
          'ZACATECAS',
        ].map(el => ({ label: camp[el as ComorionCampus], value: el }))}
        onChange={c => {
          setCampus(c as ComorionCampus);
        }}
        value={campus}
        label='Selecciona tu campus'
      />
      <ConnectionMapper
        noun='evento'
        action={nt => repo.getEventsByDate(new Date('Jan 20 2018'), 50, nt)}
        errorMessage='No se han podido encontrar eventos'
      >
        {items => {
          const filteredItems: ComorionEvent[] = items.filter(
            el => (el as ComorionEvent).campus == campus,
          );
          if (!filteredItems.length) {
            return <NoElements noun={'evento'} />;
          }
          return (
            <div>
              {filteredItems.map(item => (
                <EventCard key={Math.random()} eventObj={item} />
              ))}
            </div>
          );
        }}
      </ConnectionMapper>
    </>
  );
}
