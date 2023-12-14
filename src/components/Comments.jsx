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
  const [postError, setPostError] = useState(false);
  const [postingComment, setPostingComment] = useState(false);
  const [inputError, setInputError] = useState(false);

  const updateComments = () => {
    fetchComments(article_id).then((commentsData) => {
      setComments(commentsData);
      setLoading(false);
    });
  };

  useEffect(() => {
    updateComments();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.body) {
      setInputError(true);
      return;
    }
    setPostingComment(true);
    postComment(article_id, input)
      .then((postedComment) => {
        setComments([postedComment, ...comments]);
        setInput({ ...input, body: "" });
        setPostingComment(false);
        setPostError(false);
      })
      .catch(() => {
        setPostError(true);
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
          <button type="submit" disabled={postingComment}>
            Add
          </button>
          {inputError && <p className="error">Please fill out the comment</p>}
          {postError && (
            <p className="error">
              Failed to post the comment. Please try again later.
            </p>
          )}
        </form>
      </div>
      {comments.map((comment) => (
        <SingleComment
          updateComments={updateComments}
          key={comment.comment_id}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default Comments;
