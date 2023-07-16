type Person = {
  name: string,
  age: number,
  address: string
  city: string,
};

// type MyOmit<T, U extends keyof T> = {
//   [K in Exclude<keyof T, U>]: T[K]
// }

type PersonWithoutAddress =
  Omit<Person, 'address' | 'city'>
