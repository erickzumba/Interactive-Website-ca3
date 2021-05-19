$(document).ready(function(){
    var url = "https://randomuser.me/api/?results=5&gender";
    var p = "";
    var loadMore;
   
    fetchInformation(url);

   
   
    function fetchInformation(url){
      fetch(url)
      .then((response) => (response.json()))
      .then(function(data){
         
       data.results.forEach(person => {
          p = `<div class="well">
          <img src ="${person.picture.medium}" class="img-rounded"></br>
          
          <span>Title: ${person.name.title}</span></br>
          <span>Name: ${person.name.first}</span>
          <span>${person.name.last}</span></br>
          <span>Email: ${person.email}</span>         
          <span >Gender: ${person.gender}</span>
          </div>          
          `;
          $("#results").append(p);
          
       });
       loadMore = `<button id= "loadmore" class = "btn btn-primary">Load More</button>`;
       $("#results").append(loadMore);  
       $("#loadmore").on("click",function(){
           fetchInformation(url);
           $(this).remove();
           $("#results").empty();

       });  
     
      });
   
    }
   });