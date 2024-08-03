// src/pages/index.tsx

import '../app/globals.css';

export default function Home() {
  const repos = [
    'trip-adalaj-and-agora-mall',
    'Ayushis-Brothers-Merriage',
    'Christmas',
    'Company-Extras',
    'consines-monster-pizza-party',
    'dhaval-extras',
    'Dixadidi-s-merriage',
    'Egg-world-with-papa',
    'Keval-s-Huddi-photos',
    'Movie-Drashum',
    'Novotel',
    'Tamjam-Party-with-IP-Team'
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-background-start to-background-end dark:from-gray-900 dark:to-gray-800">
      <ul className="w-full max-w-5xl space-y-4">
        {repos.map((repo) => (
          <li
            key={repo}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow dark:bg-gray-700 dark:border-gray-600"
          >
            <a
              href={`/memories-2022/${repo}`}
              className="text-blue-600 hover:text-blue-800 font-mono text-sm dark:text-blue-400 dark:hover:text-blue-600"
            >
              {repo}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
