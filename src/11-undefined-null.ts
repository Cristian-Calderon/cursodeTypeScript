(() => {
  // let myNumber: number;
  // let myString: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; // Componentes dinamicos
  myNumber = 12;

  let myString: string | undefined = undefined; //
  myString = undefined;

  // Example:
  // function hi(name: string | null) {
  //   let hello = 'Hola ';
  //   if (name) {
  //     hello = hello + name;
  //   } else {
  //     hello = hello + 'nobody'
  //   }
  //   console.log(hello)
  // }

  /* Optional Chaining o Encadenamiento opcional no solo se puede usar con null
      sino tambien con undefined
      Tambien con funciones de la siguiente forma:
      let result = someInterface.customMethod?.();
      **/
  function hiV2(name: string | null) {
    let hello: string = 'Holaa ';
    hello = hello + name?.toUpperCase() || 'nobody';
    console.log(hello)
  }

  hiV2('Cristian')
  hiV2(null)

  // INVESTIGAR => Nullish coalescing (??)
})();
