const upperH1 = document.querySelector(".todo-text");
const darkMode = document.querySelector(".bi-brightness-high-fill");
const lightMode = document.querySelector(".bi-moon-fill");
const headerElement = document.querySelector("header");

const newItem = document.querySelector(".new");
const ItemThere = document.querySelectorAll(".new-lower");

const newItemInpt = document.querySelector(".new input");
const ItemThereInpt = document.querySelectorAll(".new-lower input");


const newItemI = document.querySelector(".new i");
const newItemI2 = document.querySelector(".duo .bi-check-circle-fill");
const ItemThereI = document.querySelectorAll(".new-lower i");
const ItemThereI2 = document.querySelectorAll(".duo-lower .bi-check-circle-fill");

const lastGuy = document.querySelector('.last-one')
const lastP = document.querySelector('.last-one p')
const all = document.querySelector('.all')
const active = document.querySelector('.active')
const completed = document.querySelector('.completed')
const clear = document.querySelector('.clear')




const circleIcon = document.querySelector(".bi-circle");
const htmlElement = document.documentElement;

const root = document.documentElement;


const mainColor = getComputedStyle(root).getPropertyValue('--VeryDarkBlue');
const mainColor2 = getComputedStyle(root).getPropertyValue('--VeryLightGray');
const mainColor3 = getComputedStyle(root).getPropertyValue('--VeryDarkGrayishBlue2');

console.log(mainColor3);





const resetAltMode = () => {
    headerElement.classList.remove('alternate');
    htmlElement.classList.remove('alternate'); 
    darkMode.classList.remove('alternate');
    lightMode.classList.remove('alternate');
    newItem.classList.remove('alternate');


    lastGuy.style.borderBottom = 'none';

    ItemThereI.forEach(itemi => {
        itemi.classList.remove('alternate');
    });
    ItemThere.forEach(item => {
        item.classList.remove('alternate');
    });
    ItemThereInpt.forEach(iteminpt => {
        iteminpt.classList.remove('alternate');
    });

    newItemInpt.classList.remove('alternate');
    newItemI.classList.remove('alternate');


    lastP.classList.remove('alternate')
    all.classList.remove('alternate')
    active.classList.remove('alternate')
    completed.classList.remove('alternate')
    clear.classList.remove('alternate')
};

const altMode = () => {
    resetAltMode();
    headerElement.classList.toggle('alternate');
    htmlElement.classList.toggle('alternate'); 
    darkMode.classList.toggle('alternate');
    lightMode.classList.toggle('alternate');
    newItem.classList.toggle('alternate');

    lastGuy.style.borderBottom = `1px solid ${mainColor3}`;

    ItemThereI.forEach(itemi => {
        itemi.classList.toggle('alternate');
    });

    ItemThere.forEach(item => {
        item.classList.toggle('alternate');
    });
    ItemThereInpt.forEach(iteminpt => {
        iteminpt.classList.toggle('alternate');
    });

    newItemInpt.classList.toggle('alternate');
    newItemI.classList.toggle('alternate');


    lastP.classList.toggle('alternate')
    all.classList.toggle('alternate')
    active.classList.toggle('alternate')
    completed.classList.toggle('alternate')
    clear.classList.toggle('alternate')
};

const resetClicker = () => {
    newItemI.classList.remove('click');
    newItemI2.classList.remove('click');

    ItemThereI.classList.remove('click');
    ItemThereI2.classList.remove('click');
}

const clicker = () => {
    newItemI.classList.toggle('click');
    newItemI2.classList.toggle('click');

    ItemThereI.classList.toggle('click');
    ItemThereI2.classList.toggle('click');
};

// const clicker = () => {



newItemI.addEventListener('click', clicker)
newItemI2.addEventListener('click', resetClicker)

ItemThereI.addEventListener('click', clicker)
ItemThereI2.addEventListener('click', resetClicker)

darkMode.addEventListener("click", altMode)
lightMode.addEventListener("click", resetAltMode)
