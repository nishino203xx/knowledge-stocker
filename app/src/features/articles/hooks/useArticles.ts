import { mockArticles } from "../mocks/mockArticles";

export function useArticles() {
  return { articles: mockArticles };
}
