function factorial(n) {
  result = n
  for( let i = n-1; i>1; --i){
    result *= i;
  }
  
  return result
}
alert(factorial(0));
alert(factorial(1));
alert(factorial(3));
alert(factorial(5));
