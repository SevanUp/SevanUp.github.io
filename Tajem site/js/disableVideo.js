window.addEventListener("load", function() {
    let video = document.getElementsByTagName("video")[0],
        img = document.getElementsByTagName("img");

    let visible = !!(video.offsetWidth ||
        video.offsetHeight ||
        video.getClientRects().length);

    if (visible) {
        video.src = video.getAttribute("data-src");
        video.poster = video.getAttribute("data-poster");
    }

    video.load();
});