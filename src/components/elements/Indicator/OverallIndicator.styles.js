import styled, { css } from 'styled-components';

export const overallIndicatorWithStyle = (component) =>
  styled(component)(
    ({ type = 'success', theme }) => css`
      /* display: flex;
      width: 220px; */
      border: 1px solid ${theme.colors.primary.dark};
      height: 84px;
      align-items: center;
      /* padding: 0 0 0 22px; */
      padding: 15px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      ${theme.shadows.default}
      text-align: center;
    `
  );

export const OverallItem = styled.div`
  /* &:last-child {
    width: 45%;
    margin-left: 10%;
  } */

  .value {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.8px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary.dark};

    .anticon {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
