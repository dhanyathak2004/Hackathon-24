// script.js
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content').forEach(function(section) {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Default to showing the home section
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
