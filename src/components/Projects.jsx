import React, { useEffect, useState } from "react";

const projectsList = [
  "my-portfolio",
  "FirstPersonSwordfighter",
  "topdownvs"
]; // replace with your repo names
const githubUsername = "enoseven7"; // replace with your GitHub username

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const fetchedRepos = await Promise.all(
        projectsList.map(async (repo) => {
          const res = await fetch(`https://api.github.com/repos/${githubUsername}/${repo}`);
          return res.json();
        })
      );
      setRepos(fetchedRepos);
    }

    fetchRepos();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-gray-600 mb-4">
                {repo.description || "No description provided"}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
