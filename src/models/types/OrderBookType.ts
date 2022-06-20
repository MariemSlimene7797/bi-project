export type OrderBookType = {
  id: string;
  instrumentName: string;
  accountName: string;
  type: string;
  status: string;
  price: number;
  quantity: number;
  quantityEx: number;
  dateEx: string;
};
