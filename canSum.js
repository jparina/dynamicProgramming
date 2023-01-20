const canSum = (targetNum, numbers, memo = {}) => {
  if (targetNum === 0) return true
  if (targetNum < 0) return false
  if (targetNum in memo) return memo[targetNum]


  for (let num of numbers) {
    const remainder = targetNum - num
    if (canSum(remainder, numbers, memo) === true){
      memo[targetNum] = true 
      return true
    }
  }
  return false
}

