
import { Vector } from '../../lienzo'

export default {
  Transform: {
    position: new Vector(0, 0),
    scale: new Vector(0.5, 0.5)
  },
  Sprite: 'assets/clouds.png',
  Script: {
    update () {
      this.transform.position.x += 5
    }
  }
}
