<template>
  <div class="design-system-page">
    <aside class="ds-sidebar" aria-label="设计系统导航">
      <div class="ds-sidebar-header">
        <img class="ds-logo" src="/assets/a30a4efc4bf8ca5a2e3f13072b9e5e86d7f24a96.svg" alt="" />
        <span class="ds-brand-title">Desgn system</span>
      </div>
      <nav class="ds-sidebar-nav">
        <div v-for="group in navGroups" :key="group.key" class="ds-nav-group">
          <button
            type="button"
            class="ds-nav-l1"
            :aria-expanded="isExpanded(group.key)"
            @click="toggleGroup(group.key)"
          >
            <span class="ds-nav-l1-text">{{ group.title }}</span>
            <span class="ds-chevron-wrap" aria-hidden="true">
              <img
                class="ds-chevron"
                :class="{ 'ds-chevron--collapsed': !isExpanded(group.key) }"
                src="/assets/d1afe008175bfa88ec9784e2e461ae941eec3927.svg"
                alt=""
              />
            </span>
          </button>
          <div v-show="isExpanded(group.key)" class="ds-nav-children">
            <button
              v-for="item in group.items"
              :key="item.label"
              type="button"
              class="ds-nav-l2"
              :class="{ 'ds-nav-l2--active': item.active }"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
      </nav>
    </aside>

    <main class="ds-main">
      <header class="ds-main-header">
        <h1 class="ds-page-title">颜色</h1>
      </header>

      <div class="ds-tabs" role="tablist" aria-label="颜色分类">
        <button
          v-for="tab in colorTabs"
          :key="tab"
          type="button"
          role="tab"
          class="ds-tab"
          :class="{ 'ds-tab--active': tab === activeColorTab }"
          :aria-selected="tab === activeColorTab"
          @click="activeColorTab = tab"
        >
          <span class="ds-tab__label">{{ tab }}</span>
        </button>
      </div>

      <p class="ds-desc">
        有言的品牌主色，用于视觉重的强引导，根据具体场景抓请使用
      </p>

      <div class="ds-table-wrap">
        <div class="ds-table">
          <div class="ds-tr ds-tr--head">
            <div class="ds-th">Token</div>
            <div class="ds-th">Value</div>
            <div class="ds-th">示例</div>
          </div>
          <div v-for="row in brandColorRows" :key="row.tokenKey" class="ds-tr">
            <div class="ds-td ds-td--token">{{ row.tokenLabel }}</div>
            <div class="ds-td ds-td--value">
              <div class="ds-td-value-copy-wrap">
                <span class="ds-td-token-text">{{ row.value }}</span>
                <button
                  type="button"
                  class="ds-token-copy"
                  :class="{ 'ds-token-copy--copied': lastCopiedToken === row.value }"
                  :aria-label="`复制色值 ${row.value}`"
                  @click.stop="copyToken(row.value)"
                >
                  <svg
                    v-if="lastCopiedToken !== row.value"
                    class="ds-token-copy__icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2" />
                    <path
                      d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    v-else
                    class="ds-token-copy__icon ds-token-copy__icon--ok"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="ds-td ds-td--sample">
              <span class="ds-swatch" :style="{ background: row.value }" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { getBrandPurpleValue, type BrandPurpleToken } from './tokens/brandPurple';

const lastCopiedToken = ref<string | null>(null);
let copyFeedbackTimer: ReturnType<typeof setTimeout> | null = null;

async function copyToken(token: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(token);
    lastCopiedToken.value = token;
    if (copyFeedbackTimer) clearTimeout(copyFeedbackTimer);
    copyFeedbackTimer = setTimeout(() => {
      lastCopiedToken.value = null;
      copyFeedbackTimer = null;
    }, 1500);
  } catch {
    /* 非 HTTPS 或权限被拒时静默失败 */
  }
}

type NavGroupKey = 'foundation' | 'prompt' | 'components';

