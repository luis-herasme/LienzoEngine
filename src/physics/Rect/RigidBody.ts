import Vector2D from '../../vector/Vector2D'
import _RigidBody from './../RigidBody'
import Collider from './Collider'

class RigidBody extends _RigidBody {

  public size: Vector2D = new Vector2D(10, 10)
  public onCollision: Function
  public onTriggerEnter: Function
  public onTriggerStay: Function
  public onTriggerExit: Function

  constructor(position = new Vector2D(0, 0), size = new Vector2D(10, 10), restitution = 1) {
    super(position, restitution)
    this.size = size
    this.mass = this.size.x * this.size.y
  }

  separate(other) {
    var dx = (this.position.x + this.size.x / 2) - (other.position.x + other.size.x / 2)
    var dy = (this.position.y + this.size.y / 2) - (other.position.y + other.size.y / 2)
    var width = (this.size.x + other.size.x) / 2
    var height = (this.size.y + other.size.y) / 2
    var crossWidth = width * dy
    var crossHeight = height * dx
    //var collision='none';

    if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
      if (crossWidth > crossHeight) {
        if ((crossWidth > (-crossHeight))) {
         /* console.log('height', height)
          console.log('crossHeight', crossHeight)
          console.log('dy', dy)
          */
         this.velocity.mult(0.8)
         this.velocity.y *= -1

         this.position.y += (height - dy)
        } else {
         // console.log('left')
        }
      } else {
        if ((crossWidth > -(crossHeight))) {
         // console.log('right')
        } else {
        /*  console.log('height', height)
          console.log('crossHeight', crossHeight)
          console.log('dy', dy)
          */
         this.velocity.mult(0.8)
         this.velocity.y *= -1

         this.position.y -= (dy + height)
        }
      }
    }
    // return(collision)
  }

  collidesWith(other: RigidBody | Collider) {
    if (this.position.x < other.position.x + other.size.x &&
      this.position.x + this.size.x > other.position.x &&
      this.position.y < other.position.y + other.size.y &&
      this.size.y + this.position.y > other.position.y) {
      
      if (this.onCollision) {
        this.onCollision(other)
      }
      if (other.onCollision) {
        other.onCollision(this)
      }

      /*
      if (other instanceof RigidBody) {
        this.inelasticCollision(other)
      }
      */
      this.separate(other)
      /*
            if (other instanceof Collider) {
              console.log('Normal collision')
              this.velocity.inverse()
              this.velocity.mult(this.restitution)
            }
            */
    }
  }
}

export default RigidBody
