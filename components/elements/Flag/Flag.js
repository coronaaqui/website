import React from 'react';
import { flagWithStyle } from './Flag.styles';

const Flag = ({ region = 'BA', className }) => {
  return (
    <figure className={'flag ' + className} alt={region}>
      <img width='23px' src={`/static/flags/${region}.svg`} />
    </figure>
  );
};

export default flagWithStyle(Flag);
