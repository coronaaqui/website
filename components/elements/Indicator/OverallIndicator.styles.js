import styled, { css } from 'styled-components';

export const overallIndicatorWithStyle = component =>
  styled(component)(
    ({ type = 'success', theme }) => css`
      display: flex;
      width: 14rem;
      border: 1px solid ${theme.colors.primary.dark};
      height: 84px;
      align-items: center;
      padding: 0 18px;

      ${theme.shadows.default}
    `
  );

export const OverallItem = styled.div`
  &:last-child {
    margin-left: 45px;
  }

  .value {
    font-size: 30px;
    font-weight: 300;
    letter-spacing: 1.8px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary.dark};

    .anticon {
      font-size: 20px;
      color: ${({ theme, arrow }) =>
        theme.colors.semantic?.[arrow.type].default};
    }
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
