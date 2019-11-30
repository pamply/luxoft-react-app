import React from "react";

export const Back = props => (
  <div>
    <button onClick={() => props.history.push("/coins")}>Go Back</button>
  </div>
);
