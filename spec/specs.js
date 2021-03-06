
describe('vowelReplace', function() {
  it("will replace vowel a with -", function() {
    expect(vowelReplace("a")).to.equal("-");
  });
  it("will replace any vowel with -", function() {
    expect(vowelReplace("u")).to.equal("-");
  });
  it("will replace any vowel with -", function() {
    expect(vowelReplace("Once upon a time")).to.equal("-nc- -p-n - t-m-");
  });
  it("will replace any vowel with -", function() {
    expect(vowelReplace("Once upon a time there was a dragon")).to.equal("-nc- -p-n - t-m- th-r- w-s - dr-g-n");
  });
});


// describe('getRemainder', function(){
//   it("returns output array of counter added to itself until reaching input1 ", function(){
//     expect(getRemainder(30, 5)).to.equal(5, 10, 15, 20, 25, 30);
//   });
// });
