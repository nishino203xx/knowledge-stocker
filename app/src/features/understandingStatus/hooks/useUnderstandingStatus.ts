import { useEffect, useState } from "react";
import {
  UnderstandingStatusStorage,
  type UnderstandingStatusMap,
} from "../storage/understandingStatusStorage";
import type { UnderstandingStatus } from "../../articles/constants/understandingStatusMeta";
import { StudyLogStorage } from "../../studyLog/storage/studyLogStorage";

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
    setMap((pre) => ({ ...pre, [key]: status }));
    StudyLogStorage.incrementToday();
  };

  return { getStatus, setStatus };
};
