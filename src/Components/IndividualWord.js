import React from "react";

function IndividualWord(props) {
  const words = props.words;
  return (
    <div>
      {words.map((word) => (
        <textarea value={word} key={word} readOnly></textarea>
      ))}
    </div>
  );
}

export default IndividualWord;
