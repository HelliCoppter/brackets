module.exports = function check(str, bracketsConfig) {
  
  let stack = []
  let mask = []

  for (let stepArray of bracketsConfig) {
    for (let item of stepArray) {
      mask.push(item)
    }
  }

  for(let bracket of str) {

    let bracketsIndex = mask.indexOf(bracket)
    let bracketsLastIndex = mask.lastIndexOf(bracket)
    let counter = 0;

    if (bracketsIndex === -1){
      continue
    }
      
    if (bracketsIndex === bracketsLastIndex) {
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false
        }
      }
    } 
    else {
      if (stack[stack.length - 1] === bracket) {
        stack.pop()
      } else stack.push(bracket)
    }



      
  }
    
  return stack.length === 0
}
