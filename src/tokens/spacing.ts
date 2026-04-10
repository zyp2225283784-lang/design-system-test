/**
 * 间距：Token ↔ rem ↔ px 一一对应（表格三列均由同一映射派生）
 *
 * 设计稿：Figma「Design-system-test」node 70:1405
 * https://www.figma.com/design/LemcTQxWSXAUNodq84I2bI/Design-system-test?node-id=70-1405
 */

/** 以 token 为键：rem、px、行高唯一来源，禁止在表格外重复写死这三列 */
export const spacingTokens = {
  'spacing-1': { rem: '0.125', px: 2, rowHeight: 52 },
  'spacing-2': { rem: '0.25', px: 4, rowHeight: 52 },
  'spacing-3': { rem: '0.5', px: 8, rowHeight: 52 },
  'spacing-4': { rem: '0.75', px: 12, rowHeight: 52 },
  'spacing-5': { rem: '1.5', px: 24, rowHeight: 64 },
  'spacing-6': { rem: '2', px: 32, rowHeight: 72 },
  'spacing-7': { rem: '2.5', px: 40, rowHeight: 80 },
  'spacing-8': { rem: '3', px: 48, rowHeight: 88 },
  'spacing-9': { rem: '4', px: 64, rowHeight: 104 },
  'spacing-10': { rem: '5', px: 80, rowHeight: 120 },
  'spacing-11': { rem: '6', px: 96, rowHeight: 136 },
  'spacing-12': { rem: '10', px: 160, rowHeight: 200 },
} as const;

export type SpacingTokenKey = keyof typeof spacingTokens;

export function getSpacingRem(token: SpacingTokenKey): string {
  return spacingTokens[token].rem;
}

export function getSpacingPx(token: SpacingTokenKey): number {
  return spacingTokens[token].px;
}

export function getSpacingRowHeight(token: SpacingTokenKey): number {
  return spacingTokens[token].rowHeight;
}

/** 表格展示顺序；展示名默认与 tokenKey 相同 */
export const spacingTableOrder: { tokenKey: SpacingTokenKey; tokenLabel?: string }[] = [
  { tokenKey: 'spacing-1' },
  { tokenKey: 'spacing-2' },
  { tokenKey: 'spacing-3' },
  { tokenKey: 'spacing-4' },
  { tokenKey: 'spacing-5' },
  { tokenKey: 'spacing-6' },
  { tokenKey: 'spacing-7' },
  { tokenKey: 'spacing-8' },
  { tokenKey: 'spacing-9' },
  { tokenKey: 'spacing-10' },
  { tokenKey: 'spacing-11' },
  { tokenKey: 'spacing-12' },
];

export type SpacingRow = {
  tokenKey: SpacingTokenKey;
  tokenLabel: string;
  rem: string;
  px: number;
  rowHeight: number;
};

/** 供 App 表格 v-for：列数据均由 spacingTokens[tokenKey] 映射得到 */
export const spacingTableRows: SpacingRow[] = spacingTableOrder.map(({ tokenKey, tokenLabel }) => {
  const v = spacingTokens[tokenKey];
  return {
    tokenKey,
    tokenLabel: tokenLabel ?? tokenKey,
    rem: v.rem,
    px: v.px,
    rowHeight: v.rowHeight,
  };
});
