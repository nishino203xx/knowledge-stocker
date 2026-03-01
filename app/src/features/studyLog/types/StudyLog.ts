/** 日別カウント */
export type DailyCountMap = Record<string, number>; // YYYY-MM-DD: 回数

/** 記事毎の理解した日付 */
export type FirstTimeUnderstoodMap = Record<string, string>; // 記事ID: YYYY-MM-DD
