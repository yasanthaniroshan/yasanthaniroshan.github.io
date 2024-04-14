const homeButton = document.getElementById('home-link');
const articlesButton = document.getElementById('articles-link');
const projectsButton = document.getElementById('projects-link');
const contactButton = document.getElementById('contact-link');
let selectedButton;
document.addEventListener('DOMContentLoaded', () => {
    homeButton.className = 'nav-bar-options-selected';
    selectedButton = homeButton;
})
homeButton.addEventListener('click', function(event) {
    event.preventDefault();
    selectedButton.className = 'nav-bar-options';
    homeButton.className = 'nav-bar-options-selected';
    selectedButton = homeButton;
})

articlesButton.addEventListener('click', function(event) {
    event.preventDefault();
    selectedButton.className = 'nav-bar-options';
    articlesButton.className = 'nav-bar-options-selected';
    selectedButton = articlesButton;
})

projectsButton.addEventListener('click', function(event) {
    event.preventDefault();
    selectedButton.className = 'nav-bar-options';
    projectsButton.className = 'nav-bar-options-selected';
    selectedButton = projectsButton;
})

contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    selectedButton.className = 'nav-bar-options';
    contactButton.className = 'nav-bar-options-selected';
    selectedButton = contactButton;
})