// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {

       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});
fetch("https://handlers.education.launchcode.org/static/planets.json")
.then((res) => {
   res.json().then((json) => {
      let index = Math.floor(Math.random() * json.length);
        console.log(json[index].name);
   
        document.getElementById("missionTarget").innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
           <li>Name: ${json[index].name}</li>
           <li>Diameter: ${json[index].diameter}</li>
           <li>Star: ${json[index].star}</li>
           <li>Distance from Earth: ${json[index].distance}</li>
           <li>Number of Moons: ${json[index].moons}</li>
        </ol>
        <img src="${json[index].image}">
        `;
     });
  });

  document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault();

    // Inputs
    let pilotName   = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel   = document.querySelector("input[name=fuelLevel]");
    let cargoMass   = document.querySelector("input[name=cargoMass]");
    
    // Outputs
    let pilotStatus   = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus    = document.getElementById("fuelStatus");
    let cargoStatus   = document.getElementById("cargoStatus");

    // Other stuff
    let faultyItems  = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");

    // Update status
    pilotStatus.innerText   = `Pilot ${pilotName.value} Ready`;
    copilotStatus.innerText = `Co-Pilot ${copilotName.value} Ready`;
    fuelStatus.innerText    = `Fuel Level high enough for launch`;
    cargoStatus.innerText   = `Cargo Level high enough for launch`; 
});

   
   
