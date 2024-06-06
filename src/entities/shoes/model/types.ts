export interface ISizesArray {
   id: number;
   size: string;
}
export interface IShoesCard {
   id: number;
   title: string;
   image: string;
   price: number;
   discount: number;
   sizes: ISizesArray[];
}
