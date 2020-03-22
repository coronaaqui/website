import React from 'react';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { Text, Title } from '../Typography';
import { footerWithStyle } from './Footer.styles';

 const Footer = ({ className }) => {
  return (
    <footer className={'header ' + className}>
      <div className="footer-container">
        <div className="info-content">
          <div className="col">
            <Logo className="inverted" />
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget justo ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sagittis vulputate…</Text>
          </div>
          <div className="col">
            <Title.h2>Lorem ipsum dolor sit amet,</Title.h2>
            <Text>Consectetur adipiscing elit. Maecenas eget justo ligula. Class aptent taciti sociosqu</Text>
          </div>
          <div className="col">
            <Title.h2>Lorem ipsum dolor sit amet,</Title.h2>
            <Text>Consectetur adipiscing elit. Maecenas eget justo ligula. Class aptent taciti sociosqu</Text>
          </div>
          <div className="col">
            <Title.h2>Faça esse projeto crescer</Title.h2>
            <Button type='primary' className='help-cta outline inverted'>
              Ajude-nos
            </Button>
          </div>
        </div>
        <div className="copyright">
          <Text>© Corona Brasil 2020</Text>
        </div>
      </div>
    </footer>
  );
};
export default footerWithStyle(Footer);
