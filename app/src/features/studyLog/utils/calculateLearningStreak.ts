import type { DailyCountMap } from "../types/StudyLog";
import { getTodayKey } from "./getTodayKey";

/**
 * 学習継続日数を算出
 *
 * 今日から過去へ遡り、学習記録が存在する日数を連続で数える。
 * 学習記録が存在しない日が見つかった時点で集計を終了する。
 * @param logs 日付ごとの学習記事数
 * @returns 学習継続日数
 */
export const calculateLearningStreak = (logs: DailyCountMap): number => {
  let current = getTodayKey();
  let streak = 0;

  while (true) {
    if ((logs[current] ?? 0) === 0) {
      break;
    }

    streak++;
    const date = new Date(current);
    date.setDate(date.getDate() - 1);
    current = date.toISOString().slice(0, 10);
  }

  return streak;
};
