---
name: design-system-test-dev
description: >-
  Prepares the design-system-test Vue+Vite workspace, runs the dev server, and
  reports the local preview URL for Cursor Simple Browser. Use when the user
  opens this project, starts a new feature or page, says they want to preview
  locally, mentions design-system-test dev workflow, or asks for localhost /
  built-in browser.
---

# design-system-test 开发流程

面向 **Vue 3 + Vite + TypeScript** 单页应用；入口在 `src/App.vue`，静态资源在 `public/`。

## 用户一句话触发时怎么做

用户类似说法：「打开项目」「准备环境」「新开一个页面/功能」「给我本地地址」「要在 Cursor 里预览」——按下面 **默认流程** 执行，回复保持简短。

## 1. 准备环境（每次新开对话 / 换电脑先做）

在**项目根目录**（含 `package.json` 的 `design-system-test` 文件夹）执行：

```bash
cd /path/to/design-system-test
```

- 若无 `node_modules` 或刚 `git clone`：执行 **`npm install`**。
- 若依赖未变且已安装：可跳过安装。

## 2. 启动开发服务

```bash
npm run dev
```

- **默认本地地址**：`http://localhost:5173`（Vite 默认端口 **5173**）。
- 若终端输出里写了别的端口（例如 `5174`），**以终端实际打印的 `Local:` 行为准**。

端口被占用时，Vite 会自动换端口；**必须根据本次命令输出告知用户 URL**，不要死记 5173。

## 3. 告诉用户如何在 Cursor 内置浏览器打开

1. 把上一步得到的 **`http://localhost:xxxx`** 完整发给用户。
2. 说明可选操作（其一即可）：
   - **Command Palette**（`Cmd+Shift+P` / `Ctrl+Shift+P`）→ 搜索 **Simple Browser: Show** → 粘贴 URL。
   - 或 **在终端按住 Cmd/Ctrl 点击** Vite 打印的 `http://localhost:...` 链接（若编辑器支持）。

若用户反馈打不开：确认 dev 进程仍在运行、URL 端口与终端一致、未被防火墙拦截。

## 4. 开发新功能 / 新页面的默认约定

- **单页内迭代**：改 `src/App.vue`（模板 + `<script setup>` + `scoped` 样式）。
- **可复用拆分**：在 `src/components/` 新建 `.vue`，在 `App.vue` 中引入（目录不存在则创建）。
- **全局样式**：优先组件内 `scoped`；确需全局时再考虑 `src/style.scss` 并在 `main.ts` 引入（当前模板无则按需添加）。
- 开发服务器保持 **`npm run dev`** 运行即可 **热更新**。

## 5. 代理应执行的检查（简洁）

- [ ] 当前工作目录是否为 `design-system-test` 根目录。
- [ ] 需要时已运行 `npm install`。
- [ ] 已在后台或说明由用户保持运行 `npm run dev`。
- [ ] 回复中包含 **本次** 准确的 **`http://localhost:端口`**。

## 6. 常用命令速查

| 目的     | 命令              |
|----------|-------------------|
| 安装依赖 | `npm install`     |
| 本地开发 | `npm run dev`     |
| 类型检查 + 构建 | `npm run build` |
| 预览构建产物 | `npm run preview`（先 `build`） |

## 7. 不要在对话里假设的路径

用户本机路径可能是 `~/Desktop/AI-Cursor/design-system-test` 等；**用用户打开的仓库根目录为准**，或让用户确认 `package.json` 所在文件夹。
