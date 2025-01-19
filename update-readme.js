// const fs = require('fs');
// const fetch = require('node-fetch');

// const username = 'Gautam-2002';

// async function main() {
//   const res = await fetch(`https://api.github.com/users/${username}`);
//   const data = await res.json();

//   const totalCommits = await fetch(`https://api.github.com/search/commits?q=author:${username}`);
//   const commitsData = await totalCommits.json();

//   const readmeContent = `
// # 🌟 Hi, I'm Gautam, Welcome to my Github page! 🌟

// **Research Engineer | C++ Developer | Full-Stack Developer**

// Currently thriving as a Research Engineer at **LG Soft India**, I specialize in **C++ development** and **Full-Stack development**. With a strong foundation in **Computer Science and Engineering** from **Chitkara University**, I’m passionate about crafting efficient, scalable, and innovative solutions.

// ## 🚀 Key Skills
// - **C++ Development**: Expert in developing robust, high-performance applications.
// - **Versatile Programming**: Proficient in C++, Java, **MERN stack** (HTML, CSS, JavaScript, React, Node.js, Express, MongoDB), and SQL.
// - **Continuous Learning**: Committed to expanding my expertise in problem solving and required technologies.

// ## 📊 GitHub Stats

// - Total Commits: ${commitsData.total_count} !📈
// - Public Repositories: ${data.public_repos} 📚
// - **Joined GitHub**: ⌚ Since 2021.

// ## 🔗 Connect with me
// - [LinkedIn Profile](http://www.linkedin.com/in/gautam2sethi) 🌐

// ## 💡 What Drives Me?
// A relentless thirst for learning and innovation propels me to seek challenging opportunities where I can create impactful solutions.

// `;

//   fs.writeFileSync('README.md', readmeContent);
// }

// main();
