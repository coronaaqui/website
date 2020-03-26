import { Timeline } from 'antd';
import React from 'react';
import { Dot, Text, Title } from '../../elements/Typography';
import { eventsOverviewWithStyle } from './EventsOverview.styles';

const EventsOverview = ({ className }) => {
  return (
    <section className={'events-overview ' + className}>
      <div className='events-content'>
        <Title.h1>
          Acontecimentos por região
          <Dot type='dark' size='34px' />{' '}
        </Title.h1>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
          justo ligula. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nullam sagittis vulputate
          magna nec vulputate. Ut posuere, eros ut aliquam imperdiet, nibh
          lectus eleifend lectus, in tincidunt
        </Text>

        <section className='events-overview__container'>
          <div className='events-overview__item'>
            <div className='events-overview__item--description'>
              <figure>
                <picture>
                  <img src='/static/icons/airport.svg' />
                </picture>
                <figcaption>
                  <h2>Aeroportos</h2>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas eget justo ligula. Class aptent taciti s
                  </Text>
                </figcaption>
              </figure>
            </div>

            <Timeline>
              <Timeline.Item>
                <p>
                  <span className='label'>5 estados -</span> Acesso limitado
                </p>
                <Text type='info'>
                  Última atualização às 22:00 - 20/03/2020
                </Text>
              </Timeline.Item>
              <Timeline.Item>
                <p>
                  <span className='label'>2 estados -</span> Acesso interditado
                </p>
                <Text type='info'>
                  Última atualização às 22:00 - 20/03/2020
                </Text>
              </Timeline.Item>
            </Timeline>
          </div>
          <div className='events-overview__item'>
            <div className='events-overview__item--description'>
              <figure>
                <picture>
                  <img src='/static/icons/airport.svg' />
                </picture>
                <figcaption>
                  <h2>Aeroportos</h2>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas eget justo ligula. Class aptent taciti s
                  </Text>
                </figcaption>
              </figure>
            </div>

            <Timeline>
              <Timeline.Item>
                <p>
                  <span className='label'>5 estados -</span> Acesso limitado
                </p>
                <Text type='info'>
                  Última atualização às 22:00 - 20/03/2020
                </Text>
              </Timeline.Item>
              <Timeline.Item>
                <p>
                  <span className='label'>2 estados -</span> Acesso interditado
                </p>
                <Text type='info'>
                  Última atualização às 22:00 - 20/03/2020
                </Text>
              </Timeline.Item>
            </Timeline>
          </div>
          <div className='events-overview__item'>
            <div className='events-overview__item--description'>
              <figure>
                <picture>
                  <img src='/static/icons/airport.svg' />
                </picture>
                <figcaption>
                  <h2>Aeroportos</h2>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas eget justo ligula. Class aptent taciti s
                  </Text>
                </figcaption>
              </figure>
            </div>

            <Timeline>
              <Timeline.Item>
                <p>
                  <span className='label'>5 estados -</span> Acesso limitado
                </p>
                <Text type='info'>
                  Última atualização às 22:00 - 20/03/2020
                </Text>
              </Timeline.Item>
              <Timeline.Item>
                <p>
                  <span className='label'>2 estados -</span> Acesso interditado
                </p>
                <Text type='info'>
                  Última atualização às 22:00 - 20/03/2020
                </Text>
              </Timeline.Item>
            </Timeline>
          </div>
          <div className='events-overview__item'>
            <div className='events-overview__item--description'>
              <figure>
                <picture>
                  <img src='/static/icons/airport.svg' />
                </picture>
                <figcaption>
                  <h2>Aeroportos</h2>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas eget justo ligula. Class aptent taciti s
                  </Text>
                </figcaption>
              </figure>
            </div>

            <Timeline>
              <Timeline.Item>
                <p>
                  <span className='label'>5 estados -</span> Acesso limitado
                </p>
                <Text type='info'>
                  Última atualização às 22:00 - 20/03/2020
                </Text>
              </Timeline.Item>
              <Timeline.Item>
                <p>
                  <span className='label'>2 estados -</span> Acesso interditado
                </p>
                <Text type='info'>
                  Última atualização às 22:00 - 20/03/2020
                </Text>
              </Timeline.Item>
            </Timeline>
          </div>
        </section>
      </div>
    </section>
  );
};

export default eventsOverviewWithStyle(EventsOverview);
