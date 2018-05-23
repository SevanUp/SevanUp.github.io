let play = document.getElementById('play'),
    video = document.getElementsByTagName('video'),
    controls = document.getElementById('controls'),
    overlay = document.getElementsByClassName('video');

play.addEventListener('click', function() {
    controls.style.display = 'none';
    overlay[0].classList.add('played');
    video[0].play();
}, false);

video[0].addEventListener('ended', function() {
    controls.style.display = 'flex';
    overlay[0].classList.remove('played');
}, false);