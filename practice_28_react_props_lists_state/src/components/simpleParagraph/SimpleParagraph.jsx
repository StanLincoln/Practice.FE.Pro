import React from "react";
import styles from './SimpleParagraph.module.css'

export function SimpleParagraph( {textContent, clickHandler, currentTheme} ) {

// let theme = ''
// if(currentTheme) {
//   theme = currentTheme === 'light' ? 'lightTheme' : 'darkTheme';
// }


  const handleClick = () => {
    if (clickHandler) {
      clickHandler();
    }
  }

  return (
    <p className={currentTheme ? styles[`${currentTheme}Theme`] : ''} onClick={handleClick} >{textContent}</p>
  );
}