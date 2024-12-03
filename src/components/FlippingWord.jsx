
import React, { useState, useEffect } from 'react';
import './FlippingWord.css';

function FlippingWord({ words }) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentWord(prevWord => {
          const currentIndex = words.indexOf(prevWord);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setIsFadingOut(false);
      }, 500); // Change word in the middle of the 1s fade animation
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [words]);

  return (
    <span className={`accent flipping-word ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
      {currentWord}
    </span>
  );
}

export default FlippingWord;