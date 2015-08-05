# JavaScript Autoshop

Create a boilerplate using the Galvanize HTMl generator and then create some cars...

## Part I

The `Car()` class should have the following properties (state):

- `make`
- `model`
- `year`
- `state`
- `color`
- `previous_owners`
- `current_owner`

As a default a `Car` constructor should have the following values:

- `previous_owners` should be an empty array, `[]`.
- `current_owner` should be `manufacturer`.
- `state` should be `off`.

The `Car()` class should have the following methods (behavior):

- `sale()` - a car can be sold. This will updte the `current_owner` and `previous_owners` array
- `paint()` - a car can be painted. This will upddate the color of the car.
- `start()` - changes the state of the car to `on`
- `off()` - changes the state to `off`
- `driveTo()` - takes a destination and logs "Driving to <destination>" to the console" if the car state is `on`. Otherwise, it will log "Sorry, this car is off".
- `park()` - parks the car and logs 'Parked!' to the console only if the car state is `off`. Otherwise, it logs `Sorry, the cat is still on.`

## Part 2

Add the following property to the constructor, which defaults to an empty array. Then add the following methods:

- `pickUp()` - takes a `name` and logs "Driving to pick up <friend's name>" to the console, but only if the `car` is `on`. This also updates the `passengers` array.
- `dropOff() - takes a `name` and removes them from the passenger array if they are in the array, but only if the `car` is on.
