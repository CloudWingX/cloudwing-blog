---
title: "RhineLab-CloudWing_X"
published: 2026-09-30
order: 1
description: "复刻 LBEILC/RhineLabUI 的《明日方舟》「莱茵生命：访问」三维档案终端，出于好奇与学习。"
image: "/projects/rhinlab-cloudwing-x.jpg"
tags: ["复刻", "Astro", "Three.js", "TypeScript"]
link:
  - label: "在线体验"
    icon: "material-symbols:language"
    value: "https://www.cloudwing.top/"
  - label: "GitHub 仓库"
    icon: "material-symbols:code"
    value: "https://github.com/CloudWingX/RhineLab-CloudWing_X"
status: replica
lang: zh
---

这是对 [LBEILC/RhineLabUI](https://github.com/LBEILC/RhineLabUI) 的个人复刻与再创作：一个可直接 fork 的博客模板，保留上游 TypeScript + Three.js 三维界面作为独立的 `/lab/` 入口，出于好奇与学习。

## 功能特性

⚡ 极速静态博客: 基于 Astro 生成静态 HTML，文章有独立规范 URL，禁用 JavaScript 或 WebGL 仍可阅读

🧊 三维档案终端: 保留 RhineLabUI 的 TypeScript + Three.js 三维界面，作为独立的 `/lab/` 入口

📝 单一数据源: 文章、摘要、RSS、sitemap、搜索索引与三维卡片全部由同一份 Markdown 派生

🔄 可回滚发布: 本机构建 → 上传不可变 release → 服务器激活，失败不替换线上

### 核心功能

- **Astro 静态博客** - 文章有独立规范 URL，禁用 JavaScript / WebGL 仍可阅读

- **三维档案终端 `/lab/`** - 启动身份选择、注册 / 登录、档案阵列、沉浸式全文阅读

- **内容派生管线** - 内容、摘要、RSS、sitemap、搜索索引与三维卡片由同一份 Markdown 派生

- **自有功能模块** - 沉浸式阅读（reader）、影像档案查看器（album-viewer）、音乐播放器（music-player）

- **内容契约校验** - `check:content`、`check:features`、`test:blog`、`typecheck` 保证内容与功能边界

- **参数化部署** - SSH 部署、不可变 release 激活、失败回滚、健康检查与 smoke 测试

## 快速开始

### 环境要求

- Node.js 24.14.0+（与 `package-lock.json` 兼容）

- npm 11.9.0+

### 本地开发

1. **安装依赖并启动博客：**

```bash
npm ci --ignore-scripts
npm run dev:blog        # 博客写作与预览
npm run dev:lab         # 三维入口开发（地址以终端输出为准）
```

2. **构建与本地预览：**

```bash
npm run check:content   # 内容 schema、路径、草稿、封面与主题引用
npm run check:features  # 功能模块边界
npm run test:blog       # 内容契约单元测试
npm run typecheck       # 三维 TypeScript 检查
npm run build           # 校验 → 功能边界 → Astro → /lab/ → Pagefind → 整站检查
npm run preview         # 静态 dist/ 预览，未知路径返回真实 404
```

### 部署

部署相关文件全部参数化，仓库内不含任何真实主机、密钥或账号：

```bash
cp ops/upload.env.example ops/upload.env   # SSH_HOST / SSH_USER / SSH_IDENTITY / DEPLOY_ROOT
npm run build
npm run release -- --id "$(date -u +%Y%m%dT%H%M%SZ)-$(git rev-parse --short HEAD)"
bash ops/upload-release.sh --id <release-id> --activate
node ops/smoke-test.mjs https://example.com
```

服务器侧只接收并激活不可变 release，不安装 Node、不在线上编译，失败可回滚。

## 来源与许可

三维界面基于 [LBEILC/RhineLabUI](https://github.com/LBEILC/RhineLabUI)，参考《明日方舟》特别映像「莱茵生命：访问」。上游对其原创内容统一采用 MIT 许可，保留署名 Copyright (c) 2026 LBEILC。

《明日方舟》及莱茵生命相关名称、标志、设定、原 PV、音频采样等内容权利归各自权利人所有；本项目与原作官方无隶属关系。