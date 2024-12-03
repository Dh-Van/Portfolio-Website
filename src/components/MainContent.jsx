import React from 'react';
import './MainContent.css';
import FlippingWord from './FlippingWord';

function MainContent() {
  const words = ['Developer', 'Engineer', 'Student', 'Designer'];

  return (
    <div className="main-content">
      <div className="main-content-inner">
        <h1>Hello, I'm <span className="accent">Dhvan</span></h1>
        <h2>I'm a <FlippingWord words={words} /></h2>
        <button className="accent-button">View My Projects</button>
      </div>
    </div>
  );
}

export default MainContent;