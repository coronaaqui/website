import moment from 'moment';
import React from 'react';
import { MapSvg } from '../../../resources/map';
import { popularStates } from '../../../resources/states';
import Flag from '../../elements/Flag/Flag';
import { Indicator } from '../../elements/Indicator';
import { OverallIndicator } from '../../elements/Indicator/index';
import { StateSelect } from '../../elements/StateSelect';
import { Text, Title } from '../../elements/Typography';
import { Dot } from '../../elements/Typography/Typography';
import { countryOverviewWithStyle } from './CountryOverview.styles';

const CountryOverview = ({ className, cases }) => {
  return (
    <section className={'country-overview ' + className}>
      <div className='indicators'>
        <OverallIndicator
          metrics={[
            {
              label: 'Infectados',
              value: cases?.confirmed?.value,
              arrow: { direction: 'up', type: 'danger' }
            },
            {
              label: 'Curados',
              value: cases?.recovered?.value,
              arrow: {
                direction: 'down',
                type: 'warning'
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
          Última atualização ás{' '}
          {cases.lastUpdate
            ? moment(cases.lastUpdate).format('hh:mm - DD/MM/YYYY')
            : '-'}
        </Text>
      </div>
      <picture className='map'>
        <MapSvg />
      </picture>
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

        <StateSelect />

        <div className='popular-searches'>
          <p className='title'>Estados mais pesquisados:</p>
          <div className='list'>
            {popularStates.map(item => (
              <div className='item'>
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
