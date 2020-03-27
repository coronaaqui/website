import React from 'react';
import { indicatorWithStyle } from './Indicator.styles';
import { format } from './helpers/format';

const Indicator = ({ className, label, value }) => {
  return (
    <div className={'indicator ' + className}>
      <h3 className='label'>{label}</h3>
      <p className='value'>{format(value)}</p>
    </div>
  );
};

export default indicatorWithStyle(Indicator);
