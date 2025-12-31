const accordionItemsElm = document.querySelectorAll('.accordion-item')
const accordionContent = document.querySelectorAll('.accordion-content')
const iconElm = document.querySelectorAll('.icon')



function accordionTab(e) {
    if (!e.target.parentElement.nextElementSibling.classList.contains('active')) {
        e.target.parentElement.nextElementSibling.classList.add('active')
        e.target.innerText = '-'
    } else {
        e.target.parentElement.nextElementSibling.classList.remove('active')
        e.target.innerText = '+'

    }
}

iconElm.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        accordionTab(e)
    })
})