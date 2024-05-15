class Shape {
    area() {
      pass;
    }
  
    perimeter() {
      pass;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return 3.14 * this.radius * this.radius;
    }
  
    perimeter() {
      return 2 * 3.14 * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(length, width) {
      super();
      this.length = length;
      this.width = width;
    }
  
    area() {
      return this.length * this.width;
    }
  
    perimeter() {
      return 2 * (this.length + this.width);
    }
  }

export default {Shape, Circle, Rectangle}