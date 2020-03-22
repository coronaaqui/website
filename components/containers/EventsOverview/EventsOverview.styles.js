import styled, { css } from 'styled-components';
import { Text } from '../../elements/Typography';

const styles = ({ theme }) => css`
  
  width: 100%;
  background: ${theme.colors.grey.scales[0]};
  ${theme.paddings.containerPaddingTop}
  ${theme.paddings.containerPadding}

  ${Text} {
    width: 100%;
  }

  .events-overview__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 80px;
  }

  .events-overview__item {
    margin: 0 0 20px;
    
    .ant-timeline {
      margin: 10px 0 0 108px; 
      float: left;

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
      width: 80px;
      float: left;
      margin: 0 14px;

      img {
        width: 80px;
      }
    }

    article {
      h2 {
        font-size: 20px;
        color: ${theme.colors.primary.dark};
        font-weight: 400;
        margin-bottom: 10px;
      }
  
      ${Text} {
        width: 40vw;
        overflow-wrap: normal;
        max-width: 650px;
        margin-bottom: 10px;
      }
    }
  }
`;

export const eventsOverviewWithStyle = component => styled(component)(styles);
