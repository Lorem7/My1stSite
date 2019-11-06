
// button share block
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

//------Slider-----------

let sliderBlock = document.getElementById('slider');
let slides = document.querySelectorAll(".slider-image");
let slideSrc = [];
for (let i =0;i<slides.length;i++){
    slideSrc.push(slides[i].src);
    slides[i].remove();
}
let step = 0;
let offset = 0;
let width = sliderBlock.clientWidth;
function draw () {
    let img = document.createElement('img');
    img.src = slideSrc[step];
    img.classList.add('slider-image');
    img.style.left = offset * width + 'px';
    sliderBlock.appendChild(img);
    if(step + 1 == slideSrc.length){
        step = 0;
    } else {
        step++;
    }
    offset =1;
}

function left() {
    let slidesOnDoc = document.querySelectorAll('.slider-image');
    let offset2 = 0;
    for (let i=0; i<slidesOnDoc.length;i++){
        slidesOnDoc[i].style.left = offset2*width-width + 'px';
        offset2++;
    }
    setTimeout(() => {
        slidesOnDoc[0].remove();
        draw();
    },1000)

}
window.onload = () => {
    draw();
    draw();
    setInterval(left,5000);
}


