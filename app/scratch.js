var power = function(base, exponent) {
  var result = 1;
  var count = 0;

  while (count < exponent)
    result = (result * base);
    return result;
    count = (count + 1);
};

console.log(power(2, 4));

__________________________________________________
var power = function(base, exponent) {
  var result = 1;
  var count = 0;

  while (count < exponent) {
    result = (result * base);
    count = (count + 1);
  }
    return result;
};

console.log(power(2, 4));

//Don't forget brackets after the while loop, before return


//recursive version

var power = function(base, exponent) {

  if (exponent === 0) {
    return 1;
  } else {
    return (base * power(base, exponent - 1));
  }
};

console.log(power(2, 4));


_________________________________
