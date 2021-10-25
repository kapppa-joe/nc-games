import React from "react";
import { patchCommentVotes } from "../utils/api";
import DisplayDatetime from "./DisplayDatetime";
import Voter from "./Voter";

const SingleComment = ({ comment, disableVote }) => {
  const patchVotes = (inc_votes) => {
    return patchCommentVotes(comment_id, inc_votes);
  };

  const { comment_id, author, votes, created_at, body } = comment;
  return (
    <div className="comment">
      <p>
        posted by: <span className="info">{author}</span>,{" "}
        <DisplayDatetime value={created_at} />
      </p>
      <p className="comment-body">{body}</p>
      <Voter votes={votes} patchVotes={patchVotes} disableVote={disableVote} />
    </div>
  );
};

export default SingleComment;
