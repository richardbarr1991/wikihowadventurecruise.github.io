var videos = document.querySelectorAll('video');
var menuItems = document.querySelectorAll('.menu-item');

function HideAll() {
    videos.forEach((video, index) => {
            videos[index].style.display = "none";
        });
};

function PauseAll() {
    videos.forEach((video, index) => {
            videos[index].pause();
        });
};

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        HideAll();
        PauseAll();
        videos[index].style.display = "block";
        videos[index].play();
    });
});