import styled, { css } from 'styled-components';

const menuHeight = '80vh';

const style = ({ theme }) => css`
  background: ${theme.colors.grey.scales[0]};

  .description,
  .events {
    ${theme.container}
  }

  .description {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .events {
    display: flex;
    justify-content: space-between;

    .events__group {
      width: calc(98% - 300px);
    }

    .events__menu {
      width: 300px;
      background: #fff;
      height: ${menuHeight};

      ${theme.shadows.default}

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

        .ant-list-items {
          height: calc(${menuHeight} - 104px);
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
    display: flex;
    width: 18vw;
    justify-content: space-between;
    margin: 22px 0;

    .phone {
      .label {
        margin-right: 5px;
        font-weight: bolder;
        float: left;
      }
    }

    .social {
      width: 5vw;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const regionWithStyle = component => styled(component)(style);
