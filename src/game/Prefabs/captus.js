import { Vector } from '../../lienzo'

export default {
  Transform: {
    position: new Vector(500, 500),
    scale: new Vector(0.75, 0.75)
  },
  Collider: {
    static: true,
    size: 'fit'
  },
  Sprite: 'assets/cactus.png',
  Script: {
    collision (other) {
      if (other.gameObject.name === 'character') {
        other.gameObject.health--
        this.destroy()
      }
    }
  }
}