const navGroups: {
  key: NavGroupKey;
  title: string;
  items: { label: string; active: boolean }[];
}[] = [
  {
    key: 'foundation',
    title: '基础规范',
    items: [
      { label: '颜色', active: true },
      { label: '字体', active: false },
      { label: '按钮', active: false },
      { label: '圆角', active: false },
      { label: '阴影', active: false },
      { label: '间距', active: false },
      { label: '分割线', active: false },
    ],
  },
  {
    key: 'prompt',
    title: '提示样式',
    items: [
      { label: '全局提示', active: false },
      { label: '气泡提示', active: false },
    ],
  },
  {
    key: 'components',
    title: '通用组件',
    items: [
      { label: '搜索', active: false },
      { label: '下拉', active: false },
      { label: '导航', active: false },
      { label: '勾选', active: false },
      { label: '加载', active: false },
      { label: '滑条', active: false },
      { label: '表单输入', active: false },
    ],
  },
];

/** 分组展开状态，默认与原先设计稿一致：三组均展开 */
const expandedByGroup = reactive<Record<NavGroupKey, boolean>>({
  foundation: true,
  prompt: true,
  components: true,
});

function isExpanded(key: NavGroupKey): boolean {
  return expandedByGroup[key];
}

function toggleGroup(key: NavGroupKey): void {
  expandedByGroup[key] = !expandedByGroup[key];
}

const colorTabs = [
  '品牌色',
  '字体色',
  '中性色',
  '危险色',
  '成功色',
  '警示色',
] as const;

const activeColorTab = ref<(typeof colorTabs)[number]>('品牌色');

/** 表格行：规范 tokenKey 用于代码取值；tokenLabel 可与设计稿展示一致（如 purple-6*） */
const brandPurpleTableOrder: { tokenKey: BrandPurpleToken; tokenLabel?: string }[] = [
  { tokenKey: 'purple-1' },
  { tokenKey: 'purple-2' },
  { tokenKey: 'purple-3' },
  { tokenKey: 'purple-4' },
  { tokenKey: 'purple-5' },
  { tokenKey: 'purple-6', tokenLabel: 'purple-6*' },
  { tokenKey: 'purple-7' },
  { tokenKey: 'purple-8' },
  { tokenKey: 'purple-9' },
  { tokenKey: 'purple-10' },
];

const brandColorRows = brandPurpleTableOrder.map(({ tokenKey, tokenLabel }) => ({
  tokenKey,
  tokenLabel: tokenLabel ?? tokenKey,
  value: getBrandPurpleValue(tokenKey),
}));
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>

<style scoped lang="scss">
/* Figma: Design-system-test node 1:28 */
$text-1: #121926;
$text-3: #414751;
$text-5: #6d7179;
$text-7: #9a9da2;
$back-1: #ffffff;
$back-2: #f9fafd;
$back-4: #e8eaee;

/* 主布局：侧栏固定视口高度不随主栏滚动；主栏单独滚动并占满剩余宽度 */
.design-system-page {
  display: flex;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: $back-1;
  color: $text-1;
}

