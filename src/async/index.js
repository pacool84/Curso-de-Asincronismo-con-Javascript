const funAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!"), 9000)
      : reject(new Error("Error!!"));
  });
};

const anotherFn = async () => {
  const something = await funAsync();
  console.log(something); //3ro
  console.log("Hello"); //4to
};

console.log("Before"); //1ro
anotherFn();
console.log("After"); //2do
