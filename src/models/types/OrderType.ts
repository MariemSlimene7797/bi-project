export type OrderDataType = {
  instrumentId: number;
  accountId: number;
  orderCode: number;
  type: string;
  status: string;
  course: number;
  quantity: number;
  validate?: Date;
};

export type orderStatus = 'Completed' | 'Pending' | 'Failed';
//export type orderType = 'buy' | 'sell';
