import styled, { css } from 'styled-components';

const h1 = styled.h1`
  height: 50px;
  ${({ theme }) => theme.typography.titles.h1}
`;

const h2 = styled.h2`
  ${({ theme }) => theme.typography.titles.h2}
`;

const Title = {
  h1,
  h2
};

const Text = styled.p`
  line-height: 1.5rem;
  ${({ size = 'md', theme }) => theme.typography.text?.[size]}
  ${({ type, theme }) =>
    type === 'info' ? `color: ${theme.colors.grey.scales[2]};` : ``}
  ${({ align = 'left' }) => `text-align: ${align};`}
`;

const getDotStyle = (type, theme) =>
  type === 'primary'
    ? `
  color: ${theme.colors.primary.default}
`
    : `color: ${theme.colors.primary.dark}`;

const Dot = styled(({ children, size, ...props }) => (
  <span {...props}>{children || `.`}</span>
))(
  ({ size = '30px', type = 'primary', theme }) => css`
    font-size: ${size};
    ${getDotStyle(type, theme)};
  `
);

export { Title, Text, Dot };
