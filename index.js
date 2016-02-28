(function(){

  'use strict';

  var touchArea1 = document.getElementById('js-touch-area-1'),
      hammer1 = new Hammer.Manager(touchArea1);

  var touchArea2 = document.getElementById('js-touch-area-2'),
      hammer2 = new Hammer.Manager(touchArea2);

  var touchArea3 = document.getElementById('js-touch-area-3'),
      hammer3 = new Hammer.Manager(touchArea3);

  var pan = new Hammer.Pan(),
      tap = new Hammer.Tap(),
      press = new Hammer.Press(),
      pinch = new Hammer.Pinch(),
      rotate = new Hammer.Rotate(),
      swipe = new Hammer.Swipe();

  hammer1.add([pan, tap]);
  hammer1.on('panleft panright panup pandown tap', function(event) {
    console.log(event);

    touchArea1.textContent = event.type;
  });

  hammer2.add([press, pinch]);
  hammer2.on('press pressup pinchin pinchout', function(event) {
    console.log(event);

    touchArea2.textContent = event.type;
  });

  hammer3.add([rotate, swipe]);
  hammer3.on('rotate swipeleft swiperight swipeup swipedown', function(event) {
    console.log(event);

    touchArea3.textContent = event.type;
  });

}());
