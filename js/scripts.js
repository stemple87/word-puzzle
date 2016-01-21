var vowelReplace = function(string) {
  var vowels = ["a", "e", "i", "o", "u"];
debugger;
  for (var i = 0; i < vowels.length; i++) {
    if (string.indexOf(i)) {
      string = string.toLowerCase();
      string = string.replace(/[aeiou]/g, "-");
      return string;
    }
  }
}
