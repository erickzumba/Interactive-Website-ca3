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

  
  var roasted=10;
  var beef=15;
  var barbecue=12;
  var butterChicken=13;
  var spicyRoot=9;
  var Creamy=14;
  var choco = 5;
  var tart = 3;
  var floating = 4;
  var water = 5;
  var coca  = 4;
  var cappuc = 4;
  var total = 0;
  var check = 1;
  var sf;
  var gw;
  var adder = document.querySelector("#getme");
    adder.addEventListener("click", getMe);
    var by = document.querySelector("#out");
    by.addEventListener("click", checkOut);
    var cme = document.querySelector("#clr");
    cme.addEventListener("click", clearMe);
    function getMe() {
      meal = document.querySelector("#sf").value;
      
    
      if (check == 1) {
     
        switch (meal) {
          case "Roasted Stuffed Mushrooms":
            var rt = roasted * nbsp;
            gw.value += "Roasted Stuffed Mushrooms ";
            total += rt;
            
            break;
         
        }

      }
    }

    function checkOut() {
      gw.value += "--------------------------------------------------------------\r";
      gw.value += "Your Total Bill Is = " + total + " £ Thanks For Shopping! \r";
      gw.value += "--------------------------------------------------------------\r";
      total = 0;
    }
    function clearMe () {
      gw.value = "";
    }
