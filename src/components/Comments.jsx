import { useState, useEffect } from "react";
import { fetchComments } from "../utils/api-fetch-comments";
import SingleComment from "./SingleComment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id).then((commentsData) => {
      setComments(commentsData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div className="comments-container">
      <div className="comments-header">
        <h3>comments</h3>
        <form>
          <input></input>
          <button>add a new comment</button>
        </form>
      </div>
      {comments.map((comment) => (
        <SingleComment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
