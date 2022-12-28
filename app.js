const loc = document.querySelector("#drop-icon");
let loc_icon = document.getElementsByClassName("loc-icon");
let result;

// async function apiCall() {

//   const data = await fetch(
//     "https://prakash-dey.github.io/api/zomato-searchbar-data.json"
//   );
//   const result = await data.json();
//   result.forEach(item => {
//     loc_icon.innerHTML += `<h1 class="name">${item.Full_name}</h1>
//                         <div>
//                           <h3>${item.email}</h3>
//                           <h3>${item.number}</h3>
//                         </div>
//       `;
//   })
// }
// apiCall();

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
    all_city.innerHTML += `
                              <h3>${item.place} , ${item.state}</h3>
                                                        
                            `;
    console.log(loc_icon);
  });
}

loc.addEventListener("click", (e)=>{
    // all_city.style.display.hidden =!all_city.style.display.hidden; 
    all_city.style.display = "block";
})



fetchData();



// {/* <h3>${item.place}</h3> */}
