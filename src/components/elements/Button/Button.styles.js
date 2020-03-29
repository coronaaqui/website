import styled, { css } from 'styled-components';

const style = ({ size = 'md', type = 'primary', theme }) => {
  const colors = {
    primary: `
        border:none;
        border-radius: 2px;
        transition: .3s all;
        background-color:${theme.colors.primary.default};
        color: ${theme.colors.grey.scales[0]};
        &:hover {
          background-color: ${theme.colors.primary.hover};
        }
        &.inverted{
          color: ${theme.colors.primary.default};
          border-color: ${theme.colors.grey.scales[0]};
          background-color:${theme.colors.grey.scales[0]};
        }
        &.outline{
          color: ${theme.colors.primary.default};
          border: 1px solid ${theme.colors.primary.default};
          &.inverted{
            color: ${theme.colors.grey.scales[0]};
            border-color: ${theme.colors.grey.scales[0]};
            background-color:transparent;
          }
        }
      `,
  };

  const sizes = {
    md: `
      width: 102px;
      height: 34px;
    `,
  };

  return css`
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 300;
    background: inherit;

    ${theme.typography.text.md}
    ${colors?.[type]};
    ${sizes?.[size]}
  `;
};

export const buttonWithStyle = (component) => styled(component)(style);
