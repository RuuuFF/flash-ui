const loadWraper = document.querySelector('.load-wraper')
window.addEventListener('load', () => setTimeout(() => loadWraper.classList.add('loaded'), 1500))