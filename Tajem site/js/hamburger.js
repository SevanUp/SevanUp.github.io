let story = document.getElementsByClassName('story'),
    storyImage = document.getElementById('story-image'),
    storyArticle = document.getElementById('story-article'),
    containerTeams = document.getElementsByClassName('container-teams'),
    teams = document.getElementsByClassName('team'),
    hamburger = document.getElementsByTagName('nav'),
    menu = document.getElementsByClassName('hamburger');

window.addEventListener('load', function() {
    if (checkVisible(story[0])) {
        storyImage.style.transform = "translateX(0)";
        storyImage.style.transition = "transform .8s ease-out";
        storyArticle.style.transform = "translateX(0)";
        storyArticle.style.transition = "transform .8s ease-out";
    }
    if (checkVisible(containerTeams[0])) {
        for (let i = 0; i < teams.length; i++) {
            teams[i].style.transform = "translateX(0)";
            teams[i].style.transition = "transform .8s ease-out";
        }
    }
});

window.addEventListener('scroll', function() {
    if (checkVisible(story[0])) {
        storyImage.style.transform = "translateX(0)";
        storyImage.style.transition = "transform .8s ease-out";
        storyArticle.style.transform = "translateX(0)";
        storyArticle.style.transition = "transform .8s ease-out";
    }
    if (checkVisible(containerTeams[0])) {
        for (let i = 0; i < teams.length; i++) {
            teams[i].style.transform = "translateX(0)";
            teams[i].style.transition = "transform .8s ease-out";
        }
    }
});

hamburger[0].addEventListener('click', function() {
    menu[0].classList.toggle('show');
    hamburger[0].classList.toggle('close');
});

function checkVisible(elm) {
    let rect = elm.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}