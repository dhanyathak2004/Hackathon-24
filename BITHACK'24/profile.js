// Get elements
const editProfileButton = document.getElementById('edit-profile');
const updateProfileButton = document.getElementById('update-profile');
const profileForm = document.getElementById('profile-form');
const workLogModal = document.getElementById('work-log-modal');
const closeModal = document.querySelector('.close');
const updateWorkLogButton = document.getElementById('update-work-log');
const saveWorkLogButton = document.getElementById('save-work-log');

// Enable profile editing
editProfileButton.onclick = function() {
    // Enable fields for editing
    profileForm.querySelectorAll('input').forEach(input => {
        input.disabled = false;
    });
    // Show the update button
    updateProfileButton.style.display = 'inline-block';
    editProfileButton.style.display = 'none';
}

// Show the work log update modal
updateWorkLogButton.onclick = function() {
    workLogModal.style.display = 'flex';
}

// Close the work log update modal
closeModal.onclick = function() {
    workLogModal.style.display = 'none';
}

// Save the work log and close the modal
saveWorkLogButton.onclick = function() {
    const workLogText = document.getElementById('work-log-text').value;
    if (workLogText.length > 0) {
        // Handle saving the work log (e.g., send to server)
        alert('Work log saved!');
        workLogModal.style.display = 'none';
    } else {
        alert('Please enter your work log before saving.');
    }
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target === workLogModal) {
        workLogModal.style.display = 'none';
    }
}
