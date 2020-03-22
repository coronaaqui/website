import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    body {
      font-family: 'Mukta', sans-serif !important;
    }

    .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
      background-color: #f5f5f5;
    }
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      color: rgba(0, 0, 0, 0.65);
      font-weight: 600;
      background-color: #e7f3f1 !important;
    }
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled)
      .ant-select-item-option-state {
      color: ${theme.colors.primary.default} !important;
    }

    .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
      border-color: ${theme.colors.primary.default} !important;
      border-right-width: 1px !important;
    }

    .ant-select-focused.ant-select-single:not(.ant-select-customize-input)
      .ant-select-selector {
      border-color: ${theme.colors.primary.default} !important;
      border-right-width: 1px !important;
      outline: 0;
      box-shadow: 0 0 0 2px #1c39361c !important;
    }

    .ant-select-item-option-content {
      figure {
        float: left;
      }
    }

    a {
      color: ${theme.colors.black.default} !important;

      &:hover {
        padding-bottom: 1px;
        border-bottom: 1px solid ${theme.colors.primary.default};
      }
    }
  `
);

export { GlobalStyle };
