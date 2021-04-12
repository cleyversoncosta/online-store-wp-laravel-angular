import {ProductImageInterface} from "./product-image-interface";

export interface ProductInterface {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  regular_price: number;
  sale_price: number;
  images: Array<ProductImageInterface>
}
