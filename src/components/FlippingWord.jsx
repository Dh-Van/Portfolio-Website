import React, { useState, useEffect, useRef } from 'react';
import './FlippingWord.css';

function FlippingWord({ words }) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const containerRef = useRef(null);

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

  useEffect(() => {
    if (containerRef.current) {
      const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b));
      containerRef.current.style.width = `${longestWord.length}ch`;
    }
  }, [words]);

  return (
    <div className="flipping-word-box">
      <span ref={containerRef} className="flipping-word-container">
        <span className={`accent flipping-word ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
          {currentWord}
        </span>
      </span>
    </div>
  );
}

export default FlippingWord;