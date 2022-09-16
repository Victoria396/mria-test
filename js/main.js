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
const toggler = document.querySelector(".hamburger");
// const menuOpen = document.querySelector(".hamburger");
// const menuClose = document.querySelector(".hamburger-close");
// const menu = document.querySelector(".menu");
// const header = document.querySelector("header");
// const main = document.querySelector("main");

// menuOpen.addEventListener("click", function(){
// menuOpen.classList.add('hamburger-close');
//     if (!menuOpen.classList.contains('hamburger-close')) {
//         menuOpen.classList.add('hamburger-close');
        
//     }else {
//         menuOpen.classList.remove('hamburger-close');
        
//     }
// });
