import classes from '../normal/classes';

describe('Shape', () => {
  it('should have area and perimeter methods', () => {
    const shape = new classes.Shape();
    expect(shape.area).toBeDefined();
    expect(shape.perimeter).toBeDefined();
  });
});

describe('Circle', () => {
  it('should calculate the area correctly', () => {
    const circle = new classes.Circle(5);
    expect(circle.area()).toBeCloseTo(78.5); 
  });

  it('should calculate the perimeter correctly', () => {
    const circle = new classes.Circle(6);
    expect(circle.perimeter()).toBeCloseTo(37.68); 
  });
});

describe('Rectangle', () => {
  it('should calculate the area correctly', () => {
    const rectangle = new classes.Rectangle(5, 10);
    expect(rectangle.area()).toBe(50);
  });

  it('should calculate the perimeter correctly', () => {
    const rectangle = new classes.Rectangle(5, 10);
    expect(rectangle.perimeter()).toBe(30);
  });
});