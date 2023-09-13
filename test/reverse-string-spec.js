const reverseString = require("../problems/reverse-string.js")
const {expect} = require("chai")
describe("reverseString", function(){
    it("should reverse string", function(){
        const str = "fun"
        expect(reverseString(str)).to.be.eql("nuf")
    })
})
