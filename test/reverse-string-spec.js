const reverseString = require("../problems/reverse-string.js")
const {expect} = require("chai")
describe("reverseString", function(){
    it("should reverse string", function(){
        const str = "fun"
        expect(reverseString(str)).to.be.eql("nuf")
    })
})


// describe("Computer", function () {
//     it("should have brand, OS and type properties", function () {
//       const myComp = new Computer("LG", "Windows", "PC");
//       expect(myComp).to.have.property("brand");
//       expect(myComp).to.have.property("OS");
//       expect(myComp).to.have.property("type");
//     });
  
    
//       describe("welcome static method", function () {
//         it("should log the powerOn messages for each computer", function () {
//           const comp1 = new Computer("Dell", "Windows", "PC");
//           const comp2 = new Computer("Apple", "MacOS", "Apple");
  
//           const consoleLogStub = [];
//           const originalConsoleLog = console.log;
//           console.log = (message) => {
//             consoleLogStub.push(message);
//           };
  
//           Computer.welcome(comp1, comp2);
  
//           expect(consoleLogStub).to.deep.equal([
//             "Dell PC powers on with Windows",
//             "Apple Apple powers on with MacOS",
//           ]);
  
//           console.log = originalConsoleLog;
//         });
//       });
//     });
  