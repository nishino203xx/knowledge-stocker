import { useEffect, useState } from "react";
import {
  UnderstandingStatusStorage,
  type UnderstandingStatusMap,
} from "../storage/understandingStatusStorage";
import type { UnderstandingStatus } from "../../articles/constants/understandingStatusMeta";
import { StudyLogStorage } from "../../studyLog/storage/studyLogStorage";
import { FirstTimeUnderstoodStorage } from "../../studyLog/storage/FirstTimeUnderstoodStorage";
import { getTodayKey } from "../../studyLog/utils/getTodayKey";

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

  const setStatus = (key: string, status: UnderstandingStatus) => {
    setMap((pre) => {
      const prevStatus = pre[key] ?? "unread";
      if (prevStatus === status) return pre;

      // 「理解した」に初めて変更した場合のみ、初回理解日を記録し、日別の学習カウントを増やす
      if (status === "understood" && !FirstTimeUnderstoodStorage.has(key)) {
        const today = getTodayKey();
        FirstTimeUnderstoodStorage.mark(key, today);
        StudyLogStorage.incrementToday();
      }
      return { ...pre, [key]: status };
    });
  };

  return { getStatus, setStatus };
};
