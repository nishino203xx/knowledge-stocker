import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../../../styles/heatmap-lib.scss";
import styles from "./Heatmap.module.scss";
import { useStudyLog } from "../../studyLog/hooks/useStudyLog";
import { HeatmapLegend } from "./HeatmapLegend";
import {
  getStartOfWeek,
  getEndOfWeek,
  getEndOfMonth,
  addYears,
} from "../../../utils/dateUtils";

export function Heatmap() {
  const { dailyCountMap } = useStudyLog();
  const heatmapValues = Object.entries(dailyCountMap).map(([date, count]) => ({
    date,
    count,
  }));

  // ヒートマップ表示期間：直近一年分を週単位(日曜始まり、土曜終わり)で表示
  const today = new Date();
  const endDate = getEndOfWeek(getEndOfMonth(today));
  const startDate = getStartOfWeek(addYears(endDate, -1));

  // ヒートマップはデータが存在する日付のみ value が渡されるため、
  // 未学習日(データなし)でも日付を表示できるように、
  // 表示期間内の全日付を生成する
  const allDates = [];
  const current = new Date(startDate);
  while (current <= endDate) {
    const dateStr = current.toISOString().slice(0, 10);
    const heatmapValue = heatmapValues.find((v) => v.date === dateStr);

    allDates.push({
      date: dateStr,
      count: heatmapValue ? heatmapValue.count : 0,
    });
    current.setDate(current.getDate() + 1);
  }
  return (
    <div className={`${styles["heatmap__section"]}`}>
      <div className={`${styles["heatmap__content"]}`}>
        <div className={`${styles["heatmap__main"]}`}>
          {/*
             react-calendar-heatmap には曜日ラベル表示機能があるが、
             余計な余白が入りレイアウトが崩れる問題があるため自前で実装している
             */}
          <div className={`${styles["heatmap__weekday-labels"]}`}>
            <span></span>
            <span className={`${styles["heatmap__weekday-label"]}`}>Mon</span>
            <span></span>
            <span className={`${styles["heatmap__weekday-label"]}`}>Wed</span>
            <span></span>
            <span className={`${styles["heatmap__weekday-label"]}`}>Fri</span>
            <span></span>
          </div>
          <div className={`${styles["heatmap__scroll-container"]}`}>
            <CalendarHeatmap
              startDate={startDate}
              endDate={endDate}
              showOutOfRangeDays
              values={allDates}
              classForValue={(value) => {
                if (!value) return "color-empty";
                if (value.count >= 10) return "color-scale-4";
                if (value.count >= 5) return "color-scale-3";
                if (value.count >= 2) return "color-scale-2";
                if (value.count >= 1) return "color-scale-1";
                return "color-empty";
              }}
              titleForValue={(value) => {
                if (!value) return "";
                if (value.count === 0) return `${value.date}\n未学習`;
                return `${value.date}\n理解記事数：${value.count}`;
              }}
            />
          </div>
        </div>
        <HeatmapLegend></HeatmapLegend>
      </div>
    </div>
  );
}
