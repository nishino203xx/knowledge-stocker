export const UNDERSTANDING_STATUS = {
  UNREAD: "unread",
  READING: "reading",
  UNDERSTOOD: "understood",
  NEEDREVIEW: "needReview",
  MASTERED: "mastered",
} as const;

export type UnderstandingStatus =
  (typeof UNDERSTANDING_STATUS)[keyof typeof UNDERSTANDING_STATUS];

export type understandingStatusColor =
  | "gray"
  | "blue"
  | "green"
  | "orange"
  | "purple";

export const UNDERSTANDING_STATUS_META = {
  unread: { label: "未読", color: "gray" },
  reading: { label: "読書中", color: "blue" },
  understood: { label: "理解した", color: "green" },
  needReview: { label: "要復習", color: "orange" },
  mastered: { label: "定着", color: "purple" },
} satisfies Record<
  UnderstandingStatus,
  { label: string; color: understandingStatusColor }
>;
