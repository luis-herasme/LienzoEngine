
import Body from './Body'
import Figure from './Figure'

class Mesh extends Body {
    public vertices: Figure
    constructor (config) {
        super(config)
        this.vertices = new Figure()
        config.vertices.forEach((vertex) => this.vertices.add(vertex))
        this.center = this.vertices.center()
        this.far = this.vertices.far(this.center)
    }
    update() {
        this.acceleration.div(this.mass)
        this.velocity.add(this.acceleration)
        this.vertices.translate(this.velocity)
        this.velocity.mult(this.friction)
        this.center = this.vertices.center()
        this.acceleration.mult(0)
        this.far = this.vertices.far(this.center)
    }
}

export default Mesh
