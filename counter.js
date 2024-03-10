const count = document.querySelector("#count")
const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')
const incrementBy = document.querySelector('.incrementBy')
const reset = document.querySelector('.reset')


decrement.addEventListener('click', () => {
    console.log("decrement")
    const incrementByFive = parseInt(incrementBy.value);
    const counter = parseInt(count.innerText);
    count.innerText = counter - incrementByFive;

})

increment.addEventListener('click', () => {
    console.log("increment")
    const incrementByFive = parseInt(incrementBy.value);
    const counter = parseInt(count.innerText);
    count.innerText = counter + incrementByFive;
})

reset.addEventListener('click', () => {
    count.innerText = 0;
})