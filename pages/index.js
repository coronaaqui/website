import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CountryOverview } from '../src/components/containers/CountryOverview';
import { EventsOverview } from '../src/components/containers/EventsOverview';
import { Footer } from '../src/components/elements/Footer';
import { Header } from '../src/components/elements/Header';
import { Reset } from '../src/components/elements/Reset';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadSectors,
  loadEvents,
  getSectors,
  getEvents,
  resetState
} from '../src/redux/services/events';

const Home = () => {
  const dispatch = useDispatch();

  const [cases, setCases] = useState({});
  const sectors = useSelector(getSectors);
  const events = useSelector(getEvents);

  async function fetchCases() {
    try {
      const res = await fetch('/api/cases');
      const payload = await res.json();

      setCases(payload);
    } catch (err) {
      //TODO:handle error
    }
  }

  useEffect(() => {
    fetchCases();
    dispatch(loadSectors({ ordering: 'total_estimated_impact', limit: 4 }));

    return function cleanup() {
      dispatch(resetState());
    };
  }, []);

  useEffect(() => {
    if (!sectors.length) return;

    for (let sector of sectors) {
      dispatch(loadEvents(sector.id));
    }
  }, [sectors]);

  return (
    <div className='container'>
      <Reset />
      <Head>
        <title>Corona Brasil</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <CountryOverview sectors={sectors} cases={cases} />
      <EventsOverview sectors={sectors} events={events} />
      <Footer />
    </div>
  );
};

export default Home;
