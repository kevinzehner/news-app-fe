import PostArticle from "./PostArticle";
import AllArticles from "./AllArticles";

const Feed = () => {
  return (
    <section className="feed">
      <div className="inner-feed-container">
        <PostArticle />
      </div>
      <AllArticles />
    </section>
  );
};

export default Feed;
