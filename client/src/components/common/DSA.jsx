import React from 'react';
import './Category.css';

function DSA() {
  const topics = [
    {
      title: "Arrays",
      description:
        "Arrays are linear data structures that store elements in contiguous memory locations, allowing constant-time access to elements by index."
    },
    {
      title: "Linked Lists",
      description:
        "A linked list is a sequence of nodes where each node contains data and a reference to the next node, making insertion and deletion efficient."
    },
    {
      title: "Stacks & Queues",
      description:
        "Stacks follow LIFO (Last In First Out) while queues follow FIFO (First In First Out), both widely used for managing data flow."
    },
    {
      title: "Trees & Graphs",
      description:
        "Trees represent hierarchical data while graphs model relationships between entities, forming the backbone of many algorithms."
    },
    {
      title: "Sorting & Searching",
      description:
        "Efficient sorting and searching algorithms are fundamental for optimizing performance in software applications."
    }
  ];

  return (
    <div className="category-container">
      <h1 className="category-title">DSA (Data Structures & Algorithms)</h1>
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

export default DSA;
