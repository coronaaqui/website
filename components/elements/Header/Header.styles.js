import styled, { css } from 'styled-components';
import { Logo } from '../Logo';

export const headerWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      background: #fff;
      ${theme.shadows.lg};

      ${Logo} {
        width: 150px;
        order: 1;
      }

      .header-container {
        ${theme.paddings.containerPadding}
        ${theme.container}
       
        display: flex;
        flex-direction: row;
        height: 60px;
        align-items: center;
        padding: 0 2rem;

        @media only screen and ${theme.device.tablet} {
          padding: 0 5rem;
        }
      }

      .cta-section {
        display: flex;
        flex-direction: row-reverse;
        order: 2;
        width: calc(100% - 150px);
      }
    `
  );
