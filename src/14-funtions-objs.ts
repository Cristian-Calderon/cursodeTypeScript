(() => {

  // La funcion tiene como parametro un objeto
  const login = (objeto: {
    email: string,
    password: number,
  }) => {
    console.log(objeto.email, objeto.password);
  }

  // Recibe un objeto
  login({
    email: 'example@some.com',
    password: 123123
  });

  console.log('\n')

//    Otro ejemplo
  type Sizes = 'small' | 'medium' | 'large' | 'huge';
  // revisar el any
  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
  products.push(data)
  }

  addProduct({
    title: 'Pro1',
    createAt: new Date(1993,1,11),
    stock: 12,
  })
  addProduct({
    title: 'Pro1',
    createAt: new Date(1993,0,12),
    stock: 12,
    size: 'medium'
  })

  console.log('Array products: ',products)

})();
