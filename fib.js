// classic recursion of fib
const fib = (n) => {
  if (n <= 2) {
    return 1
  }
  return fib(n - 1) + fib (n - 2)
}

// fib memoization - store duplicate subproblems
// fast access data structure i.e hashmap
// keys will be arg to fn, value will be return val

const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}