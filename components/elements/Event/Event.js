import React from 'react';
import { Text } from '../Typography';
import { eventWithStyle } from './Event.styles';
import { Timeline } from 'antd';

const Event = ({ region = 'BA', className }) => {
  return (
    <div className={'event ' + className}>
      <div className='event__description'>
        <figure>
          <picture>
            <img src='/static/airport.svg' />
          </picture>
          <figcaption>
            <h2>Aeroportos</h2>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eget justo ligula. Class aptent taciti s
            </Text>
          </figcaption>
        </figure>
      </div>

      <Timeline>
        <Timeline.Item>
          <p>
            <span className='label'>5 estados -</span> Acesso limitado
          </p>
          <Text type='info'>Última atualização às 22:00 - 20/03/2020</Text>
        </Timeline.Item>
        <Timeline.Item>
          <p>
            <span className='label'>2 estados -</span> Acesso interditado
          </p>
          <Text type='info'>Última atualização às 22:00 - 20/03/2020</Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default eventWithStyle(Event);
