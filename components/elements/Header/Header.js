import React from 'react';
import { Logo } from '../Logo';
import { headerWithStyle } from './Header.styles';
import { Button } from '../Button';

const Header = ({ className }) => {
  return (
    <header className={'header ' + className}>
      <Logo />

      <section className='cta-section'>
        <Button type='primary' className='help-cta'>
          Ajude-nos
        </Button>
      </section>
    </header>
  );
};

export default headerWithStyle(Header);
