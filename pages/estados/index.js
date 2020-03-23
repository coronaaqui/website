import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Reset } from '../../components/elements/Reset';
import { Header } from '../../components/elements/Header';
import { Indicator } from '../../components/elements/Indicator';
import { RegionSelect } from '../../components/elements/RegionSelect';
import { RegionOverview } from '../../components/containers/RegionOverview';
import { regions } from '../../resources/regions';
import { RegionProvider } from '../../hooks/regions';

export const Estado = ({ uf }) => {
  const currRegion =
    uf && regions.filter(item => item.initial === uf.toUpperCase())[0];

  return (
    <div className='container'>
      <Reset />
      <Head>
        <title>Corona Brasil - {currRegion?.name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <RegionProvider region={currRegion}>
        <Header />
        <RegionOverview />
      </RegionProvider>
    </div>
  );
};

const EstadoContainer = () => {
  const router = useRouter();
  const { uf } = router.query;

  return <Estado uf={uf} />;
};

export default EstadoContainer;
