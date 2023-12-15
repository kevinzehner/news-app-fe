import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../utils/api-fetch-single-article";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import { formatDate } from "../utils/formatDate";
import { voteArticle } from "../utils/api-patch-votes";

const FullArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);

  useEffect(() => {
    fetchSingleArticle(article_id).then((articleData) => {
      setArticle(articleData);
      setLoading(false);
      setVoteCount(articleData.votes);
    });
  }, []);

  const handleUpvote = () => {
    setVoteCount((prevVote) => prevVote + 1);

    voteArticle(article_id, 1).then((updatedArticle) => {
      setArticle(updatedArticle);
    });
  };
  const handleDownvote = () => {
    setVoteCount((prevVote) => prevVote - 1);

    voteArticle(article_id, -1).then((updatedArticle) => {
      setArticle(updatedArticle);
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="full-article-container">
      <div className="single-article">
        <div className="article-header">
          <p className="article-info">{article.topic}</p>
          <p>by {article.author}</p>
          <p className="article-info"> {formatDate(article.created_at)}</p>
        </div>
        <h3>{article.title}</h3>
        <p className="article-body">{article.body}</p>
        <img src={article.article_img_url} />
        <div className="votes-container">
          <button onClick={handleUpvote}>
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
          </button>
          <p className="article-info">{voteCount}</p>
          <button onClick={handleDownvote}>
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
          </button>
        </div>
      </div>
      <section className="article-comments">
        <Comments article_id={article_id} />
      </section>
    </section>
  );
};

export default FullArticle;
