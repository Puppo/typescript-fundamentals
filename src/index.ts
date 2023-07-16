type Person = {
  name: string;
  age: number;
  address?: string;
  city?: string;
};

type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type PersonWithAddressAndCityRequired = Required<Person>;
