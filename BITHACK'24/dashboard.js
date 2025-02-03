// Function to display the correct section based on the clicked navigation link
function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Function to display the correct problem section
function showProblemSection(problemSectionId) {
    // Hide all problem sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected problem section
    document.getElementById(problemSectionId).style.display = 'block';
}

// Function to display the correct domain section
function showDomain(domainId) {
    // Hide all domain sections
    const sections = document.querySelectorAll('.domain-content');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected domain section
    document.getElementById(domainId).style.display = 'block';


}

// Function to display the correct domain section or navigate to a new page
function showDomain(domainId) {
    if (domainId === 'cloud') {
        window.location.href = 'cloud.html'; // Redirect to cloud.html for the CLOUD domain
    } else {
        // Handle other domains if necessary
    }
}
// Function to go to the detailed problem statement page
function goToProblemDetail(problemCode) {
    // Redirect to the problem detail page with the problem code as a query parameter
    window.location.href = `problem-detail.html?code=${problemCode}`;
}
