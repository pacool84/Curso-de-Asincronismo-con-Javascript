const promise = new Promise(function (resolve, reject) {
  resolve("Hello my friend Promise");
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm `);
  } else {
    reject(`There is NO cows`);
  }
});

countCows
  .then((result) => {
    //Con el .then cachamos el "resolve"
    console.log(result);
  })
  .catch((error) => {
    //Con el .catch cachamos el "reject"
    console.error(error);
  })
  .finally(() => {
    //Cachamos la finalizacion o la terminacion de la promesa
    console.log("Finally");
  });
