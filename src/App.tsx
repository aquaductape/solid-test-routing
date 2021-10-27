import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { Router, Routes, Route, NavLink, useIsRouting } from "solid-app-router";
import ArticlesData from "./pages/ArticlesData";
import ArticleData from "./pages/ArticleData";

const Home = lazy(() => import("./pages/Home"));
const Articles = lazy(() => import("./pages/Articles"));
const Article = lazy(() => import("./pages/Article"));

const App = () => {
  const isRouting = useIsRouting();
  return (
    <>
      <header>
        <h2>App</h2>
      </header>
      <nav>
        <NavLink href="/">Home</NavLink>
        {" | "}
        <NavLink href="/articles">Articles</NavLink>
        {}
      </nav>
      <Suspense fallback="Initial load...">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="articles" component={Articles} data={ArticlesData} />
          <Route
            path="articles/:id"
            component={Article}
            data={ArticleData}
          ></Route>
        </Routes>
      </Suspense>
      <div style="position: absolute; top: 0; left: 0; width: 100%; text-align: center; background: lightblue;">
        {isRouting() ? "Loading next route..." : null}
      </div>
    </>
  );
};

export default App;
