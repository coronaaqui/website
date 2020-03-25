import styled, { css } from 'styled-components';

export const indicatorWithStyle = component =>
  styled(component)(
    ({ type = 'success', theme }) => css`
      /* display: flex;
      width: 220px; */
      border: 1px solid #cccccc;
      height: 54px;
      align-items: center;
      padding: 0 18px;
      display:grid;
      grid-template-columns:70% 30%;
      border-left: 5px solid ${theme.colors.semantic?.[type].default};
      ${theme.shadows.default}

      .label {
        font-size: 16px;
        font-weight: 500;
        color: ${theme.colors.primary.dark};
      }

      .value {
        text-align: right;
        color: ${theme.colors.primary.dark};
        font-size: 20px;
        font-weight: 700;
      }
    `
  );
