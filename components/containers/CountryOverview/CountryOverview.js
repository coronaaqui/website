import React from 'react';
import { countryOverviewWithStyle } from './CountryOverview.styles';
import { Title, Text } from '../../elements/Typography';
import { Dot } from '../../elements/Typography/Typography';
import { CountrySelect } from '../../elements/CountrySelect';

const CountryOverview = ({ className }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <section className={'country-overview ' + className}>
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

        <CountrySelect />
      </div>
    </section>
  );
};

export default countryOverviewWithStyle(CountryOverview);
