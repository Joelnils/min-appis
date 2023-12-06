// src/types/types.ts

export interface Rating {
    rate: number;
    count: number;
  }
  
  export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  export interface OlikaPropsInterface {
    enText: string,
    ettNummer: number,
    enLista: number[],
    ettObjekt: Object,
    enFunktion: () => void
   }