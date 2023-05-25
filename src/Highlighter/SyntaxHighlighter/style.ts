import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, cx, prefixCls }) => {
  const prefix = `${prefixCls}-highlighter`;

  return {
    shiki: cx(
      `${prefix}-shiki`,
      css`
        .shiki {
          overflow-x: scroll;
          background: none !important;
        }
      `,
    ),
    prism: css`
      pre {
        overflow-x: scroll;
        font-family: ${token.fontFamilyCode} !important;
      }
    `,

    loading: css`
      position: absolute;
      top: 0;
      right: 0;

      padding: 4px 8px;

      color: ${token.colorTextTertiary};

      backdrop-filter: saturate(180%) blur(10px);
      border-radius: ${token.borderRadiusSM};
    `,
  };
});
