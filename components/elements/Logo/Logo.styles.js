import styled, { css } from 'styled-components';

export const logoWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      font-size: 20px;
      cursor: pointer;

      strong {
        font-weight: bolder;
      }
    `
  );
