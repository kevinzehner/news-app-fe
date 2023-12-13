import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api-fetch-articles";
import SingleArticlePreview from "./SingleArticlePreview";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((articlesData) => {
      setArticles(articlesData);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading...</p>;

  return (
    <section className="article-preview-container">
      <h2>Articles</h2>
      {articles.map((article) => {
        return <SingleArticlePreview key={article.title} article={article} />;
      })}
    </section>
  );
};
export default AllArticles;
