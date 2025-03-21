// Example data stores for students, attendance, and grades
let students = [];
let attendance = [];
let grades = [];

// Handle student enrollment
document.getElementById('enroll-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const dob = document.getElementById('dob').value;
    
    const student = { name, roll, dob };
    students.push(student);
    displayStudents();
    this.reset();
});

// Display enrolled students
function displayStudents() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '<h3>Enrolled Students</h3>';
    students.forEach(student => {
        const studentItem = document.createElement('p');
        studentItem.textContent = `Name: ${student.name}, Roll: ${student.roll}, DOB: ${student.dob}`;
        studentList.appendChild(studentItem);
    });
}

// Handle attendance marking
document.getElementById('attendance-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const rollId = document.getElementById('roll-id').value;
    const status = document.getElementById('status').value;
    
    const attendanceRecord = { rollId, status };
    attendance.push(attendanceRecord);
    alert(`Attendance marked for Roll Number: ${rollId} as ${status}`);
    this.reset();
});

// Handle grade entry
document.getElementById('grades-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const rollId = document.getElementById('roll-id-grade').value;
    const subject = document.getElementById('subject').value;
    const grade = document.getElementById('grade').value;
    
    const gradeRecord = { rollId, subject, grade };
    grades.push(gradeRecord);
    alert(`Grade added for Roll Number: ${rollId}, Subject: ${subject}, Grade: ${grade}`);
    this.reset();
});

// Handle message sending
document.getElementById('message-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    alert(`Message sent: ${message}`);
    this.reset();
});
