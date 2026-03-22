/**
 * 指定した日付が属する週の開始日(日曜日)を返す
 * @param date
 * @returns
 */
export const getStartOfWeek = (date: Date): Date => {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
};

/**
 * 指定した日付が属する週の終了日(土曜日)を返す
 * @param date
 * @returns
 */
export const getEndOfWeek = (date: Date): Date => {
  const d = new Date(date);
  d.setDate(d.getDate() + (6 - d.getDay()));
  return d;
};

/**
 * 指定した日付の月末日を返す
 * @param date
 * @returns
 */
export const getEndOfMonth = (date: Date): Date => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1, 0);
  return d;
};

/**
 * 指定した年数を加算または減算した日付を返す
 * @param date
 * @param years
 * @returns
 */
export const addYears = (date: Date, years: number): Date => {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + years);
  return d;
};
