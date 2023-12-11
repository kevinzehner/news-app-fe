import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api-fetch-articles";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articlesData) => setArticles(articlesData));
  }, []);

  const truncateArticle = (article) => {
    if (article.length > 150) {
      return article.slice(0, 150) + "...";
    }
  };

  return (
    <section className="article-preview-container">
      <h2>Articles</h2>
      {articles.map((article) => (
        <div className="single-article" key={article.id}>
          <h3>{article.title}</h3>
          <div className="article-top-container">
            <p className="article-info">Topic: {article.topic}</p>
            <p className="article-info">Author: {article.author}</p>
            <p className="article-info">Created at: {article.created_at}</p>
          </div>
          <p className="article-info"> {truncateArticle(article.body)}</p>
          <div className="lower-article-container">
            <p className="article-info">Comments: {article.comment_count}</p>
            <div className="votes-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6"
                style={{ width: "20px", height: "20px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                />
              </svg>
              <p className="article-info">votes {article.votes}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6"
                style={{ width: "20px", height: "20px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default AllArticles;
