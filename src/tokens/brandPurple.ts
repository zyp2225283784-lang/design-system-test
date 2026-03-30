/**
 * 品牌紫阶 Token → 色值（设计规范原始值，页面与组件应通过 token 名取用，避免硬编码 hex）
 */
export const brandPurpleTokens = {
  'purple-1': '#F3F4FF',
  'purple-2': '#E9ECFF',
  'purple-3': '#DDDCFF',
  'purple-4': '#CDCBFF',
  'purple-5': '#8580FF',
  'purple-6': '#6962FF',
  'purple-7': '#5650DC',
  'purple-8': '#453CB8',
  'purple-9': '#352C94',
  'purple-10': '#271E70',
} as const;

export type BrandPurpleToken = keyof typeof brandPurpleTokens;

export function getBrandPurpleValue(token: BrandPurpleToken): string {
  return brandPurpleTokens[token];
}
