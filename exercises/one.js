/*
 * Exercise One
 */

/*
 * Here the code for a car object
 */
let car = {
  make: 'Honda',
  model: 'Civic',
  color: 'red',
  drive: function() {
    console.log('vroom vroom');
  },
  gps: function(location) {
    console.log(`Beep boop, driving to ${location}`);
  },
  paint: function(newColor) {
    console.log(`Your car has been painted ${newColor}`);
    this.color = newColor;
  },
};

/*
 * Instead, we use a function:
 */
function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.drive = () => console.log('vroom vroom');
  this.gps = location => console.log(`beep beep, driving to ${location}`);
  this.paint = newColor => (this.color = newColor);
}

/*
 * Now we can create as many cars as we want!
 */
let coolCar = new Car('toyota', 'prius', 'grey');
coolCar.drive; // => vroom vroom
