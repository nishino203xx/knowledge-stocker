import style from "./HeatmapLegend.module.scss";

export function HeatmapLegend() {
  return (
    <div className={style.heatmapLegend}>
      <span className={style.heatmapLegend__label}>Less</span>
      <div className={style.heatmapLegend__scales}>
        <span
          className={`${style.heatmapLegend__cell} ${style["heatmapLegend__cell--color-empty"]}`}
        ></span>
        <span
          className={`${style.heatmapLegend__cell} ${style["heatmapLegend__cell--color-scale-1"]}`}
        ></span>
        <span
          className={`${style.heatmapLegend__cell} ${style["heatmapLegend__cell--color-scale-2"]}`}
        ></span>
        <span
          className={`${style.heatmapLegend__cell} ${style["heatmapLegend__cell--color-scale-3"]}`}
        ></span>
        <span
          className={`${style.heatmapLegend__cell} ${style["heatmapLegend__cell--color-scale-4"]}`}
        ></span>
      </div>
      <span className={style.heatmapLegend__label}>More</span>
    </div>
  );
}
