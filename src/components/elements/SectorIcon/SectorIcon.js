import React from 'react';

const defaultIcon = 'airport.svg';

const icons = {
  1: 'airport.svg',
  2: 'pharmacy.svg',
  3: 'hospital.svg',
  // 4: 'supermercado',
  //  5: 'rodoviaria',
  6: 'road.svg', // rodovia,
  9: 'school.svg',
  10: 'academy.svg',
  16: 'bancos.svg',
  23: 'bus.svg'
};

const SectorIcon = ({ sector }) => {
  const imgSrc = icons?.[sector] || defaultIcon;

  return <img src={`/static/icons/${imgSrc}`} />;
};

export default SectorIcon;
