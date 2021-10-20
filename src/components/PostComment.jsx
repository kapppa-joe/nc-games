import React, { useState } from "react";
import useUser from "../hooks/useUser";

const PostComment = ({ setNewlyPostedComment, postNewComment, review_id }) => {
  const [commentBody, setCommentBody] = useState("");
  const { user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    setNewlyPostedComment({
      author: user,
      body: commentBody,
      votes: 0,
      created_at: new Date().toISOString(),
    });
    setCommentBody("");
    postNewComment(review_id, user, commentBody).catch((err) => {
      console.dir(err);
      setNewlyPostedComment(null);
      // tell user some error happened
    });
  };

  if (!user) {
    return <div id="prompt-login">Login or sign up to leave your comment</div>;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          name="comment body"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          placeholder="leave your comments"
          minLength="20"
          required
        />
        <button type="reset" className="button">
          Discard
        </button>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    );
  }
};

export default PostComment;
