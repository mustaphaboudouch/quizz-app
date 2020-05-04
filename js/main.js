const correctAnswers = ['B', 'A', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const score_box = document.querySelector('.score-box');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    // Get user answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    // Check user answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);

    // Show score box
    score_box.classList.remove('d-none');

    // Score animation
    let output = 0;
    const timer = window.setInterval(() => {
        score_box.querySelector('h1').textContent = `Your Score : ${output}%`;
        if (output == score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
})