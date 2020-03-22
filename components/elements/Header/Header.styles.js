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

      .header-container{
      ${theme.paddings.containerPadding}
        margin: 0 auto;
        width: 1180px;
        max-width:100%;
        display: flex;
        flex-direction: row;
        height: 60px;
        align-items: center;

      }

      .cta-section {
        display: flex;
        flex-direction: row-reverse;
        order: 2;
        width: calc(100% - 150px);
      }
    `
  );
