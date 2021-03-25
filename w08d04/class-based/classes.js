class Rectangle {
  constructor(length, width) {
    this.length = length; // 5
    this.width = width; // 4
  }

  area() {
    return this.length * this.width;
  }
}

class Cube extends Rectangle {
  constructor(length, width, height) {
    super(length, width);
    this.height = height;
    this.width = 'something else';
  }

  volume() {
    return this.area() * this.height;
  }
}

const myRectangle = new Rectangle(5, 4);
// console.log(myRectangle.area());

const myCube = new Cube(3,4,5);
console.log(myCube.volume());
