
  import {movieData} from "./data";
  import * as $ from "jquery";
function renderMovie(movie){
    // document.getElementById("movieTitle").innerText = movie.title;
    // document.getElementById("plot").innerText = movie.plot;
    // document.getElementById("poster").setAttribute("src", movie.img);
    // let actors = "";
    // for (let index = 0; index < movie.actors.length; index++) {
    //      actors += "<li>" + movie.actors[index] + "</li>";
        
    // }
    // document.getElementById("actorList").innerHTML = actors;
   
    $("#movieTitle").text(movie.title);
    $("#plot").text(movie.plot);
    $("#poster").attr("src", movie.img);
    
    $("#actorList").empty();
    for (let i = 0; i < movie.actors.length; i++) {
      $("#actorList").append("<li>" + movie.actors[i] + "</li>");
    }
  }
    


  function changeStarRating(rating){
    $(".filled").removeClass("filled");
    for(let i=1; i<=rating; i++){
      $("[data-rating-id=" + i + "]").addClass("filled");
    }
  }
  
  $(".starRating").on("click", "span", function(e){
   let star = $(e.target);
   let rating = parseInt(star.attr("data-rating-id"));
   changeStarRating(rating);
 });
    

        //   for (let index = 1; index <= 5; index++) {
        //     let star = document.getElementById("star" + index);
            
        //     if (index <= grade)
        //     {
        //       star.classList.add("filled");
        //     } else{
        //       star.classList.remove("filled");
        //     }
        //   }
    
   

  // for(let i=1; i<=5; i++){
  //   let star = document.getElementById("star" + i);
  //   star.addEventListener("click", function(){
  //     changeStarRating(i);
  //   });
  // }

  renderMovie(movieData);
  changeStarRating(4);
     
     
      


      