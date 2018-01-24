import { Vector } from '../../lienzo'

export default {
  Transform: {
    position: new Vector(500, 600),
    scale: new Vector(0.5, 0.5)
  },
  Collider: {
    size: 'fit',
    static: true
  },
  Animation: {
    src: 'assets/coin.png',
    frameRate: 100,
    size: new Vector(700 / 6, 200)
  },
  Script: {
    collision (other) {
      if (other.gameObject.name === 'character') {
        other.gameObject.coins++
        this.destroy()
      }
    }
  }
}
