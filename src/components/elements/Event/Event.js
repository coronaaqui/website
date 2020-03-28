import { CheckOutlined, ClockCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, LinkOutlined, NotificationOutlined } from '@ant-design/icons';
import { Popover, Timeline } from 'antd';
import moment from 'moment';
import React from 'react';
import { SectorIcon } from '../SectorIcon';
import { Text } from '../Typography';
import { eventWithStyle } from './Event.styles';

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
  event,
  hideAuthor = false
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
        {city}
        {event?.region?.initial && ` - ${event?.region?.initial}`}
        {author && !hideAuthor && author?.name && (
          <Popover
            content={
              <div style={{ textAlign: 'center' }}>
                Evento criado por {author?.name}. <br />
                <a>Clique aqui</a> para fazer parte de nossa equipe de
                colaboradores.
              </div>
            }
          >
            <span className='info'>
              <NotificationOutlined />
              <span>{author.name}</span>
            </span>
          </Popover>
        )}
      </div>
      <div className='meta'>
        <Popover content={<span style={{ textAlign: 'center' }}>{title}</span>}>
          <span className='label'>{title} - </span>
        </Popover>
        <span className='status'>{statusMessages.message} - </span>
        {(event.from_date !== null || event.to_date !== null) && (
          <Popover
            content={<span>Período de vigência do evento em questão.</span>}
          >
            <span className='info'>
              <ClockCircleOutlined />
              <span>
                {event.undefined_ends_date && 'A partir de '}
                {event.from_date && formatDate(event.from_date)}
                {event.to_date && ` - ${formatDate(event.to_date)}`}
              </span>
            </span>
          </Popover>
        )}

        {event?.source?.source && (
          <span className='info'>
            <LinkOutlined />
            <span>Fonte: {event.source.source}</span>
          </span>
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
