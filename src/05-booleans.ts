(() => {
  let isEnable: boolean = true;
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  // if ternario
  const random: number = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);
})();
// recordar funcion implicita autoejecutable
