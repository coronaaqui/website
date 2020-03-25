import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CountryOverview } from '../src/components/containers/CountryOverview';
import { EventsOverview } from '../src/components/containers/EventsOverview';
import { Footer } from '../src/components/elements/Footer';
import { Header } from '../src/components/elements/Header';
import { Reset } from '../src/components/elements/Reset';

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
        <title>Corona Brasil</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <CountryOverview cases={cases} />
      <EventsOverview />
      <Footer />
    </div>
  );
};

export default Home;
