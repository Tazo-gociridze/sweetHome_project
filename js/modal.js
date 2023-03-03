const scroll = document.querySelector('body')
const modal = document.querySelector('.modal')
const popupDivs = document.querySelector(".modal").children
const popupIndicators = document.querySelector(".info-container").children
const close = document.querySelectorAll('.close')

for(let i=0; i<popupIndicators.length; i++){
    popupIndicators[i].addEventListener('click', function(){
        const id = this.getAttribute("data-id");
        popupDivs[id].classList.remove('disactive')
        popupDivs[id].classList.add('active')
        modal.classList.add("popup-open")
        modal.classList.remove("popup-close")
        scroll.classList.add('disabled-scroll')
        scroll.classList.remove('enabled-scroll')

        close.forEach(popupClose => popupClose.addEventListener('click', () =>{
            popupDivs[id].classList.add('disactive')
            popupDivs[id].classList.remove('active')
            modal.classList.remove("popup-open")
            modal.classList.add("popup-close")
            scroll.classList.add('enabled-scroll')
            scroll.classList.remove('disabled-scroll')
        }))
    })
}