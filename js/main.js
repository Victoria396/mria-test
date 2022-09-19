var $post = $(".flower");
setInterval(function(){
    $post.toggleClass("flower2");
}, 4000);

// код для переключения табов
const choiceBtn = document.querySelectorAll(".choice__tab-item");
const choiceItem = document.querySelectorAll(".choice__tab-body-item");

choiceBtn.forEach(choiceOnTabClick);

function choiceOnTabClick(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('choice__tab-item-active')) {
            choiceBtn.forEach(function(item){
                item.classList.remove('choice__tab-item-active');
            });

            choiceItem.forEach(function(item){
                item.classList.remove('choice__tab-body-active');
            });

            currentBtn.classList.add('choice__tab-item-active');
            currentTab.classList.add('choice__tab-body-active');
        }
    }); 
}

document.querySelector('.choice__tab-item').click();

// код для открытия и закрытия меню    
const toggler = document.querySelector(".toggler");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const body = document.querySelector(".menu");

toggler.addEventListener("click", function() {
    if(!toggler.classList.contains('active')){
        toggler.classList.add('active');
        header.classList.add('h-active');
        menu.classList.add('m-active');
        menu.classList.remove('menu');
        document.querySelector('main').style.opacity = 0.5;
        document.querySelector('.spa').style.opacity = 0.5;
        document.querySelector('.inclusive').style.opacity = 0.5;
        document.querySelector('.lines').style.opacity = 0.5;
        document.querySelector('.tablet').style.opacity = 0.5;
    }else {
        toggler.classList.remove('active');
        header.classList.remove('h-active');
        menu.classList.remove('m-active');
        menu.classList.add('menu');
        document.querySelector('main').style.opacity = 1;
        document.querySelector('.spa').style.opacity = 1;
        document.querySelector('.inclusive').style.opacity = 1;
        document.querySelector('.lines').style.opacity = 1;
        document.querySelector('.tablet').style.opacity = 1;
    }
});

// ховеры в меню 
const level1 = document.querySelectorAll(".level1-item");
const level2 = document.querySelectorAll(".list-level2");
const screenWidth = window.screen.width;

level1.forEach(level1OnTabClick);

function level1OnTabClick(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-link");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('level1-item-active')) {
            level1.forEach(function(item){
                if(screenWidth < 980) {
                    item.classList.remove('level1-item-activeMob');
                } else {item.classList.remove('level1-item-active');}
            });

            level2.forEach(function(item){
                item.classList.remove('list-level2-active');
            });
                
                // if(screenWidth < 980) {
                //     currentBtn.style.marginBottom = '85px';
                // } else {currentBtn.style.marginBottom = '0';}

            if(screenWidth < 980) {
                currentBtn.classList.add('level1-item-activeMob');
            } else {currentBtn.classList.add('level1-item-active');}

            currentTab.classList.add('list-level2-active');
        }
    }); 
}

// код для слайдера в меню 
let offset = 0;
const sliderLine = document.querySelector('.slider__line')

document.querySelector('.dot1')
    .addEventListener('click', function() {
        sliderLine.style.left = offset + 0 + 'px';
        document.querySelector('.border1').style.display = 'block';
        document.querySelector('.border2').style.display = 'none';
        document.querySelector('.border3').style.display = 'none';
        document.querySelector('.dot1-fill').style.fill = '#d9c287';
        document.querySelector('.dot2-fill').style.fill = '#FFFFFF';
        document.querySelector('.dot3-fill').style.fill = '#FFFFFF';
    })
document.querySelector('.dot2')
    .addEventListener('click', function() {
        sliderLine.style.left = offset - 420 + 'px';
        document.querySelector('.border2').style.display = 'block';
        document.querySelector('.border1').style.display = 'none';
        document.querySelector('.border3').style.display = 'none';
        document.querySelector('.dot2-fill').style.fill = '#d9c287';
        document.querySelector('.dot1-fill').style.fill = '#FFFFFF';
        document.querySelector('.dot3-fill').style.fill = '#FFFFFF';
    })
document.querySelector('.dot3')
    .addEventListener('click', function() {
        sliderLine.style.left = offset - 840 + 'px';
        document.querySelector('.border3').style.display = 'block';
        document.querySelector('.border2').style.display = 'none';
        document.querySelector('.border1').style.display = 'none';
        document.querySelector('.dot3-fill').style.fill = '#d9c287';
        document.querySelector('.dot2-fill').style.fill = '#FFFFFF';
        document.querySelector('.dot1-fill').style.fill = '#FFFFFF';
    })

