import { Vector } from '../../lienzo'

export default {
  Transform: {
    position: new Vector(0, 500),
    scale: new Vector(5, 2)
  },
  Collider: {
    size: 'fit',
    static: true
  },
  Sprite: 'assets/grass.png'
}
