
document.querySelectorAll('.toggle-password').forEach(toggle => {
    const input = toggle.previousElementSibling;
    toggle.addEventListener('click', () => {
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        toggle.classList.toggle('is-visible', show);
    });
});

const confirm = document.getElementById('confirm');
if (confirm) {
    const password = document.getElementById('password');
    const check = () => confirm.setCustomValidity(
        confirm.value && confirm.value !== password.value ? 'Passwords do not match' : ''
    );
    password.addEventListener('input', check);
    confirm.addEventListener('input', check);
}

const slides = document.querySelectorAll('.slide');
const count = document.querySelector('.slide-count');
let current = 0;

function showSlide(i) {
    slides[current].classList.remove('is-active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    count.textContent = `${current + 1} / ${slides.length}`;
}

document.querySelectorAll('.slide-btn').forEach(btn => {
    btn.addEventListener('click', () => showSlide(current + Number(btn.dataset.dir)));
});
