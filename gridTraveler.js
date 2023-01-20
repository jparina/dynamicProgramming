const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0 
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

const gridTravelerMemo = (m, n, memo={}) => {
  const key = m + ',' + n
  const inverseKey = n + ',' + m
  if (key in memo || inverseKey in memo) return memo[key] 
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0 
  memo[key] = memo[inverseKey] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo)
  
  return memo[key]
}
