
import { Vector2D } from 'vector_class'
import RigidBody from './RigidBody'
import World from '../World'

class Collider {

    public position: Vector2D
    public radius: number
    public onCollision: Function
    public onTriggerEnter: Function
    public onTriggerStay: Function
    public onTriggerExit: Function
    public World: World

    constructor(position: Vector2D, radius: number) {
        this.position = position
        this.radius = radius
    }

    collidesWith(other: Collider | RigidBody): boolean {
        return (Vector2D.distance(this.position, other.position) < this.radius + other.radius)
    }

    translate(movement: Vector2D) {
        this.World.particles.forEach((particle) => {
            const distance = Vector2D.distance(this.position, particle.position)
            if (distance.mag() < this.radius + particle.radius) {
                const direction = Vector2D.normalize(distance)
                direction.mult(this.radius + particle.radius)
                this.position.add(direction)        
            }
        })
        this.position.add(movement)
    }
}

export default Collider
