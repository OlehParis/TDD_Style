function returnsThree() {
  return 3
}

function reciprocal(n) {
  return n < 1 || n > 1000000 ? RangeError(`Out of bounds`) : 1 / n
}

// try{
//   console.log(reciprocal(-4))
//   console.log(reciprocal(3))
// }catch(e){
//   console.log(e)
// }

console.log(reciprocal(3))
  

module.exports = {
  returnsThree,
  reciprocal
};
