import { StudyLogStorage } from "../storage/studyLogStorage";
import { calculateLearningStreak } from "../utils/calculateLearningStreak";
import style from "./LearningStreak.module.scss";

/**
 * 学習継続日数を表示するコンポーネント
 */
export const LearningStreak = () => {
  const logs = StudyLogStorage.load();
  const streak = calculateLearningStreak(logs);
  return (
    <fieldset className={style.LearningStreak}>
      <legend className={style.LearningStreak__title}>学習継続日数</legend>
      <p className={style.LearningStreak__value}>
        <span className={style.LearningStreak__count}>{streak}</span>
        <span>日</span>
      </p>
    </fieldset>
  );
};
