// Frank's Snapchat JavaScript File for the best airplane catalog ever!

// Aircraft Data
// each plane is an object with properties!
// all planes are stored in an array called 'planes'
// reference: https://en.wikipedia.org/wiki/List_of_most-produced_aircraft

const planes = [
  {
    name: "Boeing 737",
    manufacturer: "Boeing",
    category: "Workhorses",
    first_flight: 1967,
    range_km: 5765,
    passenger_capacity: 189,
    cruise_speed_kmh: 842,
    status: "Active",
    fun_fact: "At any moment, there are an average of 1,000 Boeing 737s in the air..woah",
  },
  {
    name: "Airbus A380",
    manufacturer: "Airbus",
    category: "Giants",
    first_flight: 2005,
    range_km: 15200,
    passenger_capacity: 853,
    cruise_speed_kmh: 903,
    status: "Active",
    fun_fact: "The A380 is the world's largest passenger airliner!!",
  },
  {
    name: "Airbus A320",
    manufacturer: "Airbus",
    category: "Workhorses",
    first_flight: 1987,
    range_km: 6150,
    passenger_capacity: 180,
    cruise_speed_kmh: 833,
    status: "Active",
    fun_fact: "The A320 averages a take off every two seconds....."
  },
  {
    name: "Boeing 777",
    manufacturer: "Boeing",
    category: "Workhorses",
    first_flight: 1994,
    range_km: 13650,
    passenger_capacity: 396,
    cruise_speed_kmh: 905,
    status: "Active",
    fun_fact: "This was the first commercial aircraft designed entirely through software and computers...yay Computer Science!"
  },
  {
    name: "Boeing 747",
    manufacturer: "Boeing",
    category: "Giants",
    first_flight: 1969,
    range_km: 13450,
    passenger_capacity: 660,
    cruise_speed_kmh: 904,
    status: "Active",
    fun_fact: "Known as the genuine Queen of the Skies, and democratized air travel by cutting ticket prices in half"
  },
  {
    name: "Antonov An-225 Mriya",
    manufacturer: "Antonov",
    category: "Giants",
    first_flight: 1988,
    range_km: 15400,
    passenger_capacity: 0,
    cruise_speed_kmh: 800,
    status: "Destroyed",
    fun_fact: "The world's largest and heaviest aircraft ever built, unfortunately destroyed in Ukraine in 2022"
  },
  {
    name: "Concorde",
    manufacturer: "Aerospatiale/BAC",
    category: "Legends",
    first_flight: 1969,
    range_km: 7250,
    passenger_capacity: 128,
    cruise_speed_kmh: 2179,
    status: "Retired",
    fun_fact: "The Concorde flew from New York to London in under 3.5 hours in the 1990s, so fast passengers would arrive before they left in local time!"
  },
  {
    name: "Boeing 787 Dreamliner",
    manufacturer: "Boeing",
    category: "Legends",
    first_flight: 2009,
    range_km: 13950,
    passenger_capacity: 296,
    cruise_speed_kmh: 903,
    status: "Active",
    fun_fact: "The 787 has automatic sensors to detect turbulence to ensure a smooth ride"
  },
  {
    name: "Douglas DC-3",
    manufacturer: "Douglas Aircraft",
    category: "Legends",
    first_flight: 1935,
    range_km: 2400,
    passenger_capacity: 32,
    cruise_speed_kmh: 333,
    status: "Retired",
    fun_fact: "The DC-3 revolutionized air travel by being the first airliner to operate profitably without any government subsidies"
  },
  {
    name: "Boeing 727",
    manufacturer: "Boeing",
    category: "Ghosts",
    first_flight: 1963,
    range_km: 4800,
    passenger_capacity: 189,
    cruise_speed_kmh: 953,
    status: "Retired",
    fun_fact: "Once the world's most popular jet, now only seen in South America and Africa"
  },
  {
    name: "Airbus A340",
    manufacturer: "Airbus",
    category: "Ghosts",
    first_flight: 1991,
    range_km: 14800,
    passenger_capacity: 375,
    cruise_speed_kmh: 881,
    status: "Retired",
    fun_fact: "The A340 carried over 600 million passengers with no fatalities!"
  },
  {
    name: "Lockheed SR-71 Blackbird",
    manufacturer: "Lockheed",
    category: "Ghosts",
    first_flight: 1964,
    range_km: 5400,
    passenger_capacity: 0,
    cruise_speed_kmh: 3540,
    status: "Retired",
    fun_fact: "No SR-71 was ever shot down by enemy action in its entire 30+ year career, despite being targeted by over 4,000 missiles"
  }
];


