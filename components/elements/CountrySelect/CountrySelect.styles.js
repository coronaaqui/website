import styled, { css } from 'styled-components';

export const countrySelectWithStyle = component =>
  styled(component)(
    ({ theme }) => css`
      .ant-select-selector {
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
    `
  );
