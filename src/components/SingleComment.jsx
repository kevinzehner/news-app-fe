import { formatDate } from "../utils/formatDate";

const SingleComment = ({ comment }) => (
  <div className="single-comment">
    <p className="comment-info">
      By {comment.author} on {formatDate(comment.created_at)}
    </p>
    <p className="comment-body">{comment.body}</p>
  </div>
);

export default SingleComment;
