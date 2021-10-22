import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const PostComment = ({ setNewlyPostedComment, postNewComment, review_id }) => {
  const [commentBody, setCommentBody] = useState("");
  const { user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    setNewlyPostedComment({
      author: user.username,
      body: commentBody,
      votes: 0,
      created_at: new Date().toISOString(),
    });

    postNewComment(review_id, user.username, commentBody)
      .then(() => {
        setCommentBody("");
      })
      .catch((err) => {
        console.dir(err);
        setNewlyPostedComment(null);
        // tell user some error happened
      });
  };

  if (!user) {
    return (
      <div class="msgbox" id="prompt-login">
        <p>
          <Link to="/login">Login</Link> to leave your comment
        </p>
      </div>
    );
  } else {
    return (
      <form id="post-comment-form" onSubmit={handleSubmit}>
        <textarea
          className="text-input input-comment"
          name="comment body"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          placeholder="leave your comments"
          minLength="20"
          rows="3"
          required
        />
        <button type="submit" className="button primary">
          Submit
        </button>
        <button
          type="reset"
          className="button"
          onClick={() => setCommentBody("")}
        >
          Discard
        </button>
      </form>
    );
  }
};

export default PostComment;
