import Head from 'next/head'

import { Reset } from '../components/Reset'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'

const Home = () => (
  <div className="container">
    <Reset />
    <Head>
      <title>Corona aqui</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Banner />
    </main>

    <Footer />
  </div>
)

export default Home
