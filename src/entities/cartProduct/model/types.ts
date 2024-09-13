export interface CartSliceTypes {
   cartItems: ICartProduct[];
   totalCost: number;
   count: number;
}

export interface ICartProduct extends ProductNameSpace.Product {
   count: number;
}

export type IncOrDecPayloadType = {
   incOrDec: '+' | '-';
   id: number;
};
