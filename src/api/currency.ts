export const enum Currency {
  BTC = 'BTC',
  USD = 'USD',
  PLN = 'PLN',
  EUR = 'EUR',
  CNY = 'CNY',
  UAH = 'UAH',
  ETH = 'ETH',
  BNB = 'BNB',
  LTC = 'LTC',
}

export type CurrencyItem = {
  label: string;
  value: string;
};

export const currencies: CurrencyItem[] = [
  {label: 'BTC', value: 'BTC'},
  {label: 'USD', value: 'USD'},
  {label: 'PLN', value: 'PLN'},
  {label: 'EUR', value: 'EUR'},
  {label: 'CNY', value: 'CNY'},
  {label: 'UAH', value: 'UAH'},
  {label: 'ETH', value: 'ETH'},
  {label: 'BNB', value: 'BNB'},
  {label: 'LTC', value: 'LTC'},
];
