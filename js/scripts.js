


var vowelReplace = function(string) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i++) {
    vowels[i]
    if (string === vowels[i]) {
      string = "-";
      return string;
      
    }
  }
}
