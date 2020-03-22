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
  }

  .events-overview__item {
    .&--description {
      article {
        width: 80%;
      
        h2 {
          width: 100%;
          float: left;
        }
  
        ${Text} {
          width: 100%;
          float: left;
        }
      }
    }

    
  }
`;

export const eventsOverviewWithStyle = component => styled(component)(styles);
