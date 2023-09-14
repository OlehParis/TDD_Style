const { returnsThree, reciprocal } = require('../problems/number-fun')
const {expect, should} = require("chai")

describe("returnsThree", function(){
    it("should return 3", function(){
        expect(returnsThree()).to.be.eql(3)
    })
})

describe("reciprocal", function(){ 
    const n = 5;
     
    it("should return the reciprocal of the given number", function(){
        expect(reciprocal(4)).to.be.eql(0.25);
     
    })
    // it("should throw an error if given number is 0", function(){
    //     expect.fail("0 can not be divided")
    // })
   
    it("should throw en error", function(){
        expect(reciprocal(-1)).to.throw(new RangeError("fail"))
    })
})
