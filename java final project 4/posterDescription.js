





function posterDescriptionFn(){
  const posterDescriptionData =  localStorage.getItem("imdbid");
  
  
    console.log(posterDescriptionData);


}
posterDescriptionFn()


async function posterDescriptionDataFn() {
      const posterDescriptionData =  localStorage.getItem("imdbid");
  
  
   try{ const response2 = await fetch(`http://www.omdbapi.com/?apikey=9f913228&i=${posterDescriptionData}`)
        
        if(!response2.ok){
        console.log("trouble in response")}

        const data2 = await response2.json("")

        const dataPosters = document.querySelector('.data__posters')
       dataPosters.innerHTML = posterDescriptionHTML(data2)

        console.log(data2)

        }
    catch(error){console.error("Trouble finding Api", error)
        }
    }
posterDescriptionDataFn()




function posterDescriptionHTML(movie){
    return `<div class="data__year">
        <label>Year</label>
        <p class="data__year">${movie.Year}</p>
    </div>
    <div class="data__plot">
        <label>Plot</label>
        <p class="plot__para">${movie.Plot}</p>
    </div>`}




