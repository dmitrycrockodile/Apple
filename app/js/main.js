//COMMON JS
document.querySelectorAll('.watch__control, .cube-controls a, .iphones__btns-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault();
    });
});
//slideshow
const slideShowDivs = () => {
    for(let i = 1; i <= 5; i++) {
        const div = document.createElement('div');
        div.style.backgroundImage = `url(../images/slideshow/section-1-bg-${i}.jpg)`;
        if(i === 1) div.classList.add('change');
        const slideShow = document.querySelector('.slideshow').append(div);
    }
};

slideShowDivs();

const divs = document.querySelectorAll('.slideshow div');
let slideCount = 1;

const slideShow = () => {
    setInterval(() => {
        slideCount++;
        const div = document.querySelector('.slideshow .change');
        div.classList.remove('change');
        if(slideCount === 5) {
            divs[0].classList.add('change');
            slideCount = 1;
        } else {
            div.nextElementSibling.classList.add('change');
        }
    }, 20000);
};  

slideShow();

//CUBE
let x = 0;
let y = 20;
let z = 0;

let bool = true;

let interval;

const cube = document.querySelector('.cube');
const controls = document.querySelector('.cube-controls');

const playPause = () => {
    if(bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
        }, 100);
    } else {
        clearInterval(interval);
    }
};

function arrowsMove() {
    document.querySelector('.top-x-control').addEventListener('click', () => {
        cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    });

    document.querySelector('.bottom-x-control').addEventListener('click', () => {
        cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    });

    document.querySelector('.left-y-control').addEventListener('click', () => {
        cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`;
    });

    document.querySelector('.right-y-control').addEventListener('click', () => {
        cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`;
    });

    document.querySelector('.top-z-control').addEventListener('click', () => {
        cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`;
    });

    document.querySelector('.bottom-z-control').addEventListener('click', () => {
        cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`;
    });
}

controls.addEventListener('mouseover', () => {
    bool = false;
    playPause()
});
controls.addEventListener('mouseout', () => {
    bool = true;
    playPause()
});

playPause();
arrowsMove();

//MACBOOK ANIMATION
const section3Content = document.querySelector('.section-3__content');

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change');
    }
});

//APPLE WATCH SLIDER
const watchBands = document.querySelector('.watch__bands');
const watchCases = document.querySelector('.watch__cases');

const watchTopControl = document.querySelector('.watch__control--top');
const watchRightControl = document.querySelector('.watch__control--right');
const watchBottomControl = document.querySelector('.watch__control--bottom');
const watchLeftControl = document.querySelector('.watch__control--left');

let axisY = 0;
let axisX = 0;

const hideControl = () => {
    axisY === -280 ? watchTopControl.classList.add('hide-control') : watchTopControl.classList.remove('hide-control');
    axisY === 280 ? watchBottomControl.classList.add('hide-control') : watchBottomControl.classList.remove('hide-control');
    axisX === -280 ? watchLeftControl.classList.add('hide-control') : watchLeftControl.classList.remove('hide-control');
    axisX === 280 ? watchRightControl.classList.add('hide-control') : watchRightControl.classList.remove('hide-control');
};

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`;
    hideControl();
});
watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 70}rem`;
    hideControl();
});
watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`;
    hideControl();
});
watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`;
    hideControl();
});