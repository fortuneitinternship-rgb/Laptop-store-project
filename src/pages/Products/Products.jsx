import ProductCard from "../../components/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "ASUS TUF Gaming F15",
    price: "74,999"
  },
  {
    id: 2,
    name: "HP Pavilion 15",
    price: "59,999"
  },
  {
    id: 3,
    name: "Lenovo LOQ Gaming",
    price: "69,999"
  },
  {
    id: 4,
    name: "Acer Aspire 5",
    price: "49,999"
  }
];

function Products() {
  return (
    <div className="container py-5">

      <h1 className="mb-4">
        Laptops
      </h1>

      <div className="row g-4">

        {products.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-3"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;