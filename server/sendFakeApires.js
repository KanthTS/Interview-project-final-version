const axios = require('axios');

const rolesWithTags = {
  "DSA": ["arrays", "graphs", "trees", "sorting", "linked lists", "dynamic programming"],
  "Backend": ["node", "express", "mongo", "authentication", "rest api", "middleware"],
  "Frontend Developer": ["react", "js", "html", "css", "redux", "webpack"],
  "DataBases": ["sql", "mongoose", "mongodb", "indexing", "normalization"],
  "DevOps": ["docker", "kubernetes", "ci/cd", "monitoring", "logging"],
  "Software Developer": ["c", "java", "python", "oop", "data structures"],
  "Software Eng": ["design patterns", "agile", "testing", "requirements", "uml"]
};

const companies = ["Meta", "Google", "Amazon", "Microsoft", "Netflix"];
const sampleQuestions = {
  "arrays": "Explain the different types of arrays.",
  "graphs": "What is a graph and how is it represented?",
  "node": "What is the event loop in Node.js?",
  "express": "How does middleware work in Express?",
  "react": "What are hooks in React?",
  "sql": "Explain normalization in SQL.",
  "docker": "What is Docker and how is it used?",
  "c": "What are pointers in C?",
  "design patterns": "What is the Singleton pattern?",
  // Add more questions per tag if you want
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function sendFakeRequest(role, topic) {
  const question = sampleQuestions[topic] || `Explain ${topic} concepts.`;
  const company = getRandom(companies);
  const solution = `This is a sample answer for ${topic}.`;

  const payload = {
    question,
    topic,
    company,
    role,
    solution
  };

  try {
    const res = await axios.post('http://localhost:3000/user-api/user-contribute', payload);
    console.log(`Success for ${role} - ${topic}: ${res.status}`);
  } catch (err) {
    console.error(`Failed for ${role} - ${topic}:`, err.message);
  }
}

async function generateRequests() {
  for (const role in rolesWithTags) {
    const tags = rolesWithTags[role];
    for (const tag of tags) {
      await sendFakeRequest(role, tag);
      // To send 100 total requests, you can loop more times or add more tags
    }
  }
}

generateRequests();
