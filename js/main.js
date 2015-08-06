// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

var Car = function (make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = "off";
  this.color = color;
  this.previous_owners = [];
  this.current_owner = [];
  this.passengers = [];
};

var truck = new Car("Toyota", "Tacoma", "1999", "White");

Car.prototype.sale = function(previous_owners, current_owner) {
  this.current_owner.push(current_owner);

  this.previous_owners.push(previous_owners);

};

Car.prototype.paint = function (color) {
  this.color = color;
};

Car.prototype.start = function () {
  this.state = "on";
};

Car.prototype.off = function () {
  this.state = "off";
};

Car.prototype.driveTo = function (destination) {
  if (this.state === "on") {
    console.log("Driving to " + destination+".");
  } else {
    console.log("Sorry, this car is off.");
  }
};

Car.prototype.park = function () {
  if (this.state === "off") {
    console.log("Parked.");
  } else {
    console.log("Sorry, the car is still on.");
  }
};

Car.prototype.pickUp = function (name) {
  if (this.state === "on") {
    this.passengers.push(name);
    console.log("Driving to pickup " +name);
  } else {
    console.log("Car is off.");
  }
};

Car.prototype.dropOff = function  (name) {
  if (this.state === "on") {
    for (var i = 0; i < this.passengers.length; i++) {
      if (name === this.passengers[i]) {
        this.passengers.splice(this.passengers[i], 1);
        console.log(this.passengers[i]);
      }
    }
  }
};









