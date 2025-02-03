document.addEventListener('DOMContentLoaded', function() {
    const numStudentsSelect = document.getElementById('num-students');
    const teamMembersDiv = document.getElementById('team-members');

    numStudentsSelect.addEventListener('change', function() {
        const numStudents = parseInt(numStudentsSelect.value);
        teamMembersDiv.innerHTML = '';

        for (let i = 1; i <= numStudents; i++) {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'team-member';
            memberDiv.innerHTML = `
                <h3>Team Member ${i}</h3>
                <label for="member${i}-name">Name:</label>
                <input type="text" id="member${i}-name" name="member${i}-name" required>
                <label for="member${i}-rollno">Roll No:</label>
                <input type="text" id="member${i}-rollno" name="member${i}-rollno" required>
                <label for="member${i}-phone">Phone No:</label>
                <input type="text" id="member${i}-phone" name="member${i}-phone" required>
                <label for="member${i}-special-lab">Special Lab:</label>
                <input type="text" id="member${i}-special-lab" name="member${i}-special-lab" required>
            `;
            teamMembersDiv.appendChild(memberDiv);
        }
    });
});

function goBack() {
    window.history.back();
}
