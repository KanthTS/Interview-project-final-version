import React from 'react';
import './Category.css';

function Backend() {
  const topics = [
    {
      title: "Node.js / Express",
      description:
        "Node.js is a JavaScript runtime that enables backend development, and Express is a minimal framework for building APIs and web apps."
    },
    {
      title: "Spring Boot",
      description:
        "Spring Boot is a Java-based framework that simplifies backend development by providing auto-configuration and a wide ecosystem."
    },
    {
      title: "Django / Flask",
      description:
        "Django is a high-level Python framework for rapid development, while Flask offers lightweight and flexible backend development."
    },
    {
      title: "REST & GraphQL APIs",
      description:
        "APIs allow communication between systems, with REST being widely used and GraphQL offering more flexible queries."
    },
    {
      title: "Authentication & Authorization",
      description:
        "Securing applications by verifying users (authentication) and controlling access to resources (authorization) is crucial in backend systems."
    }
  ];

  return (
    <div className="category-container">
      <h1 className="category-title">Backend Development</h1>
      <div className="topic-list">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Backend;
