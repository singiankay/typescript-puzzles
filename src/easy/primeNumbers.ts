const generatePrimes = (limit: number) => {
	const primes = [];
  for(let i = 2; primes.length < limit; i++) {
  	if(isPrime(i)) {
    	primes.push(i);
    }
  }
  return primes[primes.length-1];
}

function isPrime(num: number) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
  }
  return num > 1;
}

export { generatePrimes }
