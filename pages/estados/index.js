import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Reset } from '../../components/elements/Reset';
import { Header } from '../../components/elements/Header';
import { Indicator } from '../../components/elements/Indicator';
import { RegionSelect } from '../../components/elements/RegionSelect';
import { RegionOverview } from '../../components/containers/RegionOverview';
import { regions } from '../../resources/regions';
import { RegionProvider } from '../../hooks/regions';
import { Event } from '../../components/elements/Event';
import { Container } from '../../components/elements/Container';
import { Title, Text, Dot } from '../../components/elements/Typography';
import { regionWithStyle } from '../../components/containers/RegionPage/RegionPage.styles';
import {
  GlobalOutlined,
  TwitterOutlined,
  InstagramOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Input, List, Checkbox, Badge } from 'antd';

const { Search } = Input;

const sectors = [
  {
    id: 23,
    total_estimated_impact: 2,
    name: 'Transportes'
  },
  {
    id: 5,
    total_estimated_impact: 1,
    name: 'Rodoviárias'
  },
  {
    id: 15,
    total_estimated_impact: 1,
    name: 'Shoppings'
  },
  {
    id: 22,
    total_estimated_impact: 0,
    name: 'Aplicativos de transporte'
  },
  {
    id: 16,
    total_estimated_impact: 0,
    name: 'Bancos'
  },
  {
    id: 7,
    total_estimated_impact: 0,
    name: 'Bares'
  },
  {
    id: 1,
    total_estimated_impact: 0,
    name: 'Construção Civil'
  },
  {
    id: 11,
    total_estimated_impact: 0,
    name: 'Creches'
  },
  {
    id: 9,
    total_estimated_impact: 0,
    name: 'Escolas'
  },
  {
    id: 2,
    total_estimated_impact: 0,
    name: 'Farmácias'
  },
  {
    id: 3,
    total_estimated_impact: 0,
    name: 'Hospitais'
  },
  {
    id: 14,
    total_estimated_impact: 0,
    name: 'Indústrias'
  },
  {
    id: 21,
    total_estimated_impact: 0,
    name: 'Oficina de automóveis'
  },
  {
    id: 12,
    total_estimated_impact: 0,
    name: 'Parques'
  },
  {
    id: 18,
    total_estimated_impact: 0,
    name: 'Pet Shops'
  },
  {
    id: 17,
    total_estimated_impact: 0,
    name: 'Postos de Gasolina'
  },
  {
    id: 13,
    total_estimated_impact: 0,
    name: 'Praias'
  },
  {
    id: 8,
    total_estimated_impact: 0,
    name: 'Restaurantes & Lanchonetes'
  },
  {
    id: 6,
    total_estimated_impact: 0,
    name: 'Rodovias'
  },
  {
    id: 4,
    total_estimated_impact: 0,
    name: 'Supermercados'
  },
  {
    id: 19,
    total_estimated_impact: 0,
    name: 'Transportadoras'
  },
  {
    id: 10,
    total_estimated_impact: 0,
    name: 'Universidades'
  }
];
function normalizeSearch(str) {
  return str.toLowerCase().trim();
}

export const Estado = regionWithStyle(({ uf, className }) => {
  const [categoryFilter, setCategoryFilter] = useState(false);
  const currRegion =
    uf && regions.filter(item => item.initial === uf.toUpperCase())[0];

  const handleCategorySearch = ev => {
    const { value } = ev.target;

    setCategoryFilter(value);
  };

  const categories = categoryFilter
    ? sectors.filter(item => {
        return normalizeSearch(item.name).includes(
          normalizeSearch(categoryFilter)
        );
      })
    : sectors;

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
              dataSource={categories}
              renderItem={item => (
                <List.Item>
                  <Checkbox />
                  <img src='/static/airport.svg' />
                  <span className='name'>{item.name}</span>
                  <Badge count={25} />
                </List.Item>
              )}
            />
          </div>
          <div className='events__group'>
            <Event />
          </div>
        </section>
      </RegionProvider>
    </div>
  );
});

const EstadoContainer = () => {
  const router = useRouter();
  const { uf } = router.query;

  return <Estado uf={uf} />;
};

export default EstadoContainer;
