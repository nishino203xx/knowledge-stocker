import {
  UNDERSTANDING_STATUS_META,
  type UnderstandingStatus,
} from "../../constants/understandingStatusMeta";
import style from "./UnderstandingStatusBadge.module.scss";

export const UnderstandingStatusBadge = ({
  status,
}: {
  status: UnderstandingStatus;
}) => {
  const meta = UNDERSTANDING_STATUS_META[status];
  return (
    <span
      className={style.understandingStatus}
      style={{ "--status-color": meta.color } as React.CSSProperties}
    >
      {meta.label}
    </span>
  );
};
