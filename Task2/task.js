let a = [...document.querySelectorAll('.menu__link')]
let b = [...document.querySelectorAll('.menu__item')]

let indexRemove = null;

a.forEach((el) => {
    el.addEventListener('click', (event) => {
        let cEl = el.parentElement.children[1]
        
        if (cEl) {
            event.preventDefault()
            if (cEl.className.includes('menu_active')) {
                cEl.classList.remove('menu_active')
            } else {
                b.forEach((element, index) => {
                    if (element.querySelector('.menu_active')) {
                        element.querySelector('.menu_sub').classList.remove('menu_active');
                        }
                    });
                cEl.classList.add('menu_active')
            }
        }
    })
})