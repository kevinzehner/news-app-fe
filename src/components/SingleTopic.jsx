import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api-fetch-articles-topic";

const SingleTopic = () => {
  const { topicSlug } = useParams();
  const [articles, setArticles] = useState([]);

  const truncateArticle = (articleBody) => {
    if (articleBody.length > 150) {
      return articleBody.slice(0, 150) + "...";
    }
    return articleBody;
  };

  useEffect(() => {
    getArticlesByTopic(topicSlug)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, [topicSlug]);

  return (
    <div>
      <h2>Articles for {topicSlug}</h2>
      <ul className="topic-articles">
        {articles.map((article) => (
          <li className="topic-preview-container" key={article.article_id}>
            <div className="single-article">
              <h3 className="preview-title">{article.title}</h3>
              <div className="article-top-container">
                <p className="article-info">Topic: {article.topic}</p>
                <p className="article-info">by {article.author}</p>
              </div>
              <p className="article-info">{truncateArticle(article.body)}</p>
              <img
                className="preview-img"
                src={article.article_img_url}
                alt={article.title}
              />
              <div className="lower-article-container">
                <div className="comment-container">
                  <p className="article-info">{article.comment_count}</p>
                  <Link to={`/full-article/${article.article_id}`}>
                    {/* Add your SVG icon here */}
                  </Link>
                </div>
                <div className="votes-container">
                  <p className="article-info">{article.votes} Votes</p>
                </div>
                <Link to={`/full-article/${article.article_id}`}>
                  <button className="btn">Read Full Article</button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleTopic;
