import { useEffect, useState, useContext } from "react";
import { formatDate } from "../utils/formatDate";
import getallUsers from "../utils/api-fetch-allUsers";
import { UserContext } from "./contexts/User-context";
import { deleteComment } from "../utils/api-delete-comment";

const SingleComment = ({ comment, updateComments }) => {
  const [authorInfo, setAuthorInfo] = useState(null);
  const { user } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    getallUsers().then((users) => {
      const matchingUser = users.find(
        (user) => user.username === comment.author
      );
      setAuthorInfo(matchingUser);
    });
  }, []);

  const handleDelete = () => {
    if (user.username === comment.author) {
      setIsDeleting(true);
      setDeleteError("");
      deleteComment(comment.comment_id)
        .then(() => {
          updateComments();
          setDeleteSuccess(true);
          setTimeout(() => {
            setDeleteSuccess(false);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          setDeleteError("Failed to delete. Please try again later.");
        })
        .finally(() => {
          setTimeout(() => {
            setDeleteSuccess(false);
            setIsDeleting(false);
          }, 3000);
        });
    }
  };

  return (
    <div className="single-comment">
      {authorInfo && authorInfo.avatar_url && (
        <div className="single-comment-header">
          <img src={authorInfo.avatar_url} className="avatar-img" />
          <p className="comment-info">
            By {comment.author} on {formatDate(comment.created_at)}
          </p>
          {user.username === comment.author && (
            <button
              className="comment-delete"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              Delete
            </button>
          )}
        </div>
      )}
      <p className="comment-body">{comment.body}</p>
      {isDeleting && <p>Deleting your comment...</p>}
      {deleteSuccess && <p>Comment deleted successfully!</p>}
      {deleteError && <p className="error">{deleteError}</p>}
    </div>
  );
};

export default SingleComment;
