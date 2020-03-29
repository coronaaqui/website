import { Timeline } from 'antd';
import React from 'react';
import { Dot, Text, Title } from '../../elements/Typography';
import { eventsOverviewWithStyle } from './EventsOverview.styles';
import { Event } from '../../elements/Event';

const EventsOverview = ({ className, events, sectors }) => {
  return (
    <section className={'events-overview ' + className}>
      <div className='events-content'>
        <Title.h1>
          Acontecimentos por região
          <Dot type='dark' size='34px' />{' '}
        </Title.h1>

        <Text>
          O funcionamento de transportes públicos, bares, restaurantes, mercados, farmácias,
          padarias e outros estabelecimentos está mudando a cada semana, em cada estado ou cidade.
          Confira o que está funcionando no Brasil, até quando e por quê.
        </Text>

        <section className='events-overview__container'>
          {sectors.map((item) => (
            <Event scroll={false} sector={item.id} title={item.name}>
              {events?.[item.id] &&
                events?.[item.id].results
                  .filter((_, idx) => idx < 2)
                  .map((item) => (
                    <Event.Item
                      key={JSON.stringify(item)}
                      event={item}
                      city={item?.city?.name}
                      status={item.status_type}
                      title={item.name}
                      description={item?.text || item?.source?.text}
                      hideAuthor
                    ></Event.Item>
                  ))}
            </Event>
          ))}
        </section>
      </div>
    </section>
  );
};

export default eventsOverviewWithStyle(EventsOverview);
