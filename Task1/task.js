//Первая версия
// let a = [...document.querySelectorAll('.modal')]
// let b = [...document.querySelectorAll('.modal__close_times')]
// a[0].classList.add('modal_active')

// a[0].addEventListener('click', () => {
//     a[0].classList.remove('modal_active')
//     a[1].classList.add('modal_active')
// })
// b.forEach(el => {
//     el.addEventListener('click', (event) => {
//         event.stopPropagation()
//         el.parentElement.parentElement.style.display = 'none'
//     })
// })


//Вторая Версия
const a = [...document.querySelectorAll('.btn')]
const b = [...document.querySelectorAll('.modal__close_times')]
console.log()
a[0].parentElement.parentElement.classList.add('modal_active')
a[0].onclick = () => {
    a[0].parentElement.parentElement.classList.remove('modal_active')
    a[1].parentElement.parentElement.classList.add('modal_active')
}


for(let i of b) {
    i.onclick = (el) => {
        let t = el.target
        console.log(t.parentElement.parentElement.classList.remove('modal_active'))
    }
}