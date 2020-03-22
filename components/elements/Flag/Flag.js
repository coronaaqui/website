import React from 'react';
import { flagWithStyle } from './Flag.styles';

const Flag = ({ state = 'BA', className }) => {
  return (
    <figure className={'flag ' + className} alt={state}>
      <img width='23px' src={`/static/flags/${state}.svg`} />
    </figure>
  );
};

export default flagWithStyle(Flag);
