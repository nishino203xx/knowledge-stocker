# knowledge-stocker

## 概要

技術記事を収集・閲覧するための学習用 Web アプリです。

## 公開 URL

GitHub Pages で公開予定

## 主な機能

API を利用した記事一覧取得
キーワード検索
記事詳細の Markdown 表示

## 使用技術

- React 19
- TypeScript
- Vite
- Axios
- React Router
- react-markdown / remark-gfm

## ディレクト構成

```text
src
├── App.tsx / App.css
├── main.tsx
├── index.css
├── assets/
├── api/
│   └── mapQiitaToArticle.ts # Qiita のレスポンスをアプリ共通 Article 型へ変換
├── types/                   # アプリ全体で共通利用する型定義
└── features/
    ├── home/
    │   └── pages/           # Home 画面
    └── articles/
        ├── pages/           # 記事一覧/詳細など「ページ」単位のコンポーネント
        ├── components/      # UI コンポーネント
        ├── hooks/           # カスタム Hooks
        ├── types/           # 型定義
        └── mocks/           # モックデータ（UI確認・テスト用）
```

## TODO

- 検索機能の充実化（検索条件の保持、検索項目の追加）
- 記事ごとに自分用メモを保存
- お気に入り機能
