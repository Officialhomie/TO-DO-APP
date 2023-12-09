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

const lowerCircle = document.querySelectorAll(".duo-lower .bi-circle");
const lowerCircleClicked = document.querySelectorAll(".duo-lower .bi-check-circle-fill");

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


console.log(ItemThere)




const resetAltMode = () => {
    headerElement.classList.remove('alternate');
    htmlElement.classList.remove('alternate'); 
    darkMode.classList.remove('alternate');
    lightMode.classList.remove('alternate');
    newItem.classList.remove('alternate');


    lastGuy.style.borderBottom = 'none';

    lowerCircle.forEach(itemi => {
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

    lowerCircle.forEach(itemi => {
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
}

const clicker = () => {
    newItemI.classList.toggle('click');
    newItemI2.classList.toggle('click');
};

const lowerResetClicker = () => {
    lowerCircle.forEach(lowercircle  =>{
        lowercircle.classList.remove('click')
    })    
    lowerCircleClicked.forEach(lowercirclebtn => {
        lowercirclebtn.classList.remove('click')
    })
}



const lowerClicker = () => {
    lowerCircle.forEach(theLowerCircle => {
        theLowerCircle.classList.toggle('click');
    });
    lowerCircleClicked.forEach(lowercirclebtnclicked => {
        lowercirclebtnclicked.classList.toggle('click');
    });
}





darkMode.addEventListener("click", altMode)
lightMode.addEventListener("click", resetAltMode)

newItemI.addEventListener('click', clicker)
newItemI2.addEventListener('click', resetClicker)

lowerCircle.forEach(itemtherei => {
    itemtherei.addEventListener('click', lowerClicker);
});

lowerCircleClicked.forEach(itemtherei2 => {
    itemtherei2.addEventListener('click', lowerResetClicker);
});

