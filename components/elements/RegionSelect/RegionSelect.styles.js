import styled, { css } from 'styled-components';

const selectHeight = `53px !important`;
export const regionSelectWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      .ant-select {
        ${theme.shadows.default}
      }
      .ant-select-selector {
        ${theme.shadows.default}
        height: ${selectHeight};
      }

      .ant-select-selection-item {
        line-height: ${selectHeight};
      }

      &:hover {
        .ant-select-selector {
          border-color: ${theme.colors.primary.default} !important;
        }
      }

      input {
        height: ${selectHeight};
      }

      .ant-select-selection-placeholder {
        line-height: ${selectHeight};
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
