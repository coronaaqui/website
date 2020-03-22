import styled, { css } from 'styled-components';

export const indicatorWithStyle = component =>
  styled(component)(
    ({ type = 'success', theme }) => css`
      display: flex;
      border: 1px solid #cccccc;
      height: 54px;
      align-items: center;
      padding: 0 18px;

      border-left: 5px solid ${theme.colors.semantic?.[type].default};
      ${theme.shadows.default}

      .label {
        width: 70%;
        font-size: 16px;
        font-weight: 500;
        color: ${theme.colors.primary.dark};
      }

      .value {
        width: 30%;
        text-align: right;
        color: ${theme.colors.primary.dark};
        font-size: 20px;
        font-weight: 700;
      }
    `
  );
