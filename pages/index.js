import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Reset } from '../components/elements/Reset';
import { Banner } from '../components/elements/Banner';
import { Footer } from '../components/elements/Footer';
import { Header } from '../components/elements/Header';
import { CountryOverview } from '../components/containers/CountryOverview';
import fetch from 'isomorphic-unfetch';
import { EventsOverview } from '../components/containers/EventsOverview';

function useCases() {
  const [cases, setCases] = useState({});

  return;
}
const Home = () => {
  const [cases, setCases] = useState({});

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
  }, []);

  return (
    <div className='container'>
      <Reset />
      <Head>
        <title>Corona aqui</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <CountryOverview cases={cases} />
      <EventsOverview />
    </div>
  );
};

export default Home;
