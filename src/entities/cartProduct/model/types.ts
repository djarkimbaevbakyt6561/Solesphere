import { IProductCard } from 'shared/consts';

export interface CartSliceTypes {
   cartItems: ICartProduct[];
   totalCost: number;
   count: number;
}

export interface ICartProduct extends IProductCard {
   count: number;
}

export type IncOrDecPayloadType = {
   incOrDec: '+' | '-';
   id: number;
};
