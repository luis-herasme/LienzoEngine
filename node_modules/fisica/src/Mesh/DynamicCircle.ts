import Body from './Body'

class Circle extends Body {
    
    constructor (config) {
        super(config)
        this.center = config.position
        this.far = config.radius
    }

    update() {
        this.acceleration.div(this.mass)
        this.velocity.add(this.acceleration)
        this.velocity.mult(this.friction)
        this.center.add(this.velocity)
        this.acceleration.mult(0)
    }
}

export default Circle
