import styled, { css } from 'styled-components';
import { Text } from '../../elements/Typography';

const styles = ({ theme }) => css`
  
  width: 100%;
  background: ${theme.colors.grey.scales[0]};
  ${theme.paddings.containerPaddingTop}
  ${theme.paddings.containerPadding}
  display: block;

  ${Text} {
    width: 100%;
  }
  .events-content{
    display: block;
    ${theme.container}
  }
  .events-overview__container {
    display:grid;
    margin-top: 80px;
    gap:15px;
    @media only screen and ${theme.device.tablet} {
      grid-template-columns: repeat(2,1fr);
    }
  }

  .events-overview__item {
    margin: 0 0 20px;
    
    .ant-timeline {
      margin: 0;
      @media only screen and ${theme.device.mobileL} {
        margin-left: 100px;
        margin-top: 20px;
      }

      .ant-timeline-item-content {
        .label {
          font-weight: 700;
          margin-right: 5px;
        }

        ${Text} {
          font-size: 14px;
        }
      }
    }
  }

  .events-overview__item--description {
    figure {
      display:grid;
      gap:15px;
      text-align: center;
      @media only screen and ${theme.device.mobileL} {
        grid-template-columns:80px auto;
        text-align: left;
      }
      picture{
        align-self:flex-start;
        img {
          width: 100%;
          max-width: 120px;
        }
      }
      figcaption {
        h2 {
          font-size: 20px;
          color: ${theme.colors.primary.dark};
          font-weight: 400;
          margin-bottom: 10px;
        }
    
        ${Text} {
          overflow-wrap: normal;
          text-align: center;
          margin-bottom: 30px;
          @media only screen and ${theme.device.mobileL} {
            text-align: left;
            margin-bottom: 10px;
          }
        }
      }
    }

  }
`;

export const eventsOverviewWithStyle = component => styled(component)(styles);
