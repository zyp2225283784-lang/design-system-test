/**
 * 中性色 Tab：背景色阶 Token → 色值
 *
 * 设计稿：Figma「Design-system-test」node 48-455
 * https://www.figma.com/design/LemcTQxWSXAUNodq84I2bI/Design-system-test?node-id=48-455
 */
export const neutralBackTokens = {
  'back-1': '#FFFFFF',
  'back-2': '#F9FAFD',
  'back-3': '#F0F2F5',
  'back-4': '#E8EAEE',
  'back-5': '#DCDEE3',
  'back-6': '#C9CDD3',
  'back-7': '#A7ACB6',
  'back-8': '#898F9A',
  'back-9': '#6F7683',
  'back-10': '#535C6C',
} as const;

export type NeutralBackToken = keyof typeof neutralBackTokens;

export function getNeutralBackValue(token: NeutralBackToken): string {
  return neutralBackTokens[token];
}

export const neutralBackTableOrder: { tokenKey: NeutralBackToken; tokenLabel?: string }[] = [
  { tokenKey: 'back-1', tokenLabel: 'Back-1' },
  { tokenKey: 'back-2', tokenLabel: 'Back-2' },
  { tokenKey: 'back-3', tokenLabel: 'Back-3' },
  { tokenKey: 'back-4', tokenLabel: 'Back-4' },
  { tokenKey: 'back-5', tokenLabel: 'Back-5' },
  { tokenKey: 'back-6', tokenLabel: 'Back-6' },
  { tokenKey: 'back-7', tokenLabel: 'Back-7' },
  { tokenKey: 'back-8', tokenLabel: 'Back-8' },
  { tokenKey: 'back-9', tokenLabel: 'Back-9' },
  { tokenKey: 'back-10', tokenLabel: 'Back-10' },
];
