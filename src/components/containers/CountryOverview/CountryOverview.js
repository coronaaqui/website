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
import { SectorIcon } from '../../elements/SectorIcon';

const CountryOverview = ({ className, sectors, cases }) => {
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
    ev.preventDefault();
    navigate(val);
  };

  return (
    <section className={'country-overview ' + className}>
      <div className='indicators'>
        {/*  <OverallIndicator
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
        ></OverallIndicator> */}
        <article className='impact-description'>
          <Title.h2>Impacto Estimado</Title.h2>
          <Text>
            Ex do et fugiat ullamco enim laboris qui veniam sunt proident
            adipisicing minim aliquip.
          </Text>
        </article>
        {sectors.map(item => (
          <Indicator
            icon={<SectorIcon sector={item.id} />}
            label={`${item.name}`}
            value={item?.total_estimated_impact}
          />
        ))}
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
            Escolha seu estado e veja quais serviços e estabelecimentos estão
            funcionando na sua região.
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
