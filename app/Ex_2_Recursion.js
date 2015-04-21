//I can not wrap my head around a way to structure this so that using
//isEven within isEven does not make everything go crazy.  Here are
//a few attempts but even while writing them I knew they wouldn't
//work, but didn't know how to structure them otherwise.
//I wrote a working non recursive version below just so I
//had something to turn in.


//failed attempt
var isEven = function(number) {
  var even = 0
  var odd = 1

  if ((isEven - 2)%2 = even) {
    return true
  } else {
    return false
  }

};


________________________
//works non recursively

var isEven = function(number) {
  if (number%2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(8));

//and again with the 1 and 0 defined as told even though they do nothing in the function

var isEven = function(number) {
  var even = 0;
  var odd = 1;

  if (number%2 === 0) {
    return true;
  } else if (number < 0) {
    return undefined;
  } else {
    return false;
  }
};

console.log(isEven(1));

__________________________
//stack overflow - do not understand how to use the function within itself

var isEven = function(number) {

  if (isEven(number)%2 === 0 ) {
    number = true;
  } else {
    return false;
  }

};

console.log(isEven(1));
