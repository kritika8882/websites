const imgs = document.querySelectorAll(".images div img")
const prev_btn = document.querySelector(".control-prev")
const next_btn = document.querySelector(".control-next")

let n=0;

function changeSlider () {
    for(let i=0; i<imgs.length; i++) {
        imgs[i].style.display = "none"
    
    }
    imgs[n].style.display = "block"
    imgs[n].style.height = "100%"
    imgs[n].style.width = "100%"

}

changeSlider();

prev_btn.addEventListener("click", (e) => {
    if(n > 0) {
        n--
    }else {
        n = imgs.length - 1;
    }
    changeSlider();
})

next_btn.addEventListener("click", (e) => {
    if(n < imgs.length - 1) {
        n++
    }else {
        n = 0;
    }
    changeSlider();
})



const rows = document.querySelectorAll(".products");

    // How much to move when button is clicked
const scrollAmount = 1500;


    // Left Button
function slideLeft() {

    rows.forEach(function(row) {

    row.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });

    });

}


    // Right Button
function slideRight() {

    rows.forEach(function(row) {

    row.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });

    });

}

const ImgLst = document.querySelectorAll(".image-list");

const vissibleDisplay = 1500;

function prevSlide(){
    ImgLst.forEach(function(image) {
        image.scrollBy({
            left: -vissibleDisplay,
            behavior: "smooth"
        })
    })
}

function nextSlide() {
    ImgLst.forEach(function(image) {
        image.scrollBy({
            left: vissibleDisplay,
            behavior: "smooth"
        })
    })
}



  




