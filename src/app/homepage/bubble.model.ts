export class Bubble {
  public x: number;
  public y: number;
  public diameter: number;
  public speedX: number;
  public speedY: number;
  public spin: number;
  public label: string;

  constructor(label: string, x: number, y: number, diameter: number, speedX: number, speedY: number) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.speedX = speedX;
    this.speedY = speedY;
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
