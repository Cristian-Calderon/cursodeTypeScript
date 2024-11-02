(() => {
  // Suma de numeros || Funciona que devuelve algo en este caso un string
  const calcTotal = (prices: number[]): string => {
    let total: number = 0;
    prices.forEach((item: number) => {
      total = total + item;
    });
    return total.toString();
  }

//   Funcion void que no devuelve
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);

  }
  printTotal([1, 2, 3, 4, 5,])


})();
