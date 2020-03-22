import React from 'react';
import Router from 'next/router';
import { countryOverviewWithStyle } from './CountryOverview.styles';
import { Title, Text } from '../../elements/Typography';
import { Dot } from '../../elements/Typography/Typography';
import { StateSelect } from '../../elements/StateSelect';
import { MapSvg } from '../../../resources/map';
import List from 'antd/lib/list';
import { popularStates } from '../../../resources/states';
import Flag from '../../elements/Flag/Flag';
import { Indicator } from '../../elements/Indicator';
import { OverallIndicator } from '../../elements/Indicator/index';
import moment from 'moment';

const CountryOverview = ({ className, cases }) => {
  const handleStateSelect = value => {
    Router.push(`/estado/${value.toLowerCase()}`);
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
          value={cases?.confirmed?.value}
        />
        <Indicator type='info' label='Suspeitos' value={1530} />
        <Indicator
          type='warning'
          label='Infectados'
          value={cases?.recovered?.value}
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
      <figure className='map'>
        <MapSvg />
      </figure>
      <div className='state-selector'>
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

        <StateSelect onSelect={handleStateSelect} />

        <div className='popular-searches'>
          <p className='title'>Estados mais pesquisados:</p>
          <div className='list'>
            {popularStates.map((item, idx) => (
              <div key={item.initial + idx} className='item'>
                <Flag state={item.initial} /> <a>{item.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default countryOverviewWithStyle(CountryOverview);
