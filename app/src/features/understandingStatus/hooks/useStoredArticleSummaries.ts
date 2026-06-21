import { useState } from "react";
import {
  StoredArticleSummaryStorage,
  type StoredArticleSummaryMap,
} from "../storage/storedArticleSummaryStorage";

export const useStoredArticleSummaries = () => {
  const [summaries] = useState<StoredArticleSummaryMap>(() =>
    StoredArticleSummaryStorage.load(),
  );

  return { summaries };
};
