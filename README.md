# SEOmate Blog Template

SEO最適化されたAstroベースのブログテンプレートです。

## 機能

- Astro 4.x による高速な静的サイト生成
- Markdown/MDX によるコンテンツ管理
- SEO最適化（メタタグ、サイトマップ自動生成）
- レスポンシブデザイン
- TypeScript対応

## 構造

```
├── src/
│   ├── content/
│   │   ├── config.ts       # コンテンツ定義
│   │   └── posts/          # ブログ記事（Markdown）
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   └── pages/
│       ├── index.astro
│       └── posts/
│           ├── index.astro
│           └── [...slug].astro
├── public/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 使い方

### 開発

```bash
npm install
npm run dev
```

### ビルド

```bash
npm run build
```

### 記事の追加

`src/content/posts/` に Markdown ファイルを追加してください。

```markdown
---
title: '記事タイトル'
description: '記事の説明'
pubDate: 2024-01-01
tags: ['タグ1', 'タグ2']
---

記事の内容...
```

## ライセンス

MIT
