import React, { useState } from "react";

import useApiCall from "../hooks/useApiCall";
import { getCommentsByReviewId, postNewComment } from "../utils/api";

import ApiLoading from "./ApiLoading";
import PostComment from "./PostComment";
import SingleComment from "./SingleComment";

import "../styles/Comments.css";

const ListComments = ({ review_id }) => {
  const {
    data: comments,
    isLoading,
    err,
  } = useApiCall(() => getCommentsByReviewId(review_id), [review_id], []);

  const [newlyPostedComment, setNewlyPostedComment] = useState(null);

  const noCommentFound = !newlyPostedComment && comments.length === 0;

  return (
    <ApiLoading isLoading={isLoading} err={err}>
      <div className="comments-wrapper">
        <h2>Comments: </h2>
        {noCommentFound && (
          <p>No comments for this review yet. Maybe you can post one?</p>
        )}
        {newlyPostedComment ? (
          <SingleComment comment={newlyPostedComment} />
        ) : (
          <PostComment
            setNewlyPostedComment={setNewlyPostedComment}
            postNewComment={postNewComment}
            review_id={review_id}
          />
        )}
        {comments.map((comment) => {
          return <SingleComment key={comment.comment_id} comment={comment} />;
        })}
      </div>
    </ApiLoading>
  );
};

export default ListComments;
