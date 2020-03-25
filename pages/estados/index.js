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
import { Input, List, Checkbox, Badge, Spin } from 'antd';
import { Footer } from '../../src/components/elements/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadSectors,
  getSectors,
  LOAD_SECTORS,
  selectSector
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

  const handleSectorCheck = sectorId => () => {
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
                    <Checkbox checked={item.checked} onChange={handleSectorCheck(item.id)} />
                    <img src='/static/airport.svg' />
                    <span className='name'>{item.name}</span>
                    <Badge count={item.total_estimated_impact} />
                  </List.Item>
                ))}
              </div>
            </List>
          </div>
          <div className='events__group'>
            <Event title='Aeroporto'>
              <Event.Item
                city='Guarulhos'
                region={'SP'}
                status={'F'}
                title={'Aeroporto Internacional de Guarulhos'}
                description={
                  'Quisque ultrices ultricies ex, in fermentum est bibendum eget. Nulla facilisi. Pellentesque suscipit placerat massa vitae elementum. Praesent ut lobortis odio, eu commodo dui. Aliquam a sodales nisl. Proin tempus, diam vestibulum ullamcorper suscipit, orci velit consequat magn.'
                }
              ></Event.Item>
              <Event.Item
                city='São Paulo'
                region={'SP'}
                status={'P'}
                title={'Aeroporto Internacional de Congonhas'}
                description={
                  'Quisque ultrices ultricies ex, in fermentum est bibendum eget. Nulla facilisi. Pellentesque suscipit placerat massa vitae elementum. Praesent ut lobortis odio, eu commodo dui. Aliquam a sodales nisl. Proin tempus, diam vestibulum ullamcorper suscipit, orci velit consequat magn.'
                }
              ></Event.Item>
            </Event>

            <Event title='Hospitais'>
              <Event.Item
                city='Guarulhos'
                region={'SP'}
                status={'F'}
                title={'Aeroporto Internacional de Guarulhos'}
                description={
                  'Quisque ultrices ultricies ex, in fermentum est bibendum eget. Nulla facilisi. Pellentesque suscipit placerat massa vitae elementum. Praesent ut lobortis odio, eu commodo dui. Aliquam a sodales nisl. Proin tempus, diam vestibulum ullamcorper suscipit, orci velit consequat magn.'
                }
              ></Event.Item>
              <Event.Item
                city='São Paulo'
                region={'SP'}
                status={'P'}
                title={'Aeroporto Internacional de Congonhas'}
                description={
                  'Quisque ultrices ultricies ex, in fermentum est bibendum eget. Nulla facilisi. Pellentesque suscipit placerat massa vitae elementum. Praesent ut lobortis odio, eu commodo dui. Aliquam a sodales nisl. Proin tempus, diam vestibulum ullamcorper suscipit, orci velit consequat magn.'
                }
              ></Event.Item>
            </Event>
            <Event title='Aeroporto'>
              <Event.Item
                city='Guarulhos'
                region={'SP'}
                status={'F'}
                title={'Aeroporto Internacional de Guarulhos'}
                description={
                  'Quisque ultrices ultricies ex, in fermentum est bibendum eget. Nulla facilisi. Pellentesque suscipit placerat massa vitae elementum. Praesent ut lobortis odio, eu commodo dui. Aliquam a sodales nisl. Proin tempus, diam vestibulum ullamcorper suscipit, orci velit consequat magn.'
                }
              ></Event.Item>
              <Event.Item
                city='São Paulo'
                region={'SP'}
                status={'P'}
                title={'Aeroporto Internacional de Congonhas'}
                description={
                  'Quisque ultrices ultricies ex, in fermentum est bibendum eget. Nulla facilisi. Pellentesque suscipit placerat massa vitae elementum. Praesent ut lobortis odio, eu commodo dui. Aliquam a sodales nisl. Proin tempus, diam vestibulum ullamcorper suscipit, orci velit consequat magn.'
                }
              ></Event.Item>
            </Event>
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
