document.addEventListener("DOMContentLoaded", () => {
    const projectsList = document.getElementById("projects-list");
    fetch("data/projects.json")
      .then(response => response.json())
      .then(data => {
        data.forEach(project => {
          const col = document.createElement("div");
          col.className = "col-md-4";
          col.innerHTML = `
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-primary">View Project</a>
              </div>
            </div>
          `;
          projectsList.appendChild(col);
        });
      });
  });

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'none';
    });
});

// Skill badge interactions
document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('click', () => {
        badge.style.transform = 'scale(1.1)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    });
});

// Form validation and submission handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // In a real application, this would send the form data to a server
        alert('Thank you for your message. I will respond to your inquiry soon.');
        form.reset();
    });
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Console information for developers
console.log(
    "Portfolio Website - Development Information",
    "\nBuilt with: HTML5, CSS3, JavaScript, Bootstrap 5",
    "\nLast Updated: 2024"
);


