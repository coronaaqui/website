import styled, { css } from 'styled-components';
import { Text, Title } from '../../elements/Typography';

const indicatorWidth = 235;

const style = ({ theme }) => css`
  ${theme.container}
  padding: 35px 0;

  .container {
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
`;

export const regionOverviewWithStyle = component => styled(component)(style);
