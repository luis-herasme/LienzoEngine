
import {Vector2D} from 'vector_class'
import Mesh from './DynamicMesh'

class Rect extends Mesh {
    constructor (config) {
        super(config)
        const pointY = Vector2D.add(config.position, [0, config.height])
        const pointX = Vector2D.add(config.position, [config.width, 0])
        const pointXY = Vector2D.add(config.position, [config.width, config.height])
        this.vertices.add(config.position)
        this.vertices.add(pointX)
        this.vertices.add(pointXY)
        this.vertices.add(pointY)
    }
}

export default Rect