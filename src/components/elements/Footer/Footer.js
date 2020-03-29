import React from 'react';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { Text, Title } from '../Typography';
import { footerWithStyle } from './Footer.styles';
import { COLABORADORES_FORM } from '../../../resources/links';

const Footer = ({ className }) => {
  return (
    <footer className={'header ' + className}>
      <div className='footer-container'>
        <div className='info-content'>
          <div className='col'>
            <Logo className='inverted' />
            <Text>
              O Corona Brasil é um projeto voluntário, de código aberto. Nosso objetivo é ajudar no
              combate à pandemia do novo coronavírus reunindo as informações essenciais que os
              cidadãos precisam para trabalhar, prestar e solicitar serviços, fazer compras e
              realizar atividades cotidianas.
            </Text>
          </div>
          <div className='col'>
            {/* <Title.h2>Lorem ipsum dolor sit amet,</Title.h2>
            <Text>
              Consectetur adipiscing elit. Maecenas eget justo ligula. Class
              aptent taciti sociosqu
            </Text> */}
          </div>
          <div className='col'>
            {/* <Title.h2>Lorem ipsum dolor sit amet,</Title.h2>
            <Text>
              Consectetur adipiscing elit. Maecenas eget justo ligula. Class
              aptent taciti sociosqu
            </Text> */}
          </div>
          <div className='col'>
            <Title.h2>Faça esse projeto crescer</Title.h2>
            <a target='__blank' href={COLABORADORES_FORM}>
              <Button type='primary' className='help-cta outline inverted'>
                Ajude-nos
              </Button>
            </a>
          </div>
        </div>
        <div className='copyright'>
          <Text>© Corona Brasil 2020</Text>
        </div>
      </div>
    </footer>
  );
};
export default footerWithStyle(Footer);
