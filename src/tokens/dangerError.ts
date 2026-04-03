/**
 * 危险色 Tab：Error 色阶 Token → 色值
 *
 * 设计稿：Figma「Design-system-test」node 52-752
 * https://www.figma.com/design/LemcTQxWSXAUNodq84I2bI/Design-system-test?node-id=52-752
 */
export const dangerErrorTokens = {
  'error-1': '#FFF5F3',
  'error-2': '#FFECE9',
  'error-3': '#FFD6D1',
  'error-4': '#FFAEA8',
  'error-5': '#FF827E',
  'error-6': '#FF5656',
  'error-7': '#D93F44',
  'error-8': '#AA2F37',
  'error-9': '#802029',
  'error-10': '#55121B',
} as const;

export type DangerErrorToken = keyof typeof dangerErrorTokens;

export function getDangerErrorValue(token: DangerErrorToken): string {
  return dangerErrorTokens[token];
}

export const dangerErrorTableOrder: { tokenKey: DangerErrorToken; tokenLabel?: string }[] = [
  { tokenKey: 'error-1', tokenLabel: 'Error-1' },
  { tokenKey: 'error-2', tokenLabel: 'Error-2' },
  { tokenKey: 'error-3', tokenLabel: 'Error-3' },
  { tokenKey: 'error-4', tokenLabel: 'Error-4' },
  { tokenKey: 'error-5', tokenLabel: 'Error-5' },
  { tokenKey: 'error-6', tokenLabel: 'Error-6' },
  { tokenKey: 'error-7', tokenLabel: 'Error-7' },
  { tokenKey: 'error-8', tokenLabel: 'Error-8' },
  { tokenKey: 'error-9', tokenLabel: 'Error-9' },
  { tokenKey: 'error-10', tokenLabel: 'Error-10' },
];
