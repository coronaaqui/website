import styled, { css } from 'styled-components';

export const footerWithStyle = (component) =>
  styled(component)(
    ({ theme }) => css`
      background: ${theme.colors.primary.dark};
      padding: 48px 0 0 0;
      figure {
        margin-bottom: 25px;
      }
      .footer-container {
        display: block;
        ${theme.container}
        ${theme.paddings.containerPadding}
        
        .info-content {
          display: grid;
          color: ${theme.colors.grey.scales[0]};
          gap: 4vw;
          padding-bottom: 50px;
          border-bottom: 1px solid ${theme.colors.grey.scales[0]};
          button {
            width: 100%;
          }
          h2 {
            color: ${theme.colors.grey.scales[0]};
            font-size: 18px;
            margin-bottom: 25px;
          }
          @media only screen and ${theme.device.tablet} {
            grid-template-columns: repeat(2, 1fr);
          }
          @media only screen and ${theme.device.laptop} {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .copyright {
          color: ${theme.colors.grey.scales[0]};
          padding: 30px 0;
          p {
            text-align: center;
          }
        }
      }
    `
  );
