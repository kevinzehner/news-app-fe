import { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";
import getallUsers from "../utils/api-fetch-allUsers";

const SingleComment = ({ comment }) => {
  const [authorInfo, setAuthorInfo] = useState(null);

  useEffect(() => {
    getallUsers().then((users) => {
      const matchingUser = users.find(
        (user) => user.username === comment.author
      );
      setAuthorInfo(matchingUser);
    });
  }, []);

  return (
    <div className="single-comment">
      {authorInfo && authorInfo.avatar_url && (
        <>
          <img src={authorInfo.avatar_url} className="avatar-img" />
          <p className="comment-info">
            By {comment.author} on {formatDate(comment.created_at)}
          </p>
        </>
      )}
      <p className="comment-body">{comment.body}</p>
    </div>
  );
};

export default SingleComment;
