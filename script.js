let share = document.getElementById('share-btn');
let menu = document.getElementById('popup');
let overlay = document.querySelector('#overlay');
share.addEventListener("click", function () {
    menu.style.transform = 'scale(1)';
    overlay.style.display = 'block';
});
overlay.addEventListener('click',() => {
    menu.style.transform = 'scale(0)';
    overlay.style.display = 'none';
})

