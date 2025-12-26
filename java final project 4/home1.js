

function homeProjector(){

     setTimeout(() => {
        window.location.href = `${window.location.origin}/search.html`;
  }, 4000);

 const style = document.createElement('style');
    style.innerHTML =
            ` .projector__img{display: block;
            animation: projector 600ms infinite alternate
            }
            .home__header--para, .home__header--title,.search__btn, .home__input--container{display: none;}
            .projector__light{display: block;
            animation: projectorLight 600ms infinite alternate, projector 600ms infinite alternate;}`
            document.head.appendChild(style);
}    
       
const homeInput =  document.querySelector('.home__movie--search');

homeInput.addEventListener("keydown",function(event){
if( event.key === "Enter"){
    event.preventDefault();
    homeProjector()
}})

function homeToSearchInput(){

 const homeMovieSearchInput = document.querySelector('.home__movie--search').value

 console.log(homeMovieSearchInput)
 localStorage.setItem("homeInput", homeMovieSearchInput)

}
homeToSearchInput()
