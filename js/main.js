const correctAnswers = ['A', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    // Get user answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // Check user answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);

    // Score animation
    let output = 0;
    const timer = window.setInterval(() => {
        result.textContent = `Score : ${output} %`;
        if (output == score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
})