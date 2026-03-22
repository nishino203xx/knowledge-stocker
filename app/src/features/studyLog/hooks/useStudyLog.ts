import { useState } from "react";
import { StudyLogStorage } from "../storage/studyLogStorage";
import type { DailyCountMap } from "../types/StudyLog";

export const useStudyLog = () => {
  const [dailyCountMap] = useState<DailyCountMap>(StudyLogStorage.load());

  return { dailyCountMap };
};
