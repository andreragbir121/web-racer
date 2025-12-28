/*
When this complete page loads into memory if any of the addCarButton is clicked, make a car object based on the type of object desired.
Add that object to the window content area.

 */
document.addEventListener("DOMContentLoaded", function() {

  // create a global array to hold the cars we create
  window.cars = []; 

  let addButtons = Array.from(document.getElementsByClassName("addCarButton"));

  // The following code block adds the functionality to the buttons used to add the different car objects to the race.
  addButtons.forEach(button => (button.addEventListener("click",() => {
    
    let carMakerFunctionName = button.getAttribute('data-car-maker-function-name');

    // get the maker function for the kind of car we're supposed to make.  All construtor functions are available on the global space.
    let carMakerFunction = window[carMakerFunctionName];

    // make a car with a random position 
    // );// !!! (notes on how to access DOM elements can be found here https://www.w3schools.com/js/js_htmldom_elements.asp) !!!  The additional logis/math below is to ensure that the object stays within the display area and does not appear over the navigation or off the screen.
    let displayPosHeight = document.body.offsetHeight * Math.random();
    let displayPosWidth = document.body.offsetWidth * Math.random()
    let car = new carMakerFunction(
      (displayPosHeight < 90) ? displayPosHeight += 90 : (displayPosHeight > document.body.offsetHeight - 40) ? displayPosHeight-=40 : displayPosHeight,
      displayPosWidth * Math.random(),
      Math.random() * 1000
    );// !!! (notes on how to access DOM elements can be found here https://www.w3schools.com/js/js_htmldom_elements.asp) !!!
    
    // find the main content div and edd the newly created car object(span element) to it.
    document.getElementById('content').append(car.carBody);
    window.cars.push(car);
  })));



  
// Write code here so that when the get ready button is clicked display a finish line and have all the cars arrange themselves in a line to the left of the screen.  The lining up is done by making sure every car has the same horiontal(x/left) positioning
const getReadyButton = document.getElementById('getReadyButton');

getReadyButton.addEventListener('click', () => {
  
  const leftMargin = 10;
  const topStart   = 20;

  // Lane height: use first car's height (fallback 60) + small gap
  const laneHeight = ((window.cars[0].carBody.offsetHeight || 60) + 12);

  // Line up: same left, increasing top
  window.cars.forEach((car, i) => car.setPosition(topStart + i * laneHeight, leftMargin));

});

// Write code here so that when the start race button is clicked the cars should start 'moving' across the screen towards the finish line.  This is done by updating each car's horizontal/left/x position so that they move/take steps repeatedly until they reach the finish line.
startRaceButton(document.getElementById('startRaceButton'));
function startRaceButton(startRaceButton) {
  startRaceButton.addEventListener('click', function() {
    // Logic to start the race
    const finishLine = document.body.offsetWidth - 100;
    window.cars.forEach((car) => {
      const raceInterval = setInterval(() => {
        if (car.left + 350 >= finishLine) {
          clearInterval(raceInterval); 
          alert(`${car.carBody.classList[1]} wins the race`);
        } else {
          car.setPosition(car.top, car.left + Math.random() * 10); // Move car forward by a random amount
        }
      }, 20);
    });
  });     
}
});

document.addEventListener('contextmenu', (element) => {

  // Check if the clicked element is a car
  if (element.target.classList.contains('car')) {
    element.preventDefault(); 

    // Remove the car from the page
    element.target.remove();

    // Remove the car
    window.cars = window.cars.filter(car => car.carBody !== element.target);
  }
});
