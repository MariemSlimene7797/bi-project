export type InstrumentType = {
  id: number;
  name?: string;
  isinCode?: string;
  symbol?: string;
  lastClosingPrice?: number;
  variation: number;
  openingPrice?: number;
  closingPrice?: number;
  watchCourse?: number;
  minPrice?: number;
  maxPrice?: number;
  tradedQuantity?: number;
  volume?: number;
  group?: InstrumentGroup;
};

export type InstrumentGroup = 11 | 22 | 33;
