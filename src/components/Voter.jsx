import React, { useState } from "react";

import { ReactComponent as ArrowUp } from "../assets/svg/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../assets/svg/arrow-down.svg";

import "../styles/Voter.css";

const Voter = ({ votes, patchVotes }) => {
  const [voteChange, setVoteChange] = useState(0);
  const handleVote = (inc_votes) => {
    setVoteChange((currVote) => currVote + inc_votes);
    patchVotes(inc_votes).catch((err) => {
      setVoteChange((currVote) => currVote - inc_votes);
    });
  };

  return (
    <div className="voter">
      <button
        className="button vote-button"
        aria-label="vote-up"
        onClick={() => handleVote(+1)}
        disabled={voteChange === 1}
      >
        <ArrowUp />
      </button>
      <span className="info">{votes + voteChange} vote(s) </span>
      <button
        className="button vote-button"
        aria-label="vote-down"
        onClick={() => handleVote(-1)}
        disabled={voteChange === -1}
      >
        <ArrowDown />
      </button>
    </div>
  );
};

export default Voter;
