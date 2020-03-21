import styled, { css } from 'styled-components';

const style = ({ size = 'md', type = 'primary', theme }) => {
  const colors = {
    primary: `
        color: ${theme.colors.primary.default};
        border: 1px solid ${theme.colors.primary.default};
        border-radius: 2px;
        transition: .3s all;

        &:hover {
          color: ${theme.colors.primary.hover};
          border-color: ${theme.colors.primary.hover};
        }
      `
  };

  const sizes = {
    md: `
      width: 102px;
      height: 34px;
    `
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

export const buttonWithStyle = component => styled(component)(style);
