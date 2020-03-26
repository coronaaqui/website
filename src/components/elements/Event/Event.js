import React from 'react';
import { Text } from '../Typography';
import { eventWithStyle } from './Event.styles';
import { Timeline, Popover } from 'antd';
import {
  CheckOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  LinkOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import { SectorIcon } from '../SectorIcon';
import moment from 'moment';

function formatDate(date) {
  return moment(date).format('DD.MM.YY');
}

const messages = status =>
  ({
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
  }[status]);

const EventItem = ({
  city = 'Em todo o estado',
  status = 'F',
  title,
  description,
  event
}) => {
  const { author } = event;
  const statusMessages = messages(status);

  return (
    <Timeline.Item
      className={status}
      dot={statusMessages.icon}
      color={statusMessages.color}
    >
      <div className='city'>
        {city}{' '}
        {author && (
          <Popover
            content={
              <div style={{ textAlign: 'center' }}>
                Evento criado por {author?.name}. <br />
                <a>Clique aqui</a> para fazer parte de nossa equipe de
                colaboradores.
              </div>
            }
          >
            <div className='info'>
              <NotificationOutlined />
              <p>{author.name}</p>
            </div>
          </Popover>
        )}
      </div>
      <div className='meta'>
        <Popover content={<div style={{ textAlign: 'center' }}>{title}</div>}>
          <div className='label'>{title} - </div>
        </Popover>
        <div className='status'>{statusMessages.message} - </div>
        {(event.from_date !== null || event.to_date !== null) && (
          <Popover
            content={<div>Período de vigência do evento em questão.</div>}
          >
            <div className='info'>
              <ClockCircleOutlined />
              <p>
                {event.undefined_ends_date && 'A partir de '}
                {event.from_date && formatDate(event.from_date)}
                {event.to_date && ` - ${formatDate(event.to_date)}`}
              </p>
            </div>
          </Popover>
        )}

        {event?.source?.source && (
          <div className='info'>
            <LinkOutlined />
            <p>Fonte: {event.source.source}</p>
          </div>
        )}
      </div>
      <Text>{description}</Text>
      {event.source?.link && (
        <a href={event.source.link} target='__blank' alt={event.source.source}>
          Ver mais
        </a>
      )}
    </Timeline.Item>
  );
};

const Event = eventWithStyle(
  ({ region = 'BA', sector, title, description, className, children }) => {
    return (
      <div className={'event ' + className}>
        <div className='event__description'>
          <figure>
            <picture>
              <SectorIcon sector={sector} />
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
