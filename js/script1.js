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
  var creamy=14;
  var choco = 5;
  var tart = 3;
  var floating = 4;
  var water = 5;
  var coke  = 4;
  var cappuc = 4;
  var total = 0;
  var check = 1;
  var meal;
  var gw;
  var quantity;
  var adder = document.querySelector("#getme");
    adder.addEventListener("click", getMe);
    var by = document.querySelector("#out");
    by.addEventListener("click", checkOut);
    var cme = document.querySelector("#clr");
    cme.addEventListener("click", clearMe);
    function getMe() {
      meal = document.querySelector("#sf").value;
      quantity = parseInt(document.querySelector("#entrybox").value);
      gw = document.querySelector("#writeme");
      if (Number.isNaN(quantity) === true) {
        alert("Only Numbers !!! Or The Field is Empty");
        check = 0;
      }
      else if (quantity<0) {
        alert("Negative value!! ");
        check = 0;
      }
      else{
        check = 1;
      }

      
    
      if (check == 1) {
        
     
        switch (meal) {
          case "Roasted Stuffed Mushrooms":
            var rt = roasted * quantity;
            gw.value += "Roasted Stuffed Mushrooms "+"Quantity: "+quantity+"Price = "+rt+" €";
            total += rt;
            quantity.value = "";
            
            break;
            case "Beef Curry":
              var rt = beef * quantity;
              gw.value += "Beef Curry "+"Quantity: "+quantity+"Price = "+rt+" €";
              total += rt;
              quantity.value = "";
              
              break;
              case "Barbecued Piri Piri Praws":
                var rt = barbecue * quantity;
                gw.value += "Barbecued Piri Piri Praws "+"Quantity: "+quantity+"Price = "+rt+" €";
                total += rt;
                quantity.value = "";
                
                break;
                case "Butter Chicken with Naan":
                var rt = butterChicken * quantity;
                gw.value += "Butter Chicken with Naan "+"Quantity: "+quantity+"Price = "+rt+" €";
                total += rt;
                quantity.value = "";
                
                break;
                case "Spicy root & Lentil Casserole":
                var rt = spicyRoot * quantity;
                gw.value += "Spicy root & Lentil Casserole"+"Quantity: "+quantity+"Price = "+rt+" €";
                total += rt;
                quantity.value = "";
                
                break;

                case "Creamy courgette lasagne":
                var rt = creamy * quantity;
                gw.value += "Creamy courgette lasagne"+"Quantity: "+quantity+"Price = "+rt+" €";
                total += rt;
                quantity.value = "";
                
                break;
                case "Chocolate Cake":
                var rt = choco * quantity;
                gw.value += "Chocolate Cake"+"Quantity: "+quantity+"Price = "+rt+" €";
                total += rt;
                quantity.value = "";
                
                break;

                case "Treacle Tart":
                var rt = tart * quantity;
                gw.value += "Treacle Tart"+"Quantity: "+quantity+"Price = "+rt+" €";
                total += rt;
                quantity.value = "";
                
                break;

                case "Floating Island":
                  var rt = floating * quantity;
                  gw.value += "Floating Island"+"Quantity: "+quantity+"Price = "+rt+" €";
                  total += rt;
                  quantity.value = "";
                  
                  break;

                  case "Water":
                  var rt = water * quantity;
                  gw.value += "Water"+"Quantity: "+quantity+"Price = "+rt+" €";
                  total += rt;
                  quantity.value = "";
                  
                  break;
                  case "Coca-Cola":
                    var rt = coke * quantity;
                    gw.value += "Water"+"Quantity: "+quantity+"Price = "+rt+" €";
                    total += rt;
                    quantity.value = "";
                    
                    break;

                    case "Cappuccino":
                    var rt = cappuc * quantity;
                    gw.value += "Cappuccino"+"Quantity: "+quantity+"Price = "+rt+" €";
                    total += rt;
                    quantity.value = "";
                    
                    break;
         
         
         
        }

      }
    }

    function checkOut() {
      gw.value += "--------------------------------------------------------------\r";
      gw.value += "Your Total Bill Is = " + total + " € Thanks For Shopping! \r";
      gw.value += "--------------------------------------------------------------\r";
      total = 0;
    }
    function clearMe () {
      gw.value = "";
    }
