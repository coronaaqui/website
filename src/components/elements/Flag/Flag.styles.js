import styled, { css } from 'styled-components';

export const flagWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      float: left;
      width: 30px;
      height: 30px;
    `
  );
