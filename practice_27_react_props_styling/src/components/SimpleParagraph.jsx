import React from "react";

export function SimpleParagraph({textContent, clickHandler, textStyle}) {
  
  return (
    <p style={textStyle} onClick={clickHandler}>{textContent}</p>
  );
}