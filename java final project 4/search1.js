

   



async function search(){

        
    

        const searchInput = document.querySelector('.searchUserInput').value;
        const moviePosters = document.querySelector('.movie__posters');
        const searchSection = document.querySelector('.search__container')

       /* TRYING TO GET HOME PAGE INPUT TO TRANSFER TO SEARCH PAGE INPUT
       
       const homeInputRetrieve = localStorage.getItem('homeInput');
        if(searchInput){
        searchInput.placeholder = `${homeInputRetrieve}`;}*/

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=9f913228&s=${searchInput}`)
    
        if(!response.ok){console.log('response not okay')}
              
        const data = await response.json();
        console.log(data)
        
        if(data.Search){
              moviePosters.innerHTML = data.Search.slice(0, 6).map((movie) => moviePosterHTML(movie)).join("") 
        }
        else{    moviePosters.innerHTML = `<p> "No Movies Found"</p>`};

        searchSection.style.height= '30vh';

    }
    catch{
        console.error("Trouble finding data", error)
    }

}

/*  TRYING TO GET SEARCH PAGE INPUT TO USE ENTER KEY TO ACTIVATE FUNCTION

const searchInput = document.querySelector('.searchUserInput')
searchInput.addEventListener("keydown",function(event){
if( event.key === "Enter"){
    event.preventDefault();
   search()
}})*/



function moviePosterHTML(movie){
    return  `<div class="movie" onclick="showPlot('${movie.imdbID}')">
                <div class="title">${movie.Title}</div>
                <img src="${movie.Poster}" alt="No Poster Available" class="poster">
                <div class="movie__description--hidden-face">
                    <h1>Click here to find out more<br>
                    <i class="fa-solid fa-arrow-right"></i></h1>
                </div>
            </div>`;}

const movieDescriptionHiddenFace= document.querySelector('.movie__description--hidden-face')

movieDescriptionHiddenFace.addEventListener("click", showPlot(imdbID))

function showPlot(imdbID){
   localStorage.setItem("imdbid", imdbID);
   window.location.href=(`${window.location.origin}/posterDescription.html`);

}
