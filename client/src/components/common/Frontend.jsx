import React from 'react';
import './Category.css';

function Frontend() {

  
  const topics = [
    {
      title: "HTML, CSS, JavaScript",
      description:
        "The foundation of the web: HTML structures content, CSS styles it, and JavaScript adds interactivity."
    },
    {
      title: "React.js / Angular / Vue",
      description:
        "Modern frameworks and libraries for building fast, maintainable, and scalable frontends."
    },
    {
      title: "State Management",
      description:
        "Tools like Redux, Zustand, or Vuex manage complex application state efficiently."
    },
    {
      title: "Responsive Design",
      description:
        "Ensuring layouts adapt to various screen sizes using CSS media queries and flexible grids."
    },
    {
      title: "Performance Optimization",
      description:
        "Reducing load times with code splitting, caching, and optimized assets for better user experience."
    }
  ];

  return (
    <div className="category-container">
      <h1 className="category-title">Frontend Engineering</h1>
      <div className="topic-list">
        {topics.map((topic, i) => (
          <div key={i} className="topic-card">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frontend;
