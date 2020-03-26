import styled, { css } from 'styled-components';
import { Text } from '../Typography';

const descriptionWidth = 65;

const styles = ({ theme }) => css`
  margin: 0 0 20px;

  .ant-timeline {
    margin: 0;
    max-height: 700px;
    overflow-y: auto;
    padding: 4px;

    .city {
      display: flex;

      .info {
        margin-left: 10px;
        font-weight: lighter;
      }
    }

    .meta {
      display: flex;
    }

    .status {
      margin-right: 14px;
    }
    
    .info {
      display:flex;
      margin-right: 14px;
      align-items: center;
      width: fit-content;

      p {
        max-width: 140px;
        ${theme.typography.truncate}
      }

      .anticon {
        margin-right: 4px;
      }
    }

    .ant-timeline-item-head .anticon {
      font-size: 18px;
    }

    .F .ant-timeline-item-head .anticon {
      color: #ff3f3f;
    }
    
    .P .ant-timeline-item-head .anticon {
      color: ${theme.colors.yellow.default};
    }

    .O .ant-timeline-item-head .anticon {
      color: ${theme.colors.green.default};
    }
    
    .ant-timeline-item-content {
      margin-left: 25px;
    }

    a {
      color: ${theme.colors.primary.default} !important;
      font-weight: 300;
    }

    @media only screen and ${theme.device.mobileL} {
      margin-left: ${descriptionWidth + 20}px;
      margin-top: 20px;
    }

    .ant-timeline-item-content {
      .label {
        max-width: 240px;
        font-weight: 700;
        margin-right: 5px;
        ${theme.typography.truncate}
      }

      ${Text} {
        margin: 4px 0;
        font-size: 14px;
      }
    }
  }

  .event__description {
    figure {
      display:grid;
      gap:15px;
      text-align: center;
      @media only screen and ${theme.device.mobileL} {
        grid-template-columns:${descriptionWidth}px auto;
        text-align: left;
      }
      picture{
        align-self:flex-start;
        img {
          width: 100%;
          max-width: 110px;
        }
      }
      figcaption {
        display: flex;
        align-items: center;

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
`;

export const eventWithStyle = component => styled(component)(styles);
