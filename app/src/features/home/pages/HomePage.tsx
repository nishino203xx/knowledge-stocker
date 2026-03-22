import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../../../styles/heatmap-lib.scss";
import styles from "../components/Heatmap.module.scss";
import { useStudyLog } from "../../studyLog/hooks/useStudyLog";
import { HeatmapLegend } from "../components/HeatmapLegend";

export function HomePage() {
  const { dailyCountMap } = useStudyLog();
  const heatmapValues = Object.entries(dailyCountMap).map(([date, count]) => ({
    date,
    count,
  }));

  return (
    <>
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
                startDate={new Date("2025-12-28")}
                endDate={new Date("2026-12-31")}
                showOutOfRangeDays
                values={heatmapValues}
                classForValue={(value) => {
                  if (!value) return "color-empty";
                  if (value.count >= 10) return "color-scale-4";
                  if (value.count >= 5) return "color-scale-3";
                  if (value.count >= 2) return "color-scale-2";
                  if (value.count >= 1) return "color-scale-1";
                  return "color-empty";
                }}
                titleForValue={(value) => {
                  if (!value) return "未学習";
                  return `${value.date}\n理解記事数：${value.count}`;
                }}
              />
            </div>
          </div>
          <HeatmapLegend></HeatmapLegend>
        </div>
      </div>
    </>
  );
}
