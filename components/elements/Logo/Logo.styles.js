import styled, { css } from 'styled-components';

export const logoWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      font-size: 20px;
      cursor: pointer;
      color: ${theme.colors.primary.dark};
      font-weight: 500;

      strong {
        font-weight: 300;
        color: ${theme.colors.primary.default};
      }
      &.inverted{
        color: ${theme.colors.grey.scales[0]};
      }
    `
  );
