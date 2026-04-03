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
 * - 未选中 39:87 · hover 44:136 · 选中 39:89
 */
$text-1: #121926;
$text-5: #6d7179;
$back-3: #f0f2f5;
$back-4: #e8eaee;

.ds-nav-l2 {
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  min-height: 36px;
  padding: 10px 24px;
  box-sizing: border-box;
  margin: 0;
  border: none;
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
    border-color 0.12s ease;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(18, 25, 38, 0.35);
    outline-offset: -2px;
  }
}

.ds-nav-l2__label {
  position: relative;
  flex-shrink: 0;
}

/* 44:136 hover：Back-3 + Text-1，无左侧强调条 */
.ds-nav-l2:hover:not(.ds-nav-l2--active) {
  background: $back-3;
  color: $text-1;
}

/* 39:89 选中：Back-4 + Text-1 + 3px Text-1 左边框（Figma border-l-3） */
.ds-nav-l2--active {
  background: $back-4;
  color: $text-1;
  border-left: 3px solid $text-1;
}

.ds-nav-l2--active:hover {
  background: $back-4;
  color: $text-1;
  border-left: 3px solid $text-1;
}
</style>
