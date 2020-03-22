import styled, { css } from 'styled-components';

export const logoWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      font-size: 20px;
      cursor: pointer;
      color: ${theme.colors.primary.dark};
      font-weight: 600;

      strong {
        font-weight: 400;
        color: ${theme.colors.primary.default};
      }
      &.inverted{
        color: ${theme.colors.grey.scales[0]};
      }
    `
  );