// код для слайдерa спец предложения
const slide1Line = document.querySelector(".slider1__line");
let slideWidth = document.querySelector(".choice__slider1").offsetWidth;
console.log(slideWidth);
let offset2 = 0;

    document.querySelector(".arrow-next").addEventListener('click', function() {
    offset2 += slideWidth;
    // console.log(offset2);
    if (offset2 > slideWidth) {
        offset2 = 0;
    }

    if (screenWidth < 360) {
        slide1Line.style.left = -offset2 / 2 + 'px';
    } else {
        slide1Line.style.left = -offset2 / 2 + 'px';
    }
});

    document.querySelector(".arrow-prev").addEventListener('click', function() {
    offset2 += slideWidth;
    console.log(offset2);
    if (offset2 > slideWidth) {
        offset2 = 0;
    }

    if (screenWidth < 360) {
        slide1Line.style.left = -offset2 / 2 + 'px';
    } else {
        slide1Line.style.left = -offset2 /2 + 'px';
    }
});

// код для слайдерa спец предложения
const slide2Line = document.querySelector(".slider2__line");
let slide2Width = document.querySelector(".choice__slider2").offsetWidth;
// console.log(slide2Width);
let offset3 = 0;

    document.querySelector(".arrow-next").addEventListener('click', function() {
    offset3 += slide2Width;
    // console.log(offset3);
    if (offset3 > slide2Width) {
        offset3 = 0;
    }

    if (screenWidth < 360) {
        slide2Line.style.left = -offset3 / 4 + 'px';
    } else {
        slide2Line.style.left = -offset3 / 2 + 'px';
    }
});

    document.querySelector(".arrow-prev").addEventListener('click', function() {
    offset3 += slide2Width;
    // console.log(offset3);
    if (offset3 > slide2Width) {
        offset3 = 0;
    }

    if (screenWidth < 361) {
        slide2Line.style.left = -offset3 + 'px';
    } else {
        slide2Line.style.left = -offset3 / 2 + 'px';
    }
});

// код для слайдерa категории отдыха
const slide3Line = document.querySelector(".slider3__line");
let slide3Width = document.querySelector(".choice__slider3").offsetWidth;
// console.log(slide3Width);
let offset4 = 0;

    document.querySelector(".arrow-next").addEventListener('click', function() {
    offset4 += slide3Width;
    console.log(offset4);
    if (offset4 > slide3Width) {
        offset4 = 0;
    }

    if (screenWidth < 360) {
        slide3Line.style.left = -offset4 + 'px';
    } else {
        slide3Line.style.left = -offset4 / 1.8 + 'px';
    }
});

    document.querySelector(".arrow-prev").addEventListener('click', function() {
    offset4 += slide3Width;
    // console.log(offset4);
    if (offset4 > slide3Width) {
        offset4 = 0;
    }

    if (screenWidth < 360) {
        slide3Line.style.left = -offset4 / 4 + 'px';
    } else {
        slide3Line.style.left = -offset4 / 1.8 + 'px';
    }
});

// код для слайдерa всё включено
const slide4Line = document.querySelector(".inclusive__line");
let slide4Width = document.querySelector(".inclusive__overflow").offsetWidth;
console.log(slide4Width);

let offset5 = 0;

    document.querySelector(".inclus-next").addEventListener('click', function() {
    offset5 += slide4Width;
    console.log(offset5);
    if (offset5 > slide4Width) {
        offset5 = 0;
    }

    if (screenWidth < 1300) {
        slide4Line.style.left = -offset5 + 'px';
    } if (screenWidth < 360) {
        slide4Line.style.left = -offset5 + 'px';
    }  
    else {
        slide4Line.style.left = -offset5 * 1.106 + 'px';
    }
});

    document.querySelector(".inclus-prev").addEventListener('click', function() {
    offset5 += slide4Width;
    console.log(offset5);
    if (offset5 > slide4Width) {
        offset5 = 0;
    }

    if (screenWidth < 1300) {
        slide4Line.style.left = -offset5 * 1.106 + 'px';
    } if (screenWidth < 860) {
        slide4Line.style.left = -offset5 * 1.106 + 'px';
    }  
    else {
        slide4Line.style.left = -offset5 * 1.106 + 'px';
    }
});


