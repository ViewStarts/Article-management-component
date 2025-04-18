# 文章发布管理模块

## 项目功能

  本项目实现了一个 **文章发布管理模块**，包含以下功能：

- **文章发布**：右侧页面用于文章的发布。发布后的文章将显示在左侧的文章管理页面。
- **文章管理**：展示已发布的文章列表，可以对已发布的文章进行 **删除** 和 **修改** 操作。
- **增删改查**：支持文章的增、删、改、查功能。

## 项目运行

### 下载依赖

  首先，安装项目的所有依赖：

```
pnpm install
```

### 启动

  启动开发环境，项目将在浏览器中打开进行开发和测试：

```
pnpm dev
```

## 功能描述

- 文章发布
  - 右侧页面提供文章发布的功能。用户可以输入标题和内容并发布文章。
  - 发布后的文章会立即显示在 文章管理 页面。

- 文章管理
  - 文章列表：管理页面展示所有已发布的文章。
  - 删除功能：点击删除按钮，文章会从列表中删除。
  - 修改功能：点击修改按钮，文章内容可以进行编辑，修改后会立即更新展示。

### 注意事项

  本模块的前端界面和功能都已经实现，但由于没有与后端的接口对接，文章数据是存储在前端的内存中的。。
