const cardContainer = document.getElementById("card-container");

class Product {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

let products = [];

const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  data.forEach((element) => {
    products.push(
      new Product(
        element.title,
        element.price,
        element.description,
        element.image
      )
    );
  });

  products.forEach((element) => {
    cardContainer.innerHTML += `<div
class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
>
<a href="#">
  <img
    class="rounded-t-lg"
    src="${element.image}"
    alt=""
  />
</a>
<div class="p-5">
  <a href="#">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      ${element.title}
    </h5>
  </a>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    ${element.description}
  </p>
  <a
    href="#"
    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    price: ${element.price}$
  </a>
</div>
</div>`;
  });
};

fetchData();
