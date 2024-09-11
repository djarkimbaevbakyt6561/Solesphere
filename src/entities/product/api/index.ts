import { api as index } from 'shared/api';

const api = index.injectEndpoints({
   endpoints: build => ({
      getProductsByCategoryId: build.query<
         ProductNameSpace.GetProductsByCategoryIdResponse,
         ProductNameSpace.GetProductsByCategoryIdRequest
      >({
         query: id => ({
            url: `/v1/categories/${id}/products?limit=8&offset=0`,
            method: 'GET',
         }),
         providesTags: ['product'],
      }),
      getProductsWithFilter: build.query<
         ProductNameSpace.GetProductsWithFilterResponse,
         ProductNameSpace.GetProductsWithFilterRequest
      >({
         query: ({ categoryId, title, priceMax, priceMin, limit }) => {
            let url = `/v1/products?limit=${limit}&offset=0`;
            if (categoryId) {
               url = url.concat('&categoryId=' + categoryId);
            }
            if (title) {
               url = url.concat('&title=' + title);
            }
            if (priceMax) {
               url = url.concat('&price_max=' + priceMax);
            }
            if (priceMin) {
               url = url.concat('&price_min=' + priceMin);
            }

            return {
               url,
               method: 'GET',
            };
         },
         providesTags: ['product'],
         keepUnusedDataFor: 0,
      }),
   }),
});

export const {
   useGetProductsByCategoryIdQuery,
   useGetProductsWithFilterQuery,
} = api;
