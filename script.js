// Пример простой функции для демонстрации работы JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница загружена и готова к работе!');
    
    // Добавление интерактивности: подсветка активной ссылки в меню
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            links.forEach(l => l.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
});
