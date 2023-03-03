const buildingModal = document.querySelector('.building-modal')
const projectIndic = document.querySelector('.projects').children
const projectModalChild = document.querySelector('.building-modal').children
const modalClose = document.querySelectorAll('.building-close')
const body = document.querySelector('body')

for(let i=0; i < projectIndic.length; i++){
    projectIndic[i].addEventListener('click', function(){
        const id = this.getAttribute('data-id')
        buildingModal.classList.add('building-modal-open')

        buildingModal.classList.remove('building-modal-close')

        projectModalChild[id].classList.add("modal-active")

        projectModalChild[id].classList.remove("modal-disactive")

        projectIndic[id].classList.add('building-modal-close')

        body.classList.add('disabled-scroll')
        body.classList.remove('enabled-scroll')

        modalClose.forEach(closeModal => closeModal.addEventListener('click', () =>{
            projectModalChild[id].classList.add('modal-disactive')

            projectModalChild[id].classList.remove('modal-active')

            buildingModal.classList.remove("building-modal-open")

            buildingModal.classList.add("building-modal-close")

            projectIndic[id].classList.remove('building-modal-close')
            
            body.classList.add('enabled-scroll')
            body.classList.remove('disabled-scroll')
        }))

    })
}

