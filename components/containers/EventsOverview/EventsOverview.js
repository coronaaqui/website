import React from 'react';
import { eventsOverviewWithStyle } from './EventsOverview.styles';
import { Title, Text, Dot } from '../../elements/Typography';
import { Timeline } from 'antd';

const EventsOverview = ({ className }) => {
  return (
    <div className={'events-overview ' + className}>
      <Title.h1>
        Acontecimentos por região
        <Dot type='dark' size='34px' />{' '}
      </Title.h1>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
        justo ligula. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Nullam sagittis vulputate magna
        nec vulputate. Ut posuere, eros ut aliquam imperdiet, nibh lectus
        eleifend lectus, in tincidunt
      </Text>

      <section className='events-overview__container'>
        <div className='events-overview__item'>
          <div className='events-overview__item--description'>
            <figure>
              <img width='60px' src='/static/airport.svg' />
            </figure>
            <article>
              <h2>Aeroportos</h2>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eget justo ligula. Class aptent taciti s
              </Text>
            </article>
          </div>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </div>
        <div className='events-overview__item'>
          <div className='events-overview__item--description'>
            <figure>
              <img width='60px' src='/static/airport.svg' />
            </figure>
            <article>
              <h2>Aeroportos</h2>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eget justo ligula. Class aptent taciti s
              </Text>
            </article>
          </div>

          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </div>
      </section>
    </div>
  );
};

export default eventsOverviewWithStyle(EventsOverview);