// rendering the planes
// function takes the array of planes and draws a card for each one on the page
// reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

function renderPlanes(planeArray){
  // grab the card container from HTML, clear it
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  for( let i = 0; i < planeArray.length; i++){
    let plane = planeArray[i];

    // creating a new div element for the card
    const card = document.createElement("div");
    card.className = "card";

    // fill the card with the plane's data
    // use ` (template liberal) to mix text and variables using ${} in HTML
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

    card.innerHTML = `
      <div class="card-content">
        <h2>${plane.name}</h2>
        <p class="category">${plane.category}</p>
        <p>Plane Manufacturer: ${plane.manufacturer}</p>
        <p>First Flight: ${plane.first_flight}</p>
        <p>Range: ${plane.range_km} km</p>
        <p>Commercial Passenger Capacity: ${plane.passenger_capacity}</p>
        <p>Cruise Speed: ${plane.cruise_speed_kmh} km/h</p>
        <p>Status: ${plane.status}</p>
        <p class="fun-fact">Fun Fact: ${plane.fun_fact}</p>
      </div>
    `;

    // taking each card built within loop and appending to container box
    cardContainer.appendChild(card);
  }
}

// page loading
// when page is ready by loading HTML, render all planes with respect to JavaScript code
// reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

// addEventListener watches an element and runs a function when a specific event occurs
// reference: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

document.addEventListener("DOMContentLoaded", function() {
  renderPlanes(planes);
});

// first feature: Filter By Category!!!!!!
// here, we will filter the planes array to only return planes that match the selected category the user so chooses
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function filterByCategory(category){

  // if the user has the All category selected, all planes will be displayed
  if(category == "All"){
    renderPlanes(planes);
  }

  // otherwise, we will perform computation to ensure only the selected planes are displayed
  else {
    // create empty filtered array
     let filtered = [];
     // iterate through all of the plane objects
     for(let i = 0; i < planes.length; i++){
      // if the current indice of the plane we are looking at matches the selected category,
      //  push the respective plane object to the filtered array
      if(planes[i].category == category){
        filtered.push(planes[i]);
      }
     }
     // ensure we render the filtered planes 
     renderPlanes(filtered);
  }
}

// search feature
// if a user knows the plane they want to find more information about already, they can utilize the search box feature!
// we will filter for planes where name or manufacturer includes the search text
// reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event

document.addEventListener("DOMContentLoaded", function() {
  // finding input box in HTML with id matching search bar so can be stored for future manipulation
  const searchBar = document.getElementById("search-bar");

  // every time the user types a character, run this function; this is used so results update in real time every keystroke
  searchBar.addEventListener("input", function() {
    let searchText = searchBar.value.toLowerCase();
    let results = [];

    // loop through all planes
    for (let i = 0; i < planes.length; i++) {
      let nameLower = planes[i].name.toLowerCase();
      let manufacturerLower = planes[i].manufacturer.toLowerCase();

      // if the plane's name or manufacturer contains what the user typed, add it to results
      if (nameLower.includes(searchText) || manufacturerLower.includes(searchText)) {
        results.push(planes[i]);
      }
    }
    renderPlanes(results);
  }); // closes searchBar.addEventListener

}); // closes document.addEventListener