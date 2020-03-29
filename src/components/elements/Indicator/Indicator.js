import React from 'react';
import { indicatorWithStyle } from './Indicator.styles';
import { format } from './helpers/format';

const Indicator = ({ className, icon, label, value }) => {
  return (
    <div className={'indicator ' + className}>
      {icon && <figure className='icon'>{icon}</figure>}

      <article className='content'>
        <h3 className='label'>{label}</h3>
        <p className='value'>{format(value)}</p>
      </article>
    </div>
  );
};

export default indicatorWithStyle(Indicator);
