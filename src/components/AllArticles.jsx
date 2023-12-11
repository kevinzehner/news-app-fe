import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api-fetch-articles";
import { Link } from "react-router-dom";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articlesData) => setArticles(articlesData));
  }, []);

  return (
    <div>
      <h2>All Articles</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
      <ul>
        {articles.map((article) => (
          <li className="single-article" key={article.id}>
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllArticles;
