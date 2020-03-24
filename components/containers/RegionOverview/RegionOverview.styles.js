import styled, { css } from 'styled-components';

const style = ({ theme }) => css`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  background-color: #fff;

  .container {
    ${theme.container}

    .group {
      width: 100%;
      display: flex;
      justify-content: space-between;

      float: left;

      .indicator {
        flex: 0.18;
      }

      .ant-select {
        flex: 0.35;
      }
    }
  }
`;

export const regionOverviewWithStyle = component => styled(component)(style);
