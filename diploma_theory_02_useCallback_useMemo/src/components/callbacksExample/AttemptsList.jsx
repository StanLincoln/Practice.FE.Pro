import React, {memo} from "react";

const AttemptsList = ({ attempts, dropAttempt }) => {
  console.log('Render Attempts');
    return attempts.map((item) => {
      return <div key={item.id} onClick={ () => dropAttempt(item.id) }>{`${item.attemptData} ${item.id}`}</div>;
    });
  };

  export default memo(AttemptsList);