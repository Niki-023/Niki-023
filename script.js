// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const reveal = () => {
  const trigger = window.innerHeight * 0.85;
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Load GitHub projects dynamically
const container = document.getElementById('projects-container');

fetch('https://api.github.com/users/Niki-023/repos')
  .then(res => res.json())
  .then(repos => {
    repos.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card fade-in';
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description available.'}</p>
        <a href="${repo.html_url}" target="_blank" class="btn-neon">View</a>
      `;
      container.appendChild(card);
    });
    reveal();
  });
