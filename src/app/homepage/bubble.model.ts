export class Bubble {
  public x: number;
  public y: number;
  public diameter: number;
  public speedX: number;
  public speedY: number;
  public spin: number;
  public label: string;
  colour1: string;
  colour2: string;

  constructor(label: string, colour1: string, colour2: string, x: number, y: number, diameter: number, speedX: number, speedY: number) {
    this.label = label;
    this.colour1 = colour1;
    this.colour2 = colour2;
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  getClass() {
    return this.label.split(" ").join("").toLowerCase()+"_bubble";
  }

  getRadius() {
    return this.diameter/2;
  }

  getArea() {
    return Math.PI*(this.getRadius()**2);
  }

  getCenterX() {
    return this.x + this.getRadius();
  }

  getCenterY() {
    return this.y + this.getRadius();
  }
}
