
import { Vector2D } from 'vector_class'
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
/*
float w = 0.5 * (A.width() + B.width());
float h = 0.5 * (A.height() + B.height());
float dx = A.centerX() - B.centerX();
float dy = A.centerY() - B.centerY();

if (abs(dx) <= w && abs(dy) <= h)
{
    // collision! 
    float wy = w * dy;
    float hx = h * dx;

    if (wy > hx)
        if (wy > -hx)
            //collision at the top 
        else
            // on the left 
    else
        if (wy > -hx)
            // on the right 
        else
            // at the bottom 
}
*/