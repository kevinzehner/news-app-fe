import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api-fetch-articles";

const ArticlePreview = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articlesData) => setArticles(articlesData));
  }, []);

  const firstFive = articles.slice(0, 5);

  return (
    <ul className="articles-preview">
      {firstFive.map((article) => (
        <li className="single-article" key={article.id}>
          {article.title}
        </li>
      ))}
    </ul>
  );
};
export default ArticlePreview;
