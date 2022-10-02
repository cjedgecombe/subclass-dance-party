describe('airDancer', function() {

  var airDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    airDancer = new makeAirDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(airDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have new css transition on mouseover', function() {
  //   // get img element
  //   // get element style attribute
  //   // check if style attr has transform prop
  //   expect(airDancer.$node.css('transition-duration')).to.equal('2s');
  // });

  it('should inherit a "lineUp" method from dancer super class', function() {
    expect(typeof airDancer.lineUp).to.equal('function');
  });

  it('should have a "fly" method', function () {
    expect(typeof airDancer.fly).to.equal('function');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(airDancer, 'step');
      expect(airDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(airDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(airDancer.step.callCount).to.be.equal(2);
    });
  });
});
