export interface Product {
  name: string;
  price: number;
  image: any;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
