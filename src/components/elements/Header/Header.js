import React from 'react';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { GithubOutlined } from '@ant-design/icons';
import { headerWithStyle } from './Header.styles';
import { COLABORADORES_FORM, GITHUB_LINK } from '../../../resources/links';

const Header = ({ className }) => {
  return (
    <header className={'header ' + className}>
      <div className='header-container'>
        <Logo />
        <section className='cta-section'>
          <a className='social' target='__blank' href={GITHUB_LINK}>
            <GithubOutlined  />
          </a>
          <a target='__blank' href={COLABORADORES_FORM}>
            <Button type='primary' className='help-cta'>
              Ajude-nos
            </Button>
          </a>
        </section>
      </div>
    </header>
  );
};

export default headerWithStyle(Header);
