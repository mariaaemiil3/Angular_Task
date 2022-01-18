import { Product } from "./product_item.model";

export interface Cart{
    productsArray:{
      product:Product,
      quantity:number;
    }[],
    totalNumberOfElements:number;
    };