// import {city} from "./javascript/city.js";

// let local_containerEl = document.querySelector(".local-container");

//  let htmlLocalgrid = city.map((el)=>{
//     return `
//         <div class="locals-grid">
//             <div class="local-box">
//                 <p>${el.name} <br> <span>${el.places ? el.places + "places" : ""}</span> </p>
//                 <i class="fa fa-chevron-right"></i>
//             </div>
//         </div>
//         `
// }).join("")

// local_containerEl.innerHTML= htmlLocalgrid;


//API Fetching for SearchBar
let loc =

async function fetchData() {
  let response = await fetch(
    "https://prakash-dey.github.io/api/zomato-searchbar-data.json"
  );
  let data = await response.json();
  // console.log(await response.json());
  console.log(data);
  // const result = await data.json();
  let result = data.forEach((item) => {
    console.log(item.place, item.state)
    hbtn.innerHTML += ` <h3>${item.place} , ${item.state}</h3> `;
    console.log(loc_icon);
  });
}
