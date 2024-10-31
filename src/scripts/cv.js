// Main collapsible button for Education
const toggleButtons = document.querySelectorAll('.toggle-button');
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    arrow.textContent = content.style.display === 'block' ? 'v' : '>';
  });
});

// Collapsible buttons for each year
const yearToggleButtons = document.querySelectorAll('.year-toggle-button');
yearToggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    arrow.textContent = content.style.display === 'block' ? 'v' : '>';
  });
});
