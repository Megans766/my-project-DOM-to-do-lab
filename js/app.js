// console.log("the check");

//cached reference elements below
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')
const ulElement = document.querySelector('ul')


buttonElement.addEventListener('click', function(buttonEvent) {
    // console.log(buttonEvent);
    let newList = document.createElement('li')
    // console.log(newList);
    newList.textContent = inputElement.value
    // console.log(newList);
    inputElement.value = ''
    ulElement.appendChild(newList)
    // console.log(newList);
})

