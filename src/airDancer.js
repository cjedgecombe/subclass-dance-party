var makeAirDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // Some such OldStep initialization TBD
};

makeAirDancer.prototype = Object.create(makeDancer.prototype);
makeAirDancer.prototype.constructor = makeAirDancer;

// Things air dancers can do: FLY
makeAirDancer.prototype.fly = function() {
  // takes in some weird prototype chain linking
  // location property ?? TBD (some kind of positional property)
};
