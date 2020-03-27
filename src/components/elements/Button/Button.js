import React from 'react';
import { buttonWithStyle } from './Button.styles';

const Button = ({ className, children }) => {
  return (
    <button className={'button ' + className} type='button'>
      {children}
    </button>
  );
};

export default buttonWithStyle(Button);
