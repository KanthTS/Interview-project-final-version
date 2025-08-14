import React from 'react';
import './Category.css';

function CoreCS() {
  const topics = [
    {
      title: "Operating Systems",
      description:
        "Managing hardware and software resources while providing services to applications."
    },
    {
      title: "Computer Networks",
      description:
        "Enabling communication between devices through protocols like TCP/IP and HTTP."
    },
    {
      title: "Database Systems",
      description:
        "Understanding relational and non-relational databases, indexing, and query processing."
    },
    {
      title: "Compiler Design",
      description:
        "Translating high-level code into machine code through lexical, syntax, and semantic analysis."
    },
    {
      title: "Algorithms",
      description:
        "Designing efficient solutions to computational problems, focusing on time and space complexity."
    }
  ];

  return (
    <div className="category-container">
      <h1 className="category-title">Core Computer Science</h1>
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

export default CoreCS;
