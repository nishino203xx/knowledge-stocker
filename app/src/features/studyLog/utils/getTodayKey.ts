/**
 * 現在日付をYYYY-MM-DD形式で取得
 * @returns
 */
export const getTodayKey = () => new Date().toISOString().slice(0, 10);
