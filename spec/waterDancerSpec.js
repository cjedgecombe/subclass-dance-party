describe('waterDancer', function() {

  var waterDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    waterDancer = new makeWaterDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(waterDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(waterDancer.$node, 'toggle');
  //   waterDancer.step();
  //   expect(waterDancer.$node.toggle.called).to.be.true;
  // });
  it('should have a "swim" method', function() {
    expect(typeof waterDancer.swim).to.equal('function');
  });

  it('should inherit a "lineUp" method from dancer super class', function() {
    expect(typeof waterDancer.lineUp).to.equal('function');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(waterDancer, 'step');
      expect(waterDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(waterDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(waterDancer.step.callCount).to.be.equal(2);
    });
  });
});
