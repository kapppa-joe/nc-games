import React from "react";
import { patchCommentVotes } from "../utils/api";
import DisplayDatetime from "./DisplayDatetime";
import Voter from "./Voter";

const SingleComment = ({ comment }) => {
  const patchVotes = (inc_votes) => {
    return patchCommentVotes(comment_id, inc_votes);
  };

  const { comment_id, author, votes, created_at, body } = comment;
  return (
    <div>
      <p>author: {author}</p>
      <Voter votes={votes} patchVotes={patchVotes} />
      <p>
        created_at: <DisplayDatetime value={created_at} />
      </p>
      <p>body: {body}</p>
    </div>
  );
};

export default SingleComment;
