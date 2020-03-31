import {
  GlobalOutlined,
  InstagramOutlined,
  SearchOutlined,
  TwitterOutlined
} from '@ant-design/icons';
import { Badge, Checkbox, Empty, Input, List } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { RegionOverview } from '../../src/components/containers/RegionOverview';
import { regionWithStyle } from '../../src/components/containers/RegionPage/RegionPage.styles';
import { Event } from '../../src/components/elements/Event';
import { Footer } from '../../src/components/elements/Footer';
import { Header } from '../../src/components/elements/Header';
import { Reset } from '../../src/components/elements/Reset';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadSectors,
  getSectors,
  LOAD_SECTORS,
  selectSector,
  loadEvents,
  getLastCheck,
  getEvents,
  getSelectedSectors,
  getRegions,
  loadRegions,
  resetState
} from '../../src/redux/services/events';
import { createLoadingSelector } from '../../src/helpers/redux/requests';
import { SectorIcon } from '../../src/components/elements/SectorIcon';
import { Dot, Text, Title } from '../../src/components/elements/Typography';
import { RegionProvider } from '../../src/hooks/regions';
import { regions } from '../../src/resources/regions';
import { HeadTags } from '../../src/components/elements/HeadTags';
import { EVENTS_FORM } from '../../src/resources/links';
import ReactGA from 'react-ga';
import { SocialSharing } from '../../src/components/elements/SocialSharing';

function normalizeSearch(str) {
  return str.toLowerCase().trim();
}

const sharing = {
  whatsapp: region => () => {
    const url = `${document.location.href}/?utm_source=whatsapp&utm_medium=social&utm_campaign=sharing`;
    return `Acesse o Corona Brasil e confira o que está funcionando em seu estado (${region}), até quando e por quê. \n\n ${url}`;
  }
};

