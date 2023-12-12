import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../utils/api-fetch-single-article";
import { Link } from "react-router-dom";

const FullArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSingleArticle(article_id).then((articleData) => {
      setArticle(articleData);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Link to="/">
        <button className="home-button">Back to Home</button>
      </Link>
      <div className="single-article">
        <div className="article-header">
          <p className="article-info">{article.topic}</p>
          <p>by {article.author}</p>
          <p className="article-info"> {article.created_at}</p>
        </div>
        <h3>{article.title}</h3>
        <p className="article-body">{article.body}</p>
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
          <p className="article-info">{article.votes}</p>
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
      <section class="article-comments">
        <h3>comments</h3>
      </section>
    </section>
  );
};

export default FullArticle;
