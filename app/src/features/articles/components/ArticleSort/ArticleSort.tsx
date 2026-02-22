import {
  SORT_META,
  SORT_ORDER_META,
  type SortKey,
  type SortOrder,
} from "../../constants/sort";

export function ArticleSort({
  sort,
  sortOrder,
  onChangeSort,
  onChangeSortOrder,
}: {
  sort: string;
  sortOrder: string;
  onChangeSort: (sort: SortKey) => void;
  onChangeSortOrder: (sortOrder: SortOrder) => void;
}) {
  return (
    <div>
      <select
        value={sort}
        onChange={(e) => onChangeSort(e.target.value as SortKey)}
      >
        {Object.entries(SORT_META).map(([key, meta]) => (
          <option value={key}>{meta.label}</option>
        ))}
      </select>
      <select
        value={sortOrder}
        onChange={(e) => onChangeSortOrder(e.target.value as SortOrder)}
      >
        {Object.entries(SORT_ORDER_META).map(([key, meta]) => (
          <option value={key}>{meta.label}</option>
        ))}
      </select>
    </div>
  );
}
