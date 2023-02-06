import { createContext, ReactElement, useState, useEffect } from "react";
import * as inventory from "../../data/products.json";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};
//this is each individial product

export type UseProductsContextType = { products: ProductType[] }; //this is defining the type for the context, an object with a key of products, with an array of objects that match ProductType

const initContextState: UseProductsContextType = { products: [] }; //defining the initial state of the context

const initState: ProductType[] = inventory.products; //the array of products for the state within provider

type ChildrenType = { children?: ReactElement | ReactElement[] };

//creating context
const ProductsContext = createContext<UseProductsContextType>(initContextState);

//provider
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  //   useEffect(() => {
  //     //define async function to get products
  //     const fetchProducts = async (): Promise<ProductType[]> => {
  //       const data = await fetch("http://localhost:5173/products")
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .catch((err) => {
  //           if (err instanceof Error) {
  //             console.log(err.message);
  //           }
  //         });
  //       return data;
  //     };
  //     //call function and assign the data to products state using setProducts
  //     fetchProducts().then((products) => {
  //       setProducts(products);
  //     });
  //   }, []);

  console.log("hello");
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContext;
