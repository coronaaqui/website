import React from 'react';
import { logoWithStyle } from './Logo.styles';
import Link from 'next/link';

const Logo = ({ className }) => {
  return (
    <Link href='/'>
      <a alt='Corona Brasil'>
        <figure className={'logo ' + className} alt='CoronaBrasil.org'>
          Corona<strong>Brasil</strong>
        </figure>
      </a>
    </Link>
  );
};

export default logoWithStyle(Logo);
