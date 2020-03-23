import moment from 'moment';
import React, { useState, useEffect } from 'react';
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

  console.log('##cases', cases);

  return (
    <section className={'region-overview ' + className}>
      <div className='container'>
        <Indicator type='warning' label='Infectados' value={cases?.cases} />
        <Indicator type='info' label='Suspeitos' value={cases?.suspects} />
        <Indicator type='danger' label='Fatalidades' value={cases?.deaths} />

        <RegionSelect
          onSelect={handleRegionSelect}
          defaultValue={currRegion?.name}
        />
      </div>
    </section>
  );
};

export default regionOverviewWithStyle(RegionOverview);
