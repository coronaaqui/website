import styled, { css } from 'styled-components';

export const logoWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      font-size: 20px;
      cursor: pointer;
      color: ${theme.colors.primary.dark};
      font-weight: 600;

      strong {
        font-weight: bolder;
        color: ${theme.colors.primary.default};
      }
    `
  );
