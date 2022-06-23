
const check = (bet, sorted) => bet === sorted;

const result = (bet, callback) => {
  const chosen = Math.ceil(Math.random() * 5);
  if (callback(bet, chosen)) {
    return 'Lucky day, you won!';
  }
  return 'Try Again!';
}

console.log(result(4, check));
