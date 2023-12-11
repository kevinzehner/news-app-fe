import PostArticle from "./PostArticle";
import ArticlePreview from "./Article-preview";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <section className="feed">
      <div className="inner-feed-container">
        <PostArticle />
        <Link to="/all-articles">
          <button>view all articles</button>
        </Link>
      </div>
      <h2>Popular articles</h2>
      <ArticlePreview />
    </section>
  );
};

export default Feed;
