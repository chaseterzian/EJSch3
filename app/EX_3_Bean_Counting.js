//pt.1

var countBs = function(string) {

   var position = 0;
   var count = 0;
   while (position <= string.length) {
     if (string.charAt(position) === "B") {
       count = (count + 1);
       position = (position + 1);
     } else {
       position = (position + 1);
     }
   }
  return count;
};

console.log(countBs("BBCCBbB"));

_________________________________________
//pt.2

var countChar = function(string, character) {

   var position = 0;
   var count = 0;
   while (position <= string.length) {
     if (string.charAt(position) === character) {
       count = (count + 1);
       position = (position + 1);
     } else {
       position = (position + 1);
     }
   }
  return count;
};

console.log(countChar("BBCCddBdbBd", "d"));
