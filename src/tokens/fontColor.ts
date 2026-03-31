/**
 * 字体色 Tab：Token → 色值（规范映射，代码中请用 tokenKey 取值）
 *
 * 设计稿：Figma「Design-system-test」内容区表格
 * https://www.figma.com/design/LemcTQxWSXAUNodq84I2bI/Design-system-test?node-id=20-169
 */
export const fontColorTokens = {
  'text-1': '#121926',
  'text-2': '#29303B',
  'text-3': '#414751',
  'text-4': '#565A64',
  'text-5': '#6D7179',
  'text-6': '#83868D',
  'text-7': '#9A9DA2',
  'text-8': '#B0B3B6',
  'text-9': '#C8C9CC',
  'text-10': '#DFDFE1',
} as const;

export type FontColorToken = keyof typeof fontColorTokens;

export function getFontColorValue(token: FontColorToken): string {
  return fontColorTokens[token];
}

/** 表格行顺序与稿中从上到下一致；tokenLabel 为设计稿展示名（含 *） */
export const fontColorTableOrder: { tokenKey: FontColorToken; tokenLabel?: string }[] = [
  { tokenKey: 'text-1', tokenLabel: 'Text-1*' },
  { tokenKey: 'text-2', tokenLabel: 'Text-2' },
  { tokenKey: 'text-3', tokenLabel: 'Text-3*' },
  { tokenKey: 'text-4', tokenLabel: 'Text-4' },
  { tokenKey: 'text-5', tokenLabel: 'Text-5*' },
  { tokenKey: 'text-6', tokenLabel: 'Text-6' },
  { tokenKey: 'text-7', tokenLabel: 'Text-7*' },
  { tokenKey: 'text-8', tokenLabel: 'Text-8*' },
  { tokenKey: 'text-9', tokenLabel: 'Text-9' },
  { tokenKey: 'text-10', tokenLabel: 'Text-10' },
];
