const upperH1 = document.querySelector(".todo-text");
const darkMode = document.querySelector(".bi-x-lg");
// console.log(darkMode);
const lightMode = document.querySelector(".bi-moon-fill");
const headerElement = document.querySelector("header");

const form = document.querySelector("form");
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


// console.log(ItemThere)




const resetAltMode = () => {
    headerElement.classList.remove('alternate');
    htmlElement.classList.remove('alternate'); 
    darkMode.classList.remove('alternate');
    lightMode.classList.remove('alternate');
    form.classList.remove('alternate');


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
    form.classList.toggle('alternate');

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

const lowerClicker = (event) => {
    const clickedElement = event.target;
    clickedElement.classList.toggle('click');

}

// darkMode.addEventListener("click", altMode)
lightMode.addEventListener("click", resetAltMode)

newItemI.addEventListener('click', clicker)
newItemI2.addEventListener('click', resetClicker)

lowerCircle.forEach(itemtherei => {
    itemtherei.addEventListener('click', lowerClicker);
});

lowerCircleClicked.forEach(itemtherei2 => {
    itemtherei2.addEventListener('click', lowerResetClicker);
});

// localStorage.setItem("name", "Franddmkmksklin")
// localStorage.setItem("name1", "1234567")
// localStorage.removeItem("name1")

// console.log(localStorage.getItem("name1"))
// // localStorage.clear()

// const userObject = {
//     name:"Frank",
//     age:10,
//     email:"frank@gmail.com",
//     phone:12344567876
// }

// localStorage.setItem("user", JSON.stringify(userObject))

// console.log(JSON.parse(localStorage.getItem("user")))









const input = document.querySelector("input")
const todoContainer = document.querySelector(".remainder")
let numOfItems = document.querySelector(".numOfItems")
console.log(numOfItems);

// we are checking if there is an itemn in the loal storage else we are creating a new array
const todoArray =  JSON.parse(localStorage.getItem("todoItems")) || []

// adding a submit event on the form
form.addEventListener("submit", (e)=> {
    // preventing the reloading a page on form submit
    e.preventDefault()

    // validation
    if(input.value === ""){
        return
    }else{
        // creating an object for every todotext
        let todoObj = {
            todoText:input.value,
            id:new Date().getMilliseconds()
        }
        // we are pushing the object into an array
        todoArray.push(todoObj)
        // numOfItems.textContent = todoArray.length

        // we are storing the array in the local storage
        localStorage.setItem("todoItems", JSON.stringify(todoArray))

        // we are updating the DOM based on the input value by the user
        todoContainer.innerHTML += `
                <div class="new-lower">
                    <div class="duo-lower">
                        <i class="bi bi-circle"></i>
                        <p>${input.value}</p>
                    </div>
                    <i class="bi bi-x-lg"></i>
                </div>
        `
        console.log(todoArray.length);
        numOfItems.textContent = todoArray.length
    }
    input.value = ""
})

// We are reading from the storage
function readFromStorage(){
    // const storageItem = localStorage.getItem("todoItems")
    // const decodedData = JSON.parse(storageItem)

    numOfItems.textContent = todoArray.length

    // we are looping through the array gotten from the local storage
    todoArray.reverse().forEach(data => {
        // we are updating the DOM based on the data gotten from the local storage
        todoContainer.innerHTML += `
                <div class="new-lower">
                    <div class="duo-lower">
                        <i class="bi bi-circle" ></i>
                        <p>${data.todoText}</p>
                    </div>
                    <i class="bi bi-x-lg"></i>
                </div>
        `
        console.log(data);
    })

    // console.log(decodedData)
    // console.log(localStorage.getItem("todoItems"))
}

// calling the function
readFromStorage()