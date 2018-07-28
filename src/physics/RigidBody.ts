
import Vector2D from '../vector/Vector2D'

class RigidBody {

    public mass: number
    public restitution: number
    public velocity: Vector2D = new Vector2D(0, 0)
    public position: Vector2D = new Vector2D(0, 0)
    public acceleration: Vector2D = new Vector2D(0, 0)

    constructor(position, restitution, mass = 1) {
        this.position = position
        this.restitution = restitution
        this.mass = mass
    }

    addForce(force: Vector2D): void {
        this.acceleration.add(force)
    }

    momentum(): Vector2D {
        return Vector2D.mult(this.velocity, this.mass)
    }

    inelasticCollision(other): void {
        const velocity1 = this.velocity
        const velocity2 = other.velocity
        const totalMomentum = other.momentum()
        totalMomentum.add(this.momentum())
        const totalMass = this.mass + other.mass

        // This velocity
        this.velocity = Vector2D.sub(velocity2, velocity1)
        this.velocity.mult(this.restitution * other.mass)
        this.velocity.add(totalMomentum)
        this.velocity.div(totalMass)
        
        
    //    this.velocity.div(2)
        
        // Other velocity
        other.velocity = Vector2D.sub(velocity1, velocity2)
        other.velocity.mult(other.restitution * this.mass)
        other.velocity.add(totalMomentum)
        other.velocity.div(totalMass)

     //   other.velocity.div(2)
    
       // velocity.inverse()
    }

    update(): void {
        this.acceleration.div(this.mass)
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.acceleration.zero()
    }
}

export default RigidBody
