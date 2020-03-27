import { GlobalOutlined, InstagramOutlined, SearchOutlined, TwitterOutlined } from '@ant-design/icons';
import { Badge, Checkbox, Empty, Input, List } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegionOverview } from '../../src/components/containers/RegionOverview';
import { regionWithStyle } from '../../src/components/containers/RegionPage/RegionPage.styles';
import { Event } from '../../src/components/elements/Event';
import { Footer } from '../../src/components/elements/Footer';
import { Header } from '../../src/components/elements/Header';
import { Reset } from '../../src/components/elements/Reset';
import { SectorIcon } from '../../src/components/elements/SectorIcon';
import { Dot, Text, Title } from '../../src/components/elements/Typography';
import { createLoadingSelector } from '../../src/helpers/redux/requests';
import { RegionProvider } from '../../src/hooks/regions';
import { getEvents, getLastCheck, getSectors, getSelectedSectors, loadEvents, loadSectors, LOAD_SECTORS, selectSector } from '../../src/redux/services/events';
import { regions } from '../../src/resources/regions';

function normalizeSearch(str) {
  return str.toLowerCase().trim();
}

export const Estado = regionWithStyle(({ uf, className }) => {
  const dispatch = useDispatch();
  const sectors = useSelector(getSectors);
  const events = useSelector(getEvents);
  const lastCheck = useSelector(getLastCheck);
  const loading = useSelector(createLoadingSelector([LOAD_SECTORS]));
  const selectedSectors = useSelector(getSelectedSectors);

  const [categoryFilter, setCategoryFilter] = useState(false);
  const currRegion =
    uf && regions.filter(item => item.initial === uf.toUpperCase())[0];

  const handleCategorySearch = ev => {
    const { value } = ev.target;
    setCategoryFilter(value);
  };

  useEffect(() => {
    dispatch(
      loadSectors({
        ordering: 'events_count',
        region__initial: currRegion.initial,
        limit: 100
      })
    );
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
        <title>Corona Brasil - {currRegion?.name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <RegionProvider region={currRegion}>
        <Header />

        <RegionOverview />

        <article className='description'>
          <Title.h1>
            Acontecimentos - {currRegion?.name}
            <Dot type='dark' />
          </Title.h1>
          <div className='contact'>
            <div className='phone'>
              <span className='label'>Ouvidoria: </span>
              <a href="tel:+550111231231">(011) 1231-1231</a>
            </div>

            <div className='social'>
              <a>
                <TwitterOutlined />
              </a>
              <a>
                <InstagramOutlined />
              </a>
              <a>
                <GlobalOutlined />
              </a>
            </div>
          </div>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget justo ligula. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Nullam sagittis
            vulputate magna nec vulputate. Ut posuere, eros ut aliquam
            imperdiet, nibh lectus eleifend lectus, in tincidunt
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
                  <List.Item>
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
              <Event sector={item.id} title={item.name}>
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
                        <a>Clique aqui para reportar qualquer informação.</a>
                      </div>
                    }
                  />
                )}

                {events?.[item.id] &&
                  events?.[item.id].results.map(item => (
                    <Event.Item
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
