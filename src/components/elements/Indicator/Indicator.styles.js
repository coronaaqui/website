import styled, { css } from 'styled-components';

export const indicatorWithStyle = (component) =>
  styled(component)(
    ({ type = 'success', theme }) => css`
      /* display: flex;
      width: 220px; */
      border: 1px solid #cccccc;
      height: 58px;
      align-items: center;
      padding: 0 18px;
      display: grid;
      grid-template-columns: 25% 30%;

      ${theme.shadows.default}

      .icon {
        img {
          width: 30px;
        }
      }

      .content {
        .label {
          font-size: 15px;
          font-weight: lighter;
          color: ${theme.colors.primary.dark};
          margin-bottom: 4px;
        }

        .value {
          color: ${theme.colors.primary.dark};
          font-size: 20px;
          font-weight: 700;
        }
      }
    `
  );
