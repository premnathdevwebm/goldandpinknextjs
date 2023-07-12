import React from 'react';
import styles from "./Products.module.css";
import image from "./product.jpg"
interface Product {
  name: string;
  image: any;
  description: string;
  price: number;
}

interface ProductCompProps {
  setSelectedProduct: (product: Product) => void;
}

const products: Product[] = [
  {
    name: 'Product 1',
    image: image,
    description: 'This is product 1 description.',
    price: 10.99,
  },
  {
    name: 'Product 2',
    image: image,
    description: 'This is product 2 description.',
    price: 19.99,
  },
  {
    name: 'Product 3',
    image: image,
    description: 'This is product 3 description.',
    price: 9.79,
  },
  {
    name: 'Product 4',
    image: image,
    description: 'This is product 4 description.',
    price: 21.00,
  },
  {
    name: 'Product 5',
    image: image,
    description: 'This is product 5 description.',
    price: 190.33,
  },
  {
    name: 'Product 6',
    image: image,
    description: 'This is product 6 description.',
    price: 1000.99,
  }
];

const ProductComp: React.FC<ProductCompProps> = ({ setSelectedProduct }) => {
  return (
    <div className={styles.container}>
      <h1>Available Products</h1>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <img {...product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => setSelectedProduct(product)}>Cart</button>
        </div>
      ))}
    </div>
  );
};

export { ProductComp };
