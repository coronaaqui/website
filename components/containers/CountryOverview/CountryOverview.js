import React from 'react';
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

const CountryOverview = ({ className }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <section className={'country-overview ' + className}>
      <div className='indicators'>
        <OverallIndicator
          metrics={[
            {
              label: 'Infectados',
              value: 100,
              arrow: { direction: 'up', type: 'danger' }
            },
            {
              label: 'Curados',
              value: 50,
              arrow: {
                direction: 'down',
                type: 'warning'
              }
            }
          ]}
        ></OverallIndicator>
        <Indicator type='success' label='Curados' value={50} />
        <Indicator type='info' label='Suspeitos' value={1530} />
        <Indicator type='warning' label='Infectados' value={532} />
        <Indicator type='danger' label='Fatalidades' value={3} />
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
