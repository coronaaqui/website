import moment from 'moment';
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { Indicator } from '../../elements/Indicator';
import { RegionSelect } from '../../elements/RegionSelect';
import { regionOverviewWithStyle } from './RegionOverview.styles';
import { useRegion } from '../../../hooks/regions';
import { toRegion } from '../../../helpers/router';

const RegionOverview = ({ className }) => {
  const currRegion = useRegion();

  const [cases, setCases] = useState({});

  async function fetchCases(uf) {
    if (!uf) return;

    try {
      const res = await fetch(`/api/cases?uf=${uf}`);
      const payload = await res.json();

      setCases(payload);
    } catch (err) {
      //TODO:handle error
    }
  }

  const handleRegionSelect = (_, val) => {
    const { initial } = JSON.parse(val.key);
    toRegion(Router, initial.toLowerCase());
  };

  useEffect(() => {
    fetchCases(currRegion?.initial);
  }, [currRegion]);

  return (
    <section className={'region-overview ' + className}>
      <div className='container'>
        <div className='group'>
          <Indicator type='warning' label='Infectados' value={cases?.cases} />
          <Indicator type='info' label='Suspeitos' value={cases?.suspects} />
          <Indicator type='danger' label='Fatalidades' value={cases?.deaths} />

          <RegionSelect
            onSelect={handleRegionSelect}
            defaultValue={currRegion}
          />
        </div>
      </div>
    </section>
  );
};

export default regionOverviewWithStyle(RegionOverview);
