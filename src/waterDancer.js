var makeWaterDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeWaterDancer.prototype = Object.create(makeDancer.prototype);
makeWaterDancer.prototype.constructor = makeWaterDancer;

// things water dancers can do ?? Swim
// takes in : positional "location" or similar
// method functionality: move position, interact with other water dancers in some way
makeWaterDancer.prototype.swim = function(loc) {
  // set up location with makeDancer's setPosition method once we figure out how to access
};