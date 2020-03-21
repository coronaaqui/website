import React from 'react';
import { logoWithStyle } from './Logo.styles';

const Logo = ({ className }) => {
  return (
    <figure className={'logo ' + className} alt='CoronaBrasil.org'>
      Corona<strong>Brasil</strong>
    </figure>
  );
};

export default logoWithStyle(Logo);
