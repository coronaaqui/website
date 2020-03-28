import React from 'react';

const defaultIcon = 'question.svg';

const icons = {
  1: 'blocks.svg',
  2: 'pharmacy.svg',
  3: 'hospital.svg',
  4: 'grocery-cart.svg',
  5: 'rodoviaria.svg',
  6: 'road.svg',
  7: 'beer.svg',
  8: 'spaghetti.svg',
  9: 'school.svg',
  10: 'academy.svg',
  11: 'creche.svg',
  12: 'park.svg',
  13: 'beach.svg',
  14: 'factory.svg',
  15: 'groceries.svg',
  16: 'bank.svg',
  17: 'gas-pump.svg',
  18: 'pet-shop.svg',
  19: 'forklift.svg',
  21: 'car-repair.svg',
  22: 'transportation.svg',
  23: 'bus.svg',
  24: 'theater.svg',
  25: 'wallet.svg',
  26: 'exercise.svg', //
  27: 'government.svg',
  28: 'law.svg', //
  29: 'airport.svg',
  30: 'coffin.svg',
  31: 'pray.svg',
  32: 'boat.svg',
  33: 'football.svg',
  35: 'water.svg',
  34: 'electricity.svg',
  36: 'police.svg'
};

const SectorIcon = ({ sector }) => {
  const imgSrc = icons?.[sector] || defaultIcon;

  return <img src={`/static/icons/${imgSrc}`} />;
};

export default SectorIcon;
