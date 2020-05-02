import {Injectable} from '@angular/core';
import {Bubble} from './bubble.model';

@Injectable({
  providedIn: 'root',
})
export class BubbleCollisionService {
  bubbles: Bubble[];
  containerWidth: number;
  containerHeight: number;
  maxSpeed: number; //given as change per interval length. i.e. max position change of 20 every 100ms.
  minSpeed: number;
  maxSpin: number;
  private intervalLength = 100;
  private dimensionBuffer = 5;


  init(bubbles: Bubble[], elemWidth: number, elemHeight: number, maxSpeed: number, minSpeed: number, maxSpin: number) {
    this.bubbles = bubbles;
    this.containerWidth = elemWidth;
    this.containerHeight = elemHeight;
    this.maxSpeed = maxSpeed;
    this.minSpeed = minSpeed;
    this.maxSpin = maxSpin;
  }

  startControl() {
    setInterval(() => {
      for (let i = 0; i<this.bubbles.length; i++) {
        let currentBubble = this.bubbles[i];
        this.moveBubble(currentBubble);
      //first just add collisions with sides
        //look up
        if (currentBubble.y < this.dimensionBuffer && currentBubble.speedY<0){
          currentBubble.speedY *= -1;
        }
        //look down
        if (currentBubble.y + currentBubble.diameter > this.containerHeight-this.dimensionBuffer && currentBubble.speedY>0){
          currentBubble.speedY *= -1;
        }
        //look right
        if (currentBubble.x + currentBubble.diameter > this.containerWidth-this.dimensionBuffer && currentBubble.speedX>0) {
          currentBubble.speedX *= -1;
        }
        //look left
        if (currentBubble.x < this.dimensionBuffer && currentBubble.speedX<0) {
          currentBubble.speedX *= -1;
        }

        //now looking for collisions with other bubbles.
        //works by changing the axes such that the problem becomes 1 dimensional.
        for (let j = i+1; j<this.bubbles.length; j++) {
          let otherBubble = this.bubbles[j];
          //first, will collision take place?
          let nextMoveCurrent = {
            cX: currentBubble.getCenterX() + currentBubble.speedX,
            cY: currentBubble.getCenterY() + currentBubble.speedY
          }
          let nextMoveOther = {
            cX: otherBubble.getCenterX() + otherBubble.speedX,
            cY: otherBubble.getCenterY() + otherBubble.speedY
          }

          let xDiff = Math.abs(nextMoveCurrent.cX - nextMoveOther.cX),
            yDiff = Math.abs(nextMoveCurrent.cY - nextMoveOther.cY);

          let diffBetweenCenters = Math.sqrt( xDiff**2 + yDiff**2 );
          let diffIfTouching = currentBubble.getRadius() + otherBubble.getRadius();

          if (diffBetweenCenters <= diffIfTouching) {
            //we have collision
            //must consider angle of hitting and also momentum change based on how big the bubbles are.

            //get line between 2 centers. This is our new x axis
            //convert speeds to use new axis
            //y speed stays the same, only x speed changes
            //use formulas involving mass to find resultant speed components
            //convert back to old axis

            //y coordinates are minus since y=0 is higher on the page than something like y=10
            let gradient = (-nextMoveOther.cY - -nextMoveCurrent.cY) / (nextMoveOther.cX - nextMoveCurrent.cX); // y-y1 = m(x-x1)
            //theta given already in radians
            let theta = Math.atan(gradient);

            let currBSpeed = this.convertToNewAxis(currentBubble.speedX, -currentBubble.speedY, theta);
            let otherBSpeed = this.convertToNewAxis(otherBubble.speedX, -otherBubble.speedY, theta);

            let m1 = currentBubble.getArea(), m2 = otherBubble.getArea();
            //
            // let finalNewXComponentYT = 0.5 * (m1*currBSpeed.newX/m2 + 2*otherBSpeed.newX - currBSpeed.newX);
            // let otherFinalNewXComponentYT = 0.5 * (m2*otherBSpeed.newX/m1 + 2*currBSpeed.newX - otherBSpeed.newX);

            //both equations reach same answer.
            let finalNewXComponent = this.computeFinalVelocity(m1, m2, currBSpeed.newX, otherBSpeed.newX);
            let otherFinalNewXComponent = this.computeFinalVelocity(m2, m1, otherBSpeed.newX, currBSpeed.newX);

            // console.log({finalNewXComponentYT, otherFinalNewXComponentYT, finalNewXComponent, otherFinalNewXComponent})

            currBSpeed.newX = finalNewXComponent;
            otherBSpeed.newX = otherFinalNewXComponent;

            // let reverseTheta = theta < 0 ? (Math.PI/2)+theta : (Math.PI/2)-theta;
            // console.log(theta * -1)
            let reverseTheta = theta * -1;

            let currAfterCollision = this.convertToNewAxis(currBSpeed.newX, currBSpeed.newY, reverseTheta);
            let otherAfterCollision = this.convertToNewAxis(otherBSpeed.newX, otherBSpeed.newY, reverseTheta);

            currentBubble.speedX = currAfterCollision.newX;
            currentBubble.speedY = -currAfterCollision.newY;

            otherBubble.speedX = otherAfterCollision.newX;
            otherBubble.speedY = -otherAfterCollision.newY;
          }
        }
      }
      // console.log({w: this.containerWidth});
    }, 10)
  }

  //angle between x axes can be anything from -pi/2 to p1/2
  convertToNewAxis(x: number, y: number, angleBetweenXAxes: number): {newY: number, newX: number} {
    let newX = x*Math.cos(angleBetweenXAxes) + y*Math.sin(angleBetweenXAxes);
    let newY = -x*Math.sin(angleBetweenXAxes) + y*Math.cos(angleBetweenXAxes);

    return {newX, newY};
  }

  computeFinalVelocity(mass, otherMass, initialSpeed, otherInitialSpeed): number {
    return initialSpeed*((mass-otherMass)/(mass+otherMass)) + otherInitialSpeed*(2*otherMass/(mass + otherMass));
  }


  private moveBubble(bubble: Bubble) {
    bubble.x += bubble.speedX;
    bubble.y += bubble.speedY;
  }

  private getNewPosInLimits(pos: number, speed: number, min: number, max: number) {
    if (pos-speed <= min || pos+speed >= max) {
      return pos;
    } else {
      return pos+speed;
    }
  }

  setContainerWidth(width: number) {
    this.containerWidth = width;
    this.bubbles.forEach(bubble => {
      if (bubble.x > width) {
        bubble.x = width-this.dimensionBuffer;
      }
    })
  }
}
