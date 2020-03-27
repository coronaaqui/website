import moment from 'moment';
import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { MapSvg } from '../../../resources/map';
import { popularRegions } from '../../../resources/regions';
import Flag from '../../elements/Flag/Flag';
import { Indicator } from '../../elements/Indicator';
import { OverallIndicator } from '../../elements/Indicator/index';
import { RegionSelect } from '../../elements/RegionSelect';
import { Text, Title } from '../../elements/Typography';
import { Dot } from '../../elements/Typography/Typography';
import { countryOverviewWithStyle } from './CountryOverview.styles';

const CountryOverview = ({ className, cases }) => {
  const navigate = val => {
    return Router.push(
      `/estados?uf=${val.toLowerCase()}`,
      `/estados/${val.toLowerCase()}`,
      {
        shallow: true
      }
    );
  };

  const handleRegionSelect = (_, val) => {
    const { initial } = JSON.parse(val.key);
    navigate(initial.toLowerCase());
  };

  const handleRegionLink = val => ev => {
    ev.preventDefault()
    navigate(val);
  };

  return (
    <section className={'country-overview ' + className}>
      <div className='indicators'>
        <OverallIndicator
          metrics={[
            {
              label: 'Infectados',
              value: cases?.confirmed?.value,
              arrow: {
                direction:
                  cases?.confirmed?.value > cases?.confirmed?.previousValue
                    ? 'up'
                    : 'down'
              }
            },
            {
              label: 'Curados',
              value: cases?.recovered?.value,
              arrow: {
                direction:
                  cases?.recovered?.value > cases?.recovered?.previousValue
                    ? 'up'
                    : 'down'
              }
            }
          ]}
        ></OverallIndicator>
        <Indicator
          type='success'
          label='Curados'
          value={cases?.recovered?.value}
        />
        <Indicator type='info' label='Suspeitos' value={1530} />
        <Indicator
          type='warning'
          label='Infectados'
          value={cases?.confirmed?.value}
        />
        <Indicator
          type='danger'
          label='Fatalidades'
          value={cases?.deaths?.value}
        />
        <Text type='info' align='center'>
          Última atualização às{' '}
          {cases.lastUpdate
            ? moment(cases.lastUpdate).format('HH:mm - DD/MM/YYYY')
            : '-'}
        </Text>
      </div>
      <picture className='map'>
        <MapSvg />
      </picture>
      <div className='region-selector'>
        <article>
          <Title.h2>
            Pesquise por estado
            <Dot />
          </Title.h2>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            lacinia turpis eget volutpat.
          </Text>
        </article>

        <RegionSelect onSelect={handleRegionSelect} />

        <div className='popular-searches'>
          <p className='title'>Estados mais pesquisados:</p>
          <div className='list'>
            {popularRegions.map((item, idx) => (
              <div key={item.initial + idx} className='item'>
                <Flag region={item.initial} />{' '}
                <Link
                  href={`/estados/${item.initial.toLowerCase()}`}
                  as={`/estados/${item.initial.toLowerCase()}`}
                >
                  <a onClick={handleRegionLink(item.initial)} alt={item.name}>
                    {item.name}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default countryOverviewWithStyle(CountryOverview);
