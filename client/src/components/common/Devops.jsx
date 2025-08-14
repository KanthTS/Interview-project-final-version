import React from 'react';
import './Category.css';

function Devops() {
  const topics = [
    {
      title: "CI/CD Pipelines",
      description:
        "Automating build, test, and deployment to deliver code faster and more reliably."
    },
    {
      title: "Docker & Kubernetes",
      description:
        "Docker packages applications in containers; Kubernetes orchestrates container deployment."
    },
    {
      title: "Cloud Platforms",
      description:
        "AWS, Azure, and GCP offer scalable infrastructure and managed services for DevOps workflows."
    },
    {
      title: "Monitoring & Logging",
      description:
        "Tools like Prometheus, Grafana, and ELK stack track performance and troubleshoot issues."
    },
    {
      title: "Infrastructure as Code",
      description:
        "Defining infrastructure using code with Terraform or Ansible for repeatable deployments."
    }
  ];

  return (
    <div className="category-container">
      <h1 className="category-title">DevOps</h1>
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

export default Devops;
