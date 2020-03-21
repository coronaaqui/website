import Head from 'next/head';

import { Reset } from '../components/elements/Reset';
import { Banner } from '../components/elements/Banner';
import { Footer } from '../components/elements/Footer';
import { Header } from '../components/elements/Header';
import { App } from '../components/containers/App';

const Home = () => (
  <div className='container'>
    <Reset />
    <Head>
      <title>Corona aqui</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <App />
  </div>
);

export default Home;
