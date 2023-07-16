type Square = {
  type: "square";
  size: number;
};

type Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  type: "circle";
  radius: number;
};

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
  switch (shape.type) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.pow(shape.radius, 2) * Math.PI;
  }
}
