import PostArticle from "./PostArticle";

const Feed = () => {
  return (
    <div className="feed">
      <PostArticle />
      <ul className="articles-preview">
        <li>Article</li>
        <li>Article</li>
        <li>Article</li>
        <li>Article</li>
      </ul>
    </div>
  );
};

export default Feed;
