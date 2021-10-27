import type { Article } from "./types";

export interface Document {
  id: unknown;
}

export class Repository<T extends Document> {
  private readonly _docs = new Map<T["id"], T>();

  constructor(...docs: T[]) {
    docs.forEach((doc) => {
      this._docs.set(doc.id, doc);
    });
  }
  public async getAll() {
    return Promise.resolve(this._docs.values());
  }
  public async getById(id: T["id"]) {
    if (!this._docs.has(id)) {
      throw new Error(`Document with id '${id}' is not in the db`);
    }
    return Promise.resolve(this._docs.get(id));
  }
}

export const articlesDb = new Repository<Article>(
  ...[...Array(100).keys()].map((i) => ({
    id: i.toString(),
    title: `Article ${i}`,
    author: "rturnq",
  }))
);
//   {
//     id: "1",
//     title: "Article One",
//     author: "rturnq"
//   },
//   {
//     id: "2",
//     title: "Article Two",
//     author: "johndoe"
//   }
// );
