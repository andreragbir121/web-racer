var Car = function(top, left, timeBetweenSteps){
  this.carBody = document.createElement("span");// car is represented as a span element.
  this.carBody.classList.add('car');
  this.top = top; // for positioning the car
  this.left = left; // for positioning the car
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(this.top, this.left);
};

Car.prototype.step = function(){    
  setTimeout(this.step.bind(this),this.timeBetweenSteps);
};

Car.prototype.setPosition = function(top, left){
  this.top = top;
  this.left = left;
  const myPosition = `top: ${top}px; left: ${left}px;`;
  this.carBody.style.cssText += myPosition; //https://www.w3schools.com/jsref/prop_style_csstext.asp
};