import { RouteDataFunc } from "solid-app-router";
import { createResource, Resource } from "solid-js";
import type { Article } from "../types";
import { delay } from "../utils";
import { articlesDb } from "../db";

export interface ArticlesData {
  articles: Resource<Article[]>;
}

const articleData: RouteDataFunc<ArticlesData> = () => {
  const [articles] = createResource(
    async () => {
      await delay(500);
      return [...(await articlesDb.getAll())];
    },
    { initialValue: [] }
  );

  return {
    articles,
  };
};

export default articleData;
