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
};

var truck = new Car("Toyota", "Tacoma", "1999", "White");

Car.prototype.sale = function(previous_owners, current_owner) {
  this.current_owner.push(current_owner);

  this.previous_owners.push(previous_owners);

};
