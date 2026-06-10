import { useEffect, useState } from "react";
import {
  StoredArticleSummaryStorage,
  type StoredArticleSummaryMap,
} from "../storage/storedArticleSummaryStorage";

export const useStoredArticleSummaries = () => {
  const [summaries, setSummaries] = useState<StoredArticleSummaryMap>({});

  useEffect(() => {
    setSummaries(StoredArticleSummaryStorage.load());
  }, []);

  return { summaries };
};
