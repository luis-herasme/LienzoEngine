
import { Vector } from '../../lienzo'

export default {
  Transform: {
    position: new Vector(300 * 70, 300 - 70)
  },
  Collider: {
    static: true,
    size: new Vector(70, 70)
  },
  Sprite: 'assets/malo.png'
}
