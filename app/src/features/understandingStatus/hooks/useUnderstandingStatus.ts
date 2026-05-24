import { useEffect, useState } from "react";
import {
  UnderstandingStatusStorage,
  type UnderstandingStatusMap,
} from "../storage/understandingStatusStorage";
import {
  UNDERSTANDING_STATUS,
  type UnderstandingStatus,
} from "../../articles/constants/understandingStatusMeta";
import { StudyLogStorage } from "../../studyLog/storage/studyLogStorage";
import { FirstTimeUnderstoodStorage } from "../../studyLog/storage/FirstTimeUnderstoodStorage";
import { getTodayKey } from "../../studyLog/utils/getTodayKey";
import { StoredArticleSummaryStorage } from "../storage/storedArticleSummaryStorage";
import type { Article } from "@/features/articles/types/article";
import type { StoredArticleSummary } from "../types/storedArticleSummary";

export const useUnderstandingStatus = () => {
  const [map, setMap] = useState<UnderstandingStatusMap>({});
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setMap(UnderstandingStatusStorage.load());
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;
    UnderstandingStatusStorage.save(map);
  }, [map, initialized]);

  const getStatus = (key: string) => {
    return map[key] ?? "unread";
  };

  const setStatus = (article: Article, status: UnderstandingStatus) => {
    setMap((prev) => {
      const prevStatus = prev[article.id] ?? UNDERSTANDING_STATUS.UNREAD;
      if (prevStatus === status) return prev;

      // 「理解した」に初めて変更した場合のみ、初回理解日を記録し、日別の学習カウントを増やす
      if (
        status === UNDERSTANDING_STATUS.UNDERSTOOD &&
        !FirstTimeUnderstoodStorage.has(article.id)
      ) {
        const today = getTodayKey();
        FirstTimeUnderstoodStorage.mark(article.id, today);
        StudyLogStorage.incrementToday();
      }

      // 「読書中」「要復習」の記事は、
      // ホーム画面の理解途中一覧表示用に記事情報を保存する
      if (
        status === UNDERSTANDING_STATUS.READING ||
        status === UNDERSTANDING_STATUS.NEEDREVIEW
      ) {
        const summary: StoredArticleSummary = {
          id: article.id,
          title: article.title,
          source: article.source,
          remoteId: article.remoteId,
          lastLearnedAt: new Date().toISOString(),
        };
        StoredArticleSummaryStorage.upsert(summary);
      } else {
        // 理解途中以外のステータスになった場合は一覧対象外とする
        StoredArticleSummaryStorage.remove(article.id);
      }

      return { ...prev, [article.id]: status };
    });
  };

  return { getStatus, setStatus };
};
