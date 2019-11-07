//------Slider-----------
let slides = document.querySelectorAll(".slider-image");
let slideSrc = [];
for (let i =0;i<slides.length;i++){
    slideSrc.push(slides[i].src);
    slides[i].remove();
}
let step = 0;
let offset = 0;
let sliderBlock = document.getElementById('slider');
let width = sliderBlock.offsetWidth;
function draw () {
    let img = document.createElement('img');
    img.src = slideSrc[step];
    img.classList.add('slider-image');
    img.style.left = offset * width + 'px';
    console.log(width);
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