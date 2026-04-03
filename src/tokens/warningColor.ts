/**
 * 警示色 Tab：Warning 色阶 Token → 色值
 *
 * 设计稿：Figma「Design-system-test」node 52-1283
 * https://www.figma.com/design/LemcTQxWSXAUNodq84I2bI/Design-system-test?node-id=52-1283
 */
export const warningColorTokens = {
  'warning-1': '#FFF8EB',
  'warning-2': '#FFF5D8',
  'warning-3': '#FFE9B1',
  'warning-4': '#FFDA8B',
  'warning-5': '#FFC964',
  'warning-6': '#F5AE3C',
  'warning-7': '#DF9733',
  'warning-8': '#B67A18',
  'warning-9': '#815026',
  'warning-10': '#57351D',
} as const;

export type WarningColorToken = keyof typeof warningColorTokens;

export function getWarningColorValue(token: WarningColorToken): string {
  return warningColorTokens[token];
}

export const warningColorTableOrder: { tokenKey: WarningColorToken; tokenLabel?: string }[] = [
  { tokenKey: 'warning-1', tokenLabel: 'Warning-1' },
  { tokenKey: 'warning-2', tokenLabel: 'Warning-2' },
  { tokenKey: 'warning-3', tokenLabel: 'Warning-3' },
  { tokenKey: 'warning-4', tokenLabel: 'Warning-4' },
  { tokenKey: 'warning-5', tokenLabel: 'Warning-5' },
  { tokenKey: 'warning-6', tokenLabel: 'Warning-6' },
  { tokenKey: 'warning-7', tokenLabel: 'Warning-7' },
  { tokenKey: 'warning-8', tokenLabel: 'Warning-8' },
  { tokenKey: 'warning-9', tokenLabel: 'Warning-9' },
  { tokenKey: 'warning-10', tokenLabel: 'Warning-10' },
];
