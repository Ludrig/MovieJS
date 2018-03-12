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
  renderMovie(movieData);