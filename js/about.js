
const aboutDivs = document.querySelector(".about-company-parentdiv").children;
const aboutIndicators = document.querySelector(".about-ul").children;

for(let j=0; j<aboutIndicators.length; j++){
    aboutIndicators[j].addEventListener('click', function(){
        for(let h=0; h<aboutIndicators.length; h++){
            aboutIndicators[h].classList.remove('activated')
        }
       this.classList.add('activated')
        
       const id = this.getAttribute('data-id')
       for(let j=0; j<aboutDivs.length; j++){
           aboutDivs[j].classList.remove('activate')
       }
       aboutDivs[id].classList.add('activate')
    })
   
}
