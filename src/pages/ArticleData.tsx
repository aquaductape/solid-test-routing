import { RouteDataFunc } from "solid-app-router";
import { createResource, Resource } from "solid-js";
import type { Article } from "../types";
import { delay } from "../utils";
import { articlesDb } from "../db";

export interface ArticleData {
  article: Resource<Article | undefined>;
}

const articleData: RouteDataFunc<ArticleData> = ({ params }) => {
  const [article] = createResource(
    () => params.id,
    async (id) => {
      await delay(500);
      return await articlesDb.getById(id);
    }
  );

  return {
    article,
  };
};

export default articleData;
