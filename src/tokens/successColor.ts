/**
 * 成功色 Tab：Success 色阶 Token → 色值
 *
 * 设计稿：Figma「Design-system-test」node 52-1078
 * https://www.figma.com/design/LemcTQxWSXAUNodq84I2bI/Design-system-test?node-id=52-1078
 */
export const successColorTokens = {
  'success-1': '#F6FFED',
  'success-2': '#D9F7BE',
  'success-3': '#B7EB8F',
  'success-4': '#95DE64',
  'success-5': '#73D13D',
  'success-6': '#52C41A',
  'success-7': '#389E0D',
  'success-8': '#237804',
  'success-9': '#135200',
  'success-10': '#092B00',
} as const;

export type SuccessColorToken = keyof typeof successColorTokens;

export function getSuccessColorValue(token: SuccessColorToken): string {
  return successColorTokens[token];
}

export const successColorTableOrder: { tokenKey: SuccessColorToken; tokenLabel?: string }[] = [
  { tokenKey: 'success-1', tokenLabel: 'Success-1' },
  { tokenKey: 'success-2', tokenLabel: 'Success-2' },
  { tokenKey: 'success-3', tokenLabel: 'Success-3' },
  { tokenKey: 'success-4', tokenLabel: 'Success-4' },
  { tokenKey: 'success-5', tokenLabel: 'Success-5' },
  { tokenKey: 'success-6', tokenLabel: 'Success-6' },
  { tokenKey: 'success-7', tokenLabel: 'Success-7' },
  { tokenKey: 'success-8', tokenLabel: 'Success-8' },
  { tokenKey: 'success-9', tokenLabel: 'Success-9' },
  { tokenKey: 'success-10', tokenLabel: 'Success-10' },
];
