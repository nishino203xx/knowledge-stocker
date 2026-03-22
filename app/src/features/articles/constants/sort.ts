export const SORT_META = {
  createAt: { label: "投稿日時" },
};
export type SortKey = keyof typeof SORT_META;

export const SORT_ORDER_META = {
  asc: { label: "昇順" },
  desc: { label: "降順" },
};
export type SortOrder = keyof typeof SORT_ORDER_META;
