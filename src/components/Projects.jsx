import React, { useEffect, useState } from "react";
import { projectsList, githubUsername } from "../constants";

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
    <section className="py-16" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl sm:6xl lg:text-7xl text-center tracking-wide">
            <span className='text-right bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text animate-gradient [animation-duration:_2s]'>
              Projects
            </span>
          </h1>
        <p className='relative mt-10 text-lg text-center text-neutral-500 leading-relaxed'>
            Here are a few of the projects I've worked on recently. Here you can view a short description, and click on them to view the code on GitHub.
            </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-sm border border-neutral-700/80 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
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
