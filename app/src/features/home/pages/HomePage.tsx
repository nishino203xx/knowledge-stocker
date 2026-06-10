import { Heatmap } from "../components/Heatmap";
import { InProgressArticles } from "../components/InProgressArticles/InProgressArticles";

export function HomePage() {
  return (
    <>
      <InProgressArticles></InProgressArticles>
      <Heatmap></Heatmap>
    </>
  );
}
