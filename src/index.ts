type Person = {
  name: string;
  age: number;
};

function hello(p: Readonly<Person>): void {
  p.age = 34;

  // do something
}

hello({ name: "Jack", age: 23 });
