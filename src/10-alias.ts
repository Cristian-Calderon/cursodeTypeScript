(()=>{
// Type Alias
  type UserID = string | number;
  let userId : UserID ;

  // Literal types tiene que ser el mismo caracter
  type Sizes = 'S'| 'M'| 'L'| 'XL' ;
  let shirtSize : Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  function greetings(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toUpperCase()}`);
    }
  }

  greetings(1,'XL')
  greetings('1323','XL')

})();
