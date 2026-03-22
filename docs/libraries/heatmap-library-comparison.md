# ヒートマップ表示ライブラリの比較

## 概要

学習ログを可視化するために、Githubの貢献度カレンダーのようなヒートマップを実装する。
そのために以下のライブラリを比較検討した。

- react-github-calendar
- react-calendar-heatmap
- cal-heatmap

# react-github-calendar

## 概要

GitHubの貢献度データを表示するReactコンポーネント。

## メリット

- 導入が簡単

## デメリット

- 独自データを扱えない
- カスタマイズ性が低い

## 採用可否

不採用

### 理由

本アプリでは学習ログの可視化を目的としているため、独自データをヒートマップ表示できない本ライブラリでは要件を満たさない。

# react-calendar-heatmap

## 概要

GitHubの貢献度カレンダー風のヒートマップを表示するReactコンポーネント。

日付と値を渡すことでヒートマップの描画ができる。

## メリット

- Reactコンポーネントとして提供されているため、簡単に利用できる
- GitHub風カレンダーの実装に適している

## デメリット

- デザインの調整はCSSで行う必要あり
- カスタマイズ性が低い

## 実装例

```tsx
<CalendarHeatmap
  startDate={new Date("2025-12-28")}
  endDate={new Date("2026-12-31")}
  showOutOfRangeDays
  values={[
    { date: "2026-01-01", count: 1 },
    { date: "2026-01-04", count: 3 },
    { date: "2026-01-05", count: 7 },
    { date: "2026-01-06", count: 15 },
    // ...
  ]}
  classForValue={(value) => {
    if (!value) return "color-empty";
    if (value.count >= 10) return "color-scale-4";
    if (value.count >= 5) return "color-scale-3";
    if (value.count >= 2) return "color-scale-2";
    if (value.count >= 1) return "color-scale-1";

    return "color-empty";
  }}
/>
```

## 採用可否

採用

### 理由

- Reactとの相性が良い
- 実装コストが低い

# cal-heatmap

## 概要

カスタマイズ性が高いヒートマップライブラリ。

## メリット

- カスタマイズ性が高い
- ツールチップやイベント処理が提供されている

## デメリット

- 非同期で行われる描画の管理が必要。（適切に管理されていないと、複数描画されたり何も描画されなかったりする）
- 型宣言ファイルはまだ作業途中で将来変更される可能性がある（公式ドキュメントに記載あり）

## 実装例

```tsx
const cal = new CalHeatmap();

await cal.paint({
  itemSelector: "#heatmap",
  range: 12,
  domain: { type: "month" },
  subDomain: { type: "day" },
});
```

## 採用可否

不採用

### 理由

- Reactの書き方だけでは完結しにくい
- 本アプリでは複雑なカスタマイズは予定していない（必要に応じでライブラリ乗り換え or 自前実装を検討する）
