import { LearningStreak } from "@/features/studyLog/components/LearningStreak";
import { Heatmap } from "../components/Heatmap";
import { InProgressArticles } from "../components/InProgressArticles/InProgressArticles";

export function HomePage() {
  return (
    <>
      <LearningStreak></LearningStreak>
      <InProgressArticles></InProgressArticles>
      <Heatmap></Heatmap>
    </>
  );
}
