import React from 'react';
import './Category.css';

function Software() {
  const topics = [
    {
      title: "SDLC Models",
      description:
        "Software Development Life Cycle models like Waterfall, Agile, and Spiral define project workflows."
    },
    {
      title: "Agile & Scrum",
      description:
        "Agile promotes iterative development, with Scrum organizing work into sprints."
    },
    {
      title: "Design Patterns",
      description:
        "Reusable solutions to common problems, like Singleton, Factory, and Observer."
    },
    {
      title: "Testing & QA",
      description:
        "Ensuring software quality through unit, integration, and end-to-end testing."
    },
    {
      title: "Version Control",
      description:
        "Tracking changes to code using Git and collaborating via platforms like GitHub."
    }
  ];

  return (
    <div className="category-container">
      <h1 className="category-title">Software Engineering</h1>
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

export default Software;
