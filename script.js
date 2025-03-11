document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });
});