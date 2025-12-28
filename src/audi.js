var Audi = function(top, left, timeBetweenSteps){
  Car.call(this,top, left, timeBetweenSteps); // use the Car constructor to initialize the 'inherited' properties.

  this.carBody.classList.add('Audi');
  this.carBody.setAttribute('title',`${this.carBody.classList[1]}`); 
};

// link the audi object to the prototype chain of the Animal object so that we have an inheritance relationship.  The audi will be able to use the functions defined in Animal after this.
Audi.prototype = Object.create(Car.prototype);

// Re-assign the correct constructor (and type) to audi objects.
Audi.prototype.constructor = Audi; 

// when the audi's step function fires, toggle between display and hidden to simulate the animal moving... sort-of
Audi.prototype.step = function(){
  Car.prototype.step.call(this);// call the Car step function on this audi object


  // toggle the body's display on each step to simulate movement
  // if (this.carBody.style.display === "none") {    
  //   this.carBody.style.display = "block";
  // } else {
  //   this.carBody.style.display = "none";
  // }
};