export const Estado = regionWithStyle(({ uf, className }) => {
  const dispatch = useDispatch();
  const sectors = useSelector(getSectors);
  const events = useSelector(getEvents);
  const lastCheck = useSelector(getLastCheck);
  const loading = useSelector(createLoadingSelector([LOAD_SECTORS]));
  const selectedSectors = useSelector(getSelectedSectors);
  const regionInfo = useSelector(getRegions(uf));

  const [categoryFilter, setCategoryFilter] = useState(false);
  const currRegion =
    uf && regions.filter(item => item.initial === uf.toUpperCase())[0];

  const handleCategorySearch = ev => {
    const { value } = ev.target;
    setCategoryFilter(value);
  };

  useEffect(() => {
    ReactGA.initialize('UA-162087851-1');
    ReactGA.pageview(document.location.pathname);

    dispatch(loadRegions(uf));
    dispatch(
      loadSectors({
        ordering: 'events_count',
        region__initial: currRegion.initial,
        limit: 100
      })
    );

    return function cleanup() {
      dispatch(resetState());
    };
  }, [uf]);

  useEffect(() => {
    if (!sectors.length) return;

    if (!lastCheck) {
      for (let sectorId of Object.keys(selectedSectors).filter(
        key => !!selectedSectors[key]
      )) {
        dispatch(loadEvents(sectorId, currRegion?.initial));
      }
    }

    if (selectedSectors[lastCheck])
      dispatch(loadEvents(lastCheck, currRegion?.initial));
  }, [selectedSectors]);

  const categories = categoryFilter
    ? sectors.filter(item => {
        return normalizeSearch(item.name).includes(
          normalizeSearch(categoryFilter)
        );
      })
    : sectors;

  const categoriesList = categories.filter(item => selectedSectors[item.id]);

  // doesnt reverse array if the
  // category wasnt checked from the ui
  const checkedFromUi = useMemo(() => {
    return !!lastCheck;
  }, [selectedSectors]);
  const filteredCategories = checkedFromUi
    ? categoriesList.reverse()
    : categoriesList;

  const handleSectorCheck = sectorId => ev => {
    dispatch(selectSector(sectorId));
  };

  return (
    <div className={'estado-page ' + className}>
      <Reset />
      <Head>
        <HeadTags region={currRegion} />
        <title>
          Corona Brasil - {currRegion?.name} - Saiba o que está funcionando em
          sua cidade e estado
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <RegionProvider region={currRegion}>
        <Header />
        <div className='alert'>
          Você tem alguma informação sobre sua cidade/estado?{' '}
          <a href={EVENTS_FORM} target='__blank'>
            Ajude no combate à pandemia clicando aqui
          </a>
          !
        </div>

        <RegionOverview />

        <article className='description'>
          <div className='title-container'>
            <Title.h1>
              Acontecimentos - {currRegion?.name}
              <Dot type='dark' />
            </Title.h1>
            <SocialSharing message={sharing.whatsapp(currRegion?.name)} />
          </div>

          <div className='contact'>
            {regionInfo?.phone && (
              <div className='phone'>
                <span className='label'>Ouvidoria: </span>
                <a href={`tel:+55${regionInfo?.phone}`}>{regionInfo?.phone}</a>
              </div>
            )}
            <div className='social'>
              {regionInfo?.twitter && (
                <a target='__blank' href={regionInfo?.twitter}>
                  <TwitterOutlined />
                </a>
              )}
              {regionInfo?.instagram && (
                <a target='__blank' href={regionInfo?.instagram}>
                  <InstagramOutlined />
                </a>
              )}
              {regionInfo?.official_site && (
                <a target='__blank' href={regionInfo?.official_site}>
                  <GlobalOutlined />
                </a>
              )}
            </div>
          </div>
          <Text>
            O funcionamento de transportes públicos, bares, restaurantes,
            mercados, farmácias, padarias e outros estabelecimentos está mudando
            a cada semana, em cada estado ou cidade.
            <br /> Confira o que está funcionando no Brasil, até quando e por
            quê.
          </Text>
        </article>

        <section className='events'>
          <div className='events__menu'>
            <List
              header={
                <>
                  <div className='header'>
                    <h2>Categorias</h2>{' '}
                  </div>
                  <div className='search'>
                    <Input
                      prefix={<SearchOutlined />}
                      placeholder='Buscar categoria'
                      onChange={handleCategorySearch}
                    />
                  </div>
                </>
              }
              bordered
              loading={
                loading?.[LOAD_SECTORS]?.phase === 'LOADING' || !sectors.length
              }
            >
              <div className='list-container'>
                {categories.map(item => (
                  <List.Item key={JSON.stringify(item)}>
                    <Checkbox
                      checked={!!selectedSectors?.[item.id]}
                      onChange={handleSectorCheck(item.id)}
                    />
                    <SectorIcon sector={item.id} />

                    <span className='name'>{item.name}</span>
                    <Badge count={item.events_count} />
                  </List.Item>
                ))}
              </div>
            </List>
          </div>
          <div className='events__group'>
            {!filteredCategories.length && (
              <Empty description='Selecione uma categoria.' />
            )}
            {filteredCategories.map(item => (
              <Event
                key={JSON.stringify(item)}
                sector={item.id}
                title={item.name}
              >
                {events?.[item.id] && !events?.[item.id].results.length && (
                  <Empty
                    image={
                      <img width={150} src='/static/icons/loudspeaker.svg' />
                    }
                    description={
                      <div>
                        <p>
                          Ooops, nenhuma informação sobre{' '}
                          <strong>{item.name}</strong> encontrada :/
                        </p>{' '}
                        <a target='__blank' href={EVENTS_FORM}>
                          Você tem alguma informação? Ajude no combate à
                          pandemia clicando aqui!
                        </a>
                      </div>
                    }
                  />
                )}

                {events?.[item.id] &&
                  events?.[item.id].results.map(item => (
                    <Event.Item
                      key={JSON.stringify(item)}
                      event={item}
                      city={item?.city?.name}
                      status={item.status_type}
                      title={item.name}
                      description={item?.text || item?.source?.text}
                    ></Event.Item>
                  ))}
              </Event>
            ))}
          </div>
        </section>
      </RegionProvider>
      <Footer />
    </div>
  );
});

const EstadoContainer = () => {
  const router = useRouter();
  const { uf } = router.query;

  return <Estado uf={uf} />;
};

export default EstadoContainer;
