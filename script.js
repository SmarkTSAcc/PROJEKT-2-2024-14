window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.background = 'black';
    } else {
        header.style.backgroundImage = 'linear-gradient(to right, black , rgb(0, 0, 137))';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var toggleSwitch = document.getElementById('theme-toggle');
    var body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    } else {
        body.classList.add('light-mode');
    }

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollTrigger = document.getElementById('scrollTrigger');
    var targetSection = document.getElementById('formularz');

    scrollTrigger.addEventListener('click', function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});