import { useState, useEffect } from "react";
import { fetchComments } from "../utils/api-fetch-comments";
import SingleComment from "./SingleComment";
import { postComment } from "../utils/api-post-comment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({
    username: "grumpy19",
    body: "",
  });

  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    fetchComments(article_id).then((commentsData) => {
      setComments(commentsData);
      setLoading(false);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.body) {
      setInputError(true);
      return;
    }
    postComment(article_id, input).then((postedComment) => {
      setComments([postedComment, ...comments]);
      setInput({ ...input, body: "" });
    });
  };

  const handleInput = (event) => {
    setInput({ ...input, body: event.target.value });
  };

  if (loading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div className="comments-container">
      <div className="comments-header">
        <h3>comments</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input.body}
            onChange={handleInput}
            placeholder="Add a new comment"
          />
          <button type="submit">Add</button>
          {inputError && (
            <p className="comment-error">Please fill out the comment</p>
          )}
        </form>
      </div>
      {comments.map((comment) => (
        <SingleComment key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
