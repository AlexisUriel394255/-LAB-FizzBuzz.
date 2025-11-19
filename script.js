 for (let i = 0; i <=1000; i++) {
/*El bucle for con la variable i que representa el
numero que se comienza desde 0 hasta 1000*/ 
  if (i % 3 == 0) {
    console.log("Fizz")
/*Si el numero que es la variable i es divisible por 3
se imprime en consola Fizz */
  }
  if (i % 5 == 0) {
    console.log("Buzz");
/*o si el numero que es la variable i es divisible por 5
se imprime en consola Buzz */
  }
  if (i % 3 ==0 && i % 5 ==0) {
    console.log("FizzBuzz");
    /*Si el numero es divisible entre 3 y 5
    se imprime en consola FizzBuzz */
  }
  //Si no se cumplio ninguna condicion solo se imprime el numero
  console.log(i);
  
}
