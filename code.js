function renderMovie(movie){
    document.getElementById("movieTitle").innerText = movie.title;
    document.getElementById("plot").innerText = movie.plot;
    document.getElementById("poster").setAttribute("src", movie.img);
    
    
    

    let actors = "";
    for (let index = 0; index < movie.actors.length; index++) {
         actors += "<li>" + movie.actors[index] + "</li>";
        
    }
    document.getElementById("actorList").innerHTML = actors;
    
    
    // rendering logic will go here
  }
 


 
  function changeStarRating(grade){
    for (let index = 1; index <= 5; index++) {
      let star = document.getElementById("star" + index);
      
      if (index <= grade)
      {
        star.classList.add("filled");
      } else{
        star.classList.remove("filled");
      }
    }
    
  }

  for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    star.addEventListener("click", function(){
      changeStarRating(i);
    });
  }

  renderMovie(movieData);
  changeStarRating(4);
     
     
      


      