.ds-sidebar {
  width: 200px;
  flex-shrink: 0;
  height: 100%;
  min-height: 0;
  background: $back-2;
  border-right: 1px solid $back-4;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ds-sidebar-header {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 72px;
  padding: 0 24px;
  border-bottom: 1px solid $back-4;
  box-sizing: border-box;
}

.ds-logo {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.ds-brand-title {
  font-size: 16px;
  font-weight: 500;
  color: $text-1;
  white-space: nowrap;
}

.ds-sidebar-nav {
  flex: 1;
  min-height: 0;
  padding-top: 4px;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.ds-nav-group {
  width: 100%;
}

.ds-nav-l1 {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 24px;
  border: none;
  margin: 0;
  box-sizing: border-box;
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: inherit;

  &:hover {
    background: rgba(232, 234, 238, 0.35);
  }
}

.ds-nav-children {
  width: 100%;
}

.ds-nav-l1-text {
  font-size: 14px;
  font-weight: 500;
  color: $text-1;
}

.ds-chevron-wrap {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ds-chevron {
  width: 11px;
  height: 6px;
  display: block;
  transition: transform 0.2s ease;
}

/* 展开：箭头朝上（与设计稿一致）；收起：朝下 */
.ds-chevron--collapsed {
  transform: rotate(180deg);
}

.ds-nav-l2 {
  display: block;
  width: 100%;
  height: 44px;
  padding: 0;
  padding-left: 40px;
  border: none;
  background: transparent;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  color: $text-3;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background: rgba(232, 234, 238, 0.5);
  }
}

.ds-nav-l2--active {
  background: $back-4;
  color: $text-3;
  font-weight: 500;
}

.ds-main {
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

/* 响应式水平内边距：窄屏贴边、宽屏接近设计稿 120px */
$main-pad: clamp(16px, 4vw, 120px);

.ds-main-header {
  padding: clamp(48px, 10vh, 80px) $main-pad 24px;
  border-bottom: 1px solid $back-4;
  box-sizing: border-box;
}

.ds-page-title {
  margin: 0;
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;
  color: $text-1;
}

/* Tab 条：Figma Design-system-test node 20:490（Tabs：未选中 / 选中 / hover） */
.ds-tabs {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px 28px;
  padding: 0 $main-pad;
  border-bottom: 1px solid $back-4;
  box-sizing: border-box;
}

.ds-tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 20px 0 12px;
  border: none;
  /* 与容器底边对齐：选中态 1px #121926 压过浅灰分割线 */
  margin-bottom: -1px;
  background: transparent;
  font-size: 14px;
  line-height: normal;
  font-family: inherit;
  color: $text-7;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
  transition: color 0.15s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: transparent;
  }

  &:hover:not(.ds-tab--active) {
    color: $text-1;
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(18, 25, 38, 0.35);
    outline-offset: 2px;
    border-radius: 2px;
  }

  &:disabled,
  &.ds-tab--disabled {
    color: $text-7;
    cursor: not-allowed;
    pointer-events: none;
  }
}

.ds-tab__label {
  white-space: nowrap;
}

/* 选中：Text-1 + Medium，底边 1px #121926（与 Figma 组件「选中」一致） */
.ds-tab--active {
  color: $text-1;
  font-weight: 500;

  &::after {
    background: $text-1;
  }

  &:hover {
    color: $text-1;
    font-weight: 500;
  }
}

.ds-desc {
  margin: 0;
  padding: 24px $main-pad;
  font-size: 12px;
  font-weight: 400;
  color: $text-7;
  border-radius: 28px;
  box-sizing: border-box;
}

.ds-table-wrap {
  padding: 0 $main-pad clamp(40px, 8vh, 80px);
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
}

.ds-table {
  width: 100%;
  border: 1px solid $back-4;
  border-bottom: none;
  overflow: hidden;
}

.ds-tr {
  display: flex;
  min-height: 80px;
  align-items: stretch;
}

.ds-tr--head {
  min-height: 52px;
  background: $back-1;
}

.ds-th,
.ds-td {
  flex: 1 1 0;
  min-width: 0;
  padding: 16px;
  box-sizing: border-box;
  border-right: 1px solid $back-4;
  border-bottom: 1px solid $back-4;
  display: flex;
  align-items: center;
}

.ds-th:last-child,
.ds-td:last-child {
  border-right: none;
}

.ds-th {
  font-size: 14px;
  font-weight: 400;
  color: $text-1;
}

.ds-td--token,
.ds-td--value {
  font-size: 14px;
  font-weight: 400;
  color: $text-5;
  min-width: 0;
}

.ds-td--token {
  word-break: break-all;
}

/* Value 列：色值靠左，hover 时复制图标出现在列右侧 */
.ds-td-value-copy-wrap {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-width: 0;
}

.ds-td-token-text {
  flex: 1;
  min-width: 0;
  word-break: break-all;
}

.ds-token-copy {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: $text-5;
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 0.15s ease,
    color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: $text-1;
    background: rgba(232, 234, 238, 0.6);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid rgba(18, 25, 38, 0.35);
    outline-offset: 1px;
  }
}

/* 仅 hover 色值栏时显示复制/对勾；复制成功若鼠标已离开，按钮与对勾一并隐藏 */
.ds-td-value-copy-wrap:hover .ds-token-copy {
  opacity: 1;
}

/* 触控设备无 hover：始终显示复制入口 */
@media (hover: none) and (pointer: coarse) {
  .ds-token-copy {
    opacity: 0.85;
  }

  .ds-token-copy.ds-token-copy--copied {
    opacity: 1;
  }
}

.ds-token-copy__icon {
  display: block;
}

.ds-token-copy__icon--ok {
  color: #5650dc;
}

.ds-td--sample {
  justify-content: flex-start;
}

.ds-swatch {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
