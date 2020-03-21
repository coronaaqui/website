import styled, { css } from 'styled-components';

export const stateSelectWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      .ant-select {
        ${theme.shadows.default}
      }
      .ant-select-selector {
        ${theme.shadows.default}
        height: 46px !important;
      }

      .ant-select-selection-item {
        line-height: 46px !important;
      }

      &:hover {
        .ant-select-selector {
          border-color: ${theme.colors.primary.default} !important;
        }
      }

      input {
        height: 46px !important;
      }

      .ant-select-selection-placeholder {
        line-height: 46px !important;
      }

      .ant-select-arrow {
        color: ${theme.colors.primary.default} !important;
        font-weight: bold !important;
      }

      .ant-select-selection-item figure {
        float: left;
      }
    `
  );
