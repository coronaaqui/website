import styled, { css } from 'styled-components';

const menuHeight = '80vh';

const style = ({ theme }) => css`
  background: ${theme.colors.grey.scales[0]};

  .alert {
    background: ${theme.colors.primary.default};
    padding: 5px 0;
    text-align: center;
    font-weight: lighter;
    color: #fff;
    font-size: 15px;

    a {
      font-weight: 700;
      color: #fff !important;
    }
  }
  
  .description,
  .events {
    ${theme.container}
    ${theme.paddings.containerPadding}

  }

  .description {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .events {
    min-height: 95vh;
    gap:70px;
    grid-template-columns:1fr;
    @media only screen and ${theme.device.laptop} {
      display:grid;
      grid-template-columns: 300px auto;
    }
    .event {
      padding: 30px 35px;
      background: #fff;
      ${theme.borders.default}
    }

    .events__menu {
      background: #fff;
      ${theme.shadows.default}
      height:300px;
      overflow:hidden;
      margin-bottom: 30px;
      @media only screen and ${theme.device.laptop} {
        height: ${menuHeight};
        overflow:unset;
      }
      .ant-badge {
        margin-top: 4px;
        float: right;

        .ant-badge-count {
          background-color: #fff;
          color: #999;
          box-shadow: 0 0 0 1px #d9d9d9 inset;
        }
      }

      .ant-list {
        height: 100%;

        .list-container {
          height: calc(300px - 104px);
          @media only screen and ${theme.device.laptop} {
            height: calc(${ menuHeight } - 104px);
          }
          overflow-y: auto;
         
        }

        .ant-list-header {
          padding-left: 0;
          padding-right: 0;
        }

        .ant-list-header .header,
        .ant-list-header .search,
        .ant-list-item {
          padding-left: 16px;
          padding-right: 16px;
        }

        .ant-list-header {
          .header {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 12px;

            h2 {
              font-weight: 700;
            }

            .ant-checkbox-wrapper {
            }
          }

          .search {
            padding-top: 12px;
          }
        }

        .ant-list-item {
          display: block;

          img {
            width: 28px;
            margin: 0 10px;
          }

          .name {
            text-overflow: ellipsis;
            overflow-wrap: break-word;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
    }
  }
  .contact {
    margin: 22px 0;
    margin-bottom: 0;
    .phone {
      .label {
        margin-right: 5px;
        font-weight: bolder;
        float: left;
      }
    }
    .social {
      padding: 10px 0;
      margin: 0 -5px;
      a{
        padding:5px;
      }
    }
  }
`;

export const regionWithStyle = component => styled(component)(style);
