import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  console.log(data);
  return data;
}

const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`); //Hacemos el llamado de todos nuestros productos
    const product = await fetchData(`${urlApi}/products/${products[0].id}`); //Hacemos el llamado de un solo producto
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}` //Hacemos el llamado de las categorias
    );
    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction(API);
