// Get the necessary elements
const toggleButton = document.querySelector('.navbar-toggle');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

// Toggle the active class on the sidebar and content
toggleButton.addEventListener('click', function() {
  sidebar.classList.toggle('active');
  content.classList.toggle('active');
});
