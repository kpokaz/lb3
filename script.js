const form = document.getElementById('student-form');
const excellentCount = document.getElementById('excellent-count');
const goodCount = document.getElementById('good-count');
const failedCount = document.getElementById('failed-count');
const failedList = document.getElementById('failed-list');

let excellentStudents = 0;
let goodStudents = 0;
let failedStudents = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const surname = document.getElementById('surname').value.trim();
    const grades = Array.from(document.querySelectorAll('.grade')).map(input => parseInt(input.value));

    if (grades.includes(2) || grades.includes(3)) {
        failedStudents++;
        const li = document.createElement('li');
        li.textContent = surname;
        failedList.appendChild(li);
    } else if (grades.every(grade => grade === 5)) {
        excellentStudents++;
    } else if (grades.every(grade => grade >= 4)) {
        goodStudents++;
    }

    updateSummary();
    form.reset();
});

function updateSummary() {
    excellentCount.textContent = excellentStudents;
    goodCount.textContent = goodStudents;
    failedCount.textContent = failedStudents;
}