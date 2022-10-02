$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    var $img = $('<img>');

    var path;

    if (dancerMakerFunctionName === 'makeAirDancer') {
      path = 'assets/gifs/birb.gif';
      $img.addClass('air');
    } else if (dancerMakerFunctionName === 'makeWaterDancer') {
      path = 'assets/gifs/leftShark.gif';
      $img.addClass('water');
    } else if (dancerMakerFunctionName === 'makeBlinkyDancer') {
      path = 'assets/gifs/dancer.gif';
      $img.addClass('dancer');
    }

    $img.attr('src', path);

    dancer.$node.append($img);
    $('body').append(dancer.$node);
    console.log('Dancer', dancer);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    // console.log(window.dancers[0]);
    // console.log(event);

    // Loop over window.dancers array
    window.dancers.forEach(function(item) {
      // Call lineUp method on each dancer
      // dancer.lineUp.call(); ??
      console.log(item.lineUp);
      item.lineUp();
    });
  });

  $('body').on('mouseover', '.air', function(event) {
    $(this).css({
      'transition-property': 'transform',
      'transition-duration': '2s',
      'transform': 'rotate(3600deg)'
    });
    //console.log($(this).css('transform'));
  });
});

// Old Lineup Logic - Buggy
// window.dancers[0][0].setPosition(10, 20);
// get dancer and call it "prev"
// assign it some explicit left value
// loop over dancers array
// as we continue looping, set left val of current to left val of prev + ~some (consistent) value, but the SAME TOP VAL for all dancers