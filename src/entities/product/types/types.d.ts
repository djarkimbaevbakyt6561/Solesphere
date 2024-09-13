/* eslint-disable @typescript-eslint/no-unused-vars */
namespace ProductNameSpace {
   type GetProductsByCategoryIdRequest = number;
   type GetProductsByCategoryIdResponse = Product[];

   type GetProductsWithFilterRequest = {
      categoryId?: string;
      title?: string;
      priceMin?: string;
      priceMax?: string;
      limit: string;
   };
   type GetProductsWithFilterResponse = Product[];

   type GetProductByIdRequest = string;
   type GetProductByIdResponse = Product;

   type Product = {
      id: number;
      title: string;
      price: number;
      description: string;
      images: string[];
      creationAt: string;
      updatedAt: string;
      category: {
         id: number;
         name: string;
         image: string;
         creationAt: string;
         updatedAt: string;
      };
   };
}
