import Vector2D from '../../vector/Vector2D'
import RigidBody from './RigidBody'
import World from '../World'

class Collider {

    public position: Vector2D
    public size: Vector2D
    public onCollision: Function
    public onTriggerEnter: Function
    public onTriggerStay: Function
    public onTriggerExit: Function
    public World: World

    constructor(position: Vector2D, size: Vector2D) {
        this.position = position
        this.size = size
    }

    collidesWith(other: Collider | RigidBody): boolean {
        return (this.position.x < other.position.x + other.size.x &&
            this.position.x + this.size.x > other.position.x &&
            this.position.y < other.position.y + other.size.y &&
            this.size.y + this.position.y > other.position.y)
    }
/*
    translate(movement: Vector2D) {
        this.World.particles.forEach((particle) => {
            
            if (this.collidesWith(particle)) {
                this.position.add(direction)
            }
        })
        
        this.position.add(movement)
    }
*/
}

export default Collider
