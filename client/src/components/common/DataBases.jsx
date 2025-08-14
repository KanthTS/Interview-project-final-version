import React from 'react';
import './Category.css';

function Databases() {
  const topics = [
    {
      title: "SQL Databases",
      description:
        "Relational databases like MySQL and PostgreSQL store data in structured tables with relationships."
    },
    {
      title: "NoSQL Databases",
      description:
        "NoSQL systems like MongoDB store unstructured or semi-structured data, offering flexibility."
    },
    {
      title: "Database Design",
      description:
        "Designing schemas to ensure data integrity, normalization, and efficient retrieval."
    },
    {
      title: "Indexes & Optimization",
      description:
        "Indexes speed up queries, but require careful balance to avoid slow writes."
    },
    {
      title: "Transactions & ACID",
      description:
        "Ensuring reliable operations with Atomicity, Consistency, Isolation, and Durability."
    }
  ];

  return (
    <div className="category-container">
      <h1 className="category-title">Databases</h1>
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

export default Databases;
