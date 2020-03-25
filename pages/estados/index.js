import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Reset } from '../../src/components/elements/Reset';
import { Header } from '../../src/components/elements/Header';
import { Indicator } from '../../src/components/elements/Indicator';
import { RegionSelect } from '../../src/components/elements/RegionSelect';
import { RegionOverview } from '../../src/components/containers/RegionOverview';
import { regions } from '../../src/resources/regions';
import { RegionProvider } from '../../src/hooks/regions';
import { Event } from '../../src/components/elements/Event';
import { Container } from '../../src/components/elements/Container';
import { Title, Text, Dot } from '../../src/components/elements/Typography';
import { regionWithStyle } from '../../src/components/containers/RegionPage/RegionPage.styles';
import {
  GlobalOutlined,
  TwitterOutlined,
  InstagramOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Input, List, Checkbox, Badge, Empty, Spin } from 'antd';
import { Footer } from '../../src/components/elements/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadSectors,
  getSectors,
  LOAD_SECTORS,
  selectSector,
  loadEvents
} from '../../src/redux/services/events';
import { createLoadingSelector } from '../../src/helpers/redux/requests';

function normalizeSearch(str) {
  return str.toLowerCase().trim();
}

export const Estado = regionWithStyle(({ uf, className }) => {
  const dispatch = useDispatch();
  const sectors = useSelector(getSectors);
  const loading = useSelector(createLoadingSelector([LOAD_SECTORS]));
  useEffect(() => {
    dispatch(loadSectors());
  }, [uf]);

  const [categoryFilter, setCategoryFilter] = useState(false);
  const currRegion =
    uf && regions.filter(item => item.initial === uf.toUpperCase())[0];

  const handleCategorySearch = ev => {
    const { value } = ev.target;

    setCategoryFilter(value);
  };

  console.log('##sectors', loading, sectors);

  const categories = categoryFilter
    ? sectors.filter(item => {
        return normalizeSearch(item.name).includes(
          normalizeSearch(categoryFilter)
        );
      })
    : sectors;

  const filteredCategories = categories.filter(item => item.checked);

  const handleSectorCheck = sectorId => ev => {
    dispatch(selectSector(sectorId));
    if (ev.target.checked) dispatch(loadEvents(sectorId, currRegion?.initial));
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
              <p className='label'>Ouvidoria: </p>
              (011 1231231)
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
                    <Checkbox indeterminate={true}>Todas</Checkbox>
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
                <List.Item>
                  <Checkbox />
                  <img src='/static/airport.svg' />
                  <span className='name'>Mais Populares</span>
                </List.Item>
                {categories.map(item => (
                  <List.Item>
                    <Checkbox
                      checked={item.checked}
                      onChange={handleSectorCheck(item.id)}
                    />
                    <img src='/static/airport.svg' />
                    <span className='name'>{item.name}</span>
                    <Badge count={item.total_estimated_impact} />
                  </List.Item>
                ))}
              </div>
            </List>
          </div>
          <div className='events__group'>
            {!filteredCategories.length && (
              <Empty description='Selecione uma categoria.' />
            )}
            {filteredCategories
              .filter(item => item.checked)
              .map(item => (
                <Event title={item.name}>
                  {item.data && !item.data.results.length && (
                    <Empty
                      image={<img width={150} src='/static/loudspeaker.svg' />}
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
                  {item.data &&
                    item.data?.results.map(item => (
                      <Event.Item
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
