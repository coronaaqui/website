import styled, { css } from 'styled-components';
import { Logo } from '../Logo';

export const headerWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      display: flex;
      flex-direction: row;
      align-items: center;

      height: 60px;

      background: #fff;
      box-shadow: ${theme.shadows.default};

      ${theme.paddings.containerPadding}

      ${Logo} {
        width: 150px;
        order: 1;
      }

      .cta-section {
        display: flex;
        flex-direction: row-reverse;
        order: 2;
        width: calc(100% - 150px);
      }
    `
  );
