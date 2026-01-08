const projectsContainer = document.getElementById('projects-container');

fetch('https://api.github.com/users/Niki-023/repos')
  .then(res => res.json())
  .then(repos => {
    repos.forEach(repo => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description'}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      projectsContainer.appendChild(div);
    });
  });
