<template>
  <button type="button" class="ds-nav-l2" :class="{ 'ds-nav-l2--active': active }">
    <span class="ds-nav-l2__label"><slot /></span>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  active?: boolean;
}>();
</script>

<style scoped lang="scss">
/**
 * Figma: Design-system-test「二级选项」39:86
 * https://www.figma.com/design/LemcTQxWSXAUNodq84I2bI/Design-system-test?node-id=39-86
 * 未选中 39:87 · hover 44:136 · 选中 39:89（当前稿为圆角块背景，无左侧竖条）
 */
$text-1: #121926;
$text-5: #6d7179;
$back-3: #f0f2f5;
$back-4: #e8eaee;

.ds-nav-l2 {
  display: flex;
  align-items: center;
  height: 36px;
  min-height: 36px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 0 10px;
  width: calc(100% - 20px);
  max-width: calc(100% - 20px);
  border: none;
  border-radius: 0;
  background: transparent;
  text-align: left;
  font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: $text-5;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  transition:
    color 0.12s ease,
    background 0.12s ease,
    border-radius 0.12s ease,
    margin 0.12s ease,
    width 0.12s ease;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(18, 25, 38, 0.35);
    outline-offset: -2px;
    border-radius: 8px;
  }
}

.ds-nav-l2__label {
  position: relative;
  flex-shrink: 0;
}

/* 44:136 hover：Back-3、Text-1、8px 圆角，宽 180 等效 */
.ds-nav-l2:hover:not(.ds-nav-l2--active) {
  background: $back-3;
  color: $text-1;
  border-radius: 8px;
}

/* 39:89 选中：Back-4、Text-1、8px 圆角，宽 176 等效（左右各 12px 缩进） */
.ds-nav-l2--active {
  margin: 0 12px;
  width: calc(100% - 24px);
  max-width: calc(100% - 24px);
  background: $back-4;
  color: $text-1;
  border-radius: 8px;
}

.ds-nav-l2--active:hover {
  background: $back-4;
  color: $text-1;
  border-radius: 8px;
}
</style>
