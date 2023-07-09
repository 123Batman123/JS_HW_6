const listImg = [...document.querySelectorAll('.slider__item')]
const nextArrow = document.querySelector('.slider__arrow_next')
const prevArrow = document.querySelector('.slider__arrow_prev')

const point = [...document.querySelectorAll('.slider__dot')]

let i = 0

nextArrow.onclick = () => {

    let namecls = listImg[i].className

    if (i < listImg.length - 1) {
        if (namecls.includes('slider__item_active')){
            listImg[i].classList.remove('slider__item_active')
            listImg[i+1].classList.add('slider__item_active')
        } 
        i++
    } else {
        listImg[i].classList.remove('slider__item_active')
        i = 0
        listImg[i].classList.add('slider__item_active')
    }
}

prevArrow.onclick = () => {

    let namecls = listImg[i].className

    if (i > 0) {
        if (namecls.includes('slider__item_active')){
            listImg[i].classList.remove('slider__item_active')
            listImg[i-1].classList.add('slider__item_active')
        } 
        i--
    } else {
        listImg[i].classList.remove('slider__item_active')
        i = listImg.length - 1
        listImg[i].classList.add('slider__item_active')
    }
}


point.forEach((el, index) => {
    el.addEventListener('click', () => {
        listImg.forEach((element) => {
            if (element.className.includes('slider__item_active')) {
                element.classList.remove('slider__item_active')
            }
        })
        listImg[index].classList.add('slider__item_active')
        i = index
    })
})