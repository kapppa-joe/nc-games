import React, { useState } from "react";

const Voter = ({ votes, patchVotes }) => {
  const [voteChange, setVoteChange] = useState(0);
  const handleVote = (inc_votes) => {
    setVoteChange((currVote) => currVote + inc_votes);
    patchVotes(inc_votes).catch((err) => {
      console.log(err);
      setVoteChange((currVote) => currVote - inc_votes);
    });
  };

  return (
    <div>
      <span className="info">{votes + voteChange}</span> vote(s)
      <button onClick={() => handleVote(+1)} disabled={voteChange === 1}>
        +
      </button>
      <button onClick={() => handleVote(-1)} disabled={voteChange === -1}>
        -
      </button>
    </div>
  );
};

export default Voter;
