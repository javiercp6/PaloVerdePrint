export interface Offer {
    _id: string;
    title: string;
    image: string;
    material: string;
    prices: Price[];
    picture?: string;
  }
  export interface Price {
    _id: string;
    value: number;
    size: string;
  }

  export interface Picture {
    _id: string;
    name: string;
    url: string;
    price: number;
  }
  export interface Order {
    _id?: string;
    name: string;
    material: string;
    size: string;
    price: number;
    quantity: number;
    imageFile?: File
    dateCreated?: string;
    dateShipped?: string;
    customerName?: string;
    customerId?: string;
    status?: string;
    shippingId?: string;
  }
  export interface Wish {
    _id: string,
    createdAt: string,
    material: string,
    image: string,
    ownImage: boolean,
    sizePrice: number,
    photoPrice: number,
    amount: number,
    size: number,
  }

  export interface User {
    _id: string,
    email: string,
    fullName: string,
    roles: Array<string>
  }
/* 
  export interface Orden {
    _id: string;
    offer: Offer;
    products: Product[]
    picture: string;
  } */
