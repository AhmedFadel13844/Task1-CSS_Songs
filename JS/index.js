// var data = [];
// var hiddenDiv = document.querySelector(".hiddenDiv");
// var caption = document.querySelector(".hiddenDiv .caption");
// var links = document.querySelectorAll("nav ul li a")
// var currentClick = "";
// var container1 = document.querySelector(".row");
// var btnClick = document.getElementsByClassName("btnClick");
// var closeClick = document.querySelector(".hiddenDiv i");
// var imgDecs = document.querySelector(".imgDecs");
// var displayImg = document.getElementById("displayImg");
// var detailsId="";

// getRecipes("pizza");

// function getRecipes(meal){
//      var httpRequest = new XMLHttpRequest();
//      httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
//      httpRequest.send();

//      httpRequest.addEventListener("readystatechange",function(){
//       if(httpRequest.readyState==4){
//        data=JSON.parse(httpRequest.response).recipes;
//        showData();
//       }
//      })
// }
//      function showData(){
//           var cartona = "";
//           for(var i =0;i<data.length;i++){
//                imgId = data[i].recipe_id;
//            cartona+=
//            `
//             <div class="col-md-3 my-2 text-capitalize">
//              <div>
//                   <img class="w-100" style="height:200px" src="${data[i].image_url}">
//                   <h5 class="my-2">${data[i].title}</h5>
//                   <a href="${data[i].source_url}" class="btn btn-info" target="_blank">Source</a>
//                   <button class="text-capitalize btn btn-warning btnClick" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=(getRecipesId(${data[i].recipe_id}))>details</button>
//              </div>
//             </div>
//           `
//           }
//           container1.innerHTML=cartona;
//          }

//          for(var i=0;i<links.length;i++){
//           links[i].addEventListener("click",function(e){
//           getRecipes(e.target.text);
//           })
//           }

//           async function getRecipesId(recipeId){
//                var responseId = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
//                 detailsId = await responseId.json();
//                showModel();
//           }

//         function showModel(){
//           var displayId = 
//           `
//           <img class="w-100 h-25 recipe-img" src=${detailsId.recipe.image_url}>
//           <h6 class="my-2">${detailsId.recipe.publisher}</h6>
//          `
//          displayImg.innerHTML=displayId;
//         }


let showMe = document.getElementById("btn");
let song_div = document.getElementById("songs_div");


showMe.addEventListener("click", function () {
     showMe.style.display = "none";
     addContent();
})

const songs = [
     "Time to Pretend",
     "O-o-oh Child",
     "Wish You Were Here",
     "Heroes",
     "I Put a Spell on You",
     "Call Me",
     "Paper Planes",
     "Jolene",
     "You Don't Own Me",
     "Fast Car",
     "Run the World (Girls)",
     "Superstition"
];

// let box_div = document.createElement("div");
function addContent() {
     let cartona = "";

     for (let i = 0; i < songs.length; i++) {
          cartona += `
               <div class="col-6 d-flex my-1 text-nowrap p-1">
                         <span class="bg-secondary border-1 p-2 mx-1 rounded-circle border-light" style="cursor:pointer; background-color:#6834a0 !important;">#${i + 1}</span>
                         <p style="cursor:pointer;margin-top:5px" class="d-flex lh-lg">${songs[i]}</p>
                         </div>
          `
               ;
     }
     song_div.innerHTML = cartona;
     song_div.style.cssText = "color:white;border:1px solid white;";
}