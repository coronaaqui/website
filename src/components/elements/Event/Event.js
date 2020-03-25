import React from 'react';
import { Text } from '../Typography';
import { eventWithStyle } from './Event.styles';
import { Timeline } from 'antd';
import {
  CloseOutlined,
  CheckOutlined,
  ExclamationOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';

const EventItem = ({ city, status = 'F', title, description }) => {
  const statusMessages = {
    F: {
      message: 'Acesso Bloqueado',
      icon: <CloseCircleOutlined />
    },
    P: {
      message: 'Acesso Limitado',
      icon: <ExclamationCircleOutlined />
    },
    O: {
      message: 'Acesso Liberado',
      icon: <CheckOutlined />
    }
  }[status];

  return (
    <Timeline.Item
      className={status}
      dot={statusMessages.icon}
      color={statusMessages.color}
    >
      <span className='city'>
        {city}
      </span>
      <p>
        <span className='label'>{title} - </span> {statusMessages.message}
      </p>
      <Text>{description}</Text>
      <a>Ver mais</a>
    </Timeline.Item>
  );
};

const Event = eventWithStyle(
  ({ region = 'BA', title, description, className, children }) => {
    return (
      <div className={'event ' + className}>
        <div className='event__description'>
          <figure>
            <picture>
              <img src='/static/airport.svg' />
            </picture>
            <figcaption>
              <h2>{title}</h2>
              {description && <Text>{description}</Text>}
            </figcaption>
          </figure>
        </div>

        <Timeline>{children}</Timeline>
      </div>
    );
  }
);

Event.Item = EventItem;

export default eventWithStyle(Event);
