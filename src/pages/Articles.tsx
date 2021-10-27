import { For } from "solid-js";
import { Link, useData } from "solid-app-router";
import type { ArticlesData } from "./ArticlesData";

export default () => {
  const { articles } = useData<ArticlesData>();
  return (
    <main>
      <h1>Articles</h1>
      <ul>
        <For each={articles()}>
          {(article) => (
            <li>
              <Link href={article.id} noScroll>
                {article.title}
              </Link>
            </li>
          )}
        </For>
        <li>
          <Link href="999" noScroll>
            Article 999
          </Link>
        </li>
      </ul>
    </main>
  );
};
