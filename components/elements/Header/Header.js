import React from 'react';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { headerWithStyle } from './Header.styles';

const Header = ({ className }) => {
  return (
    <header className={'header ' + className}>
      <div className="header-container">
        <Logo />
        <section className='cta-section'>
          <Button type='primary' className='help-cta'>
            Ajude-nos
          </Button>
        </section>
      </div>
    </header>
  );
};

export default headerWithStyle(Header);
