import { Vector } from '../../lienzo'

export default {
  Transform: {
    position: new Vector(i * 500, 600),
    scale: new Vector(0.5, 0.5)
  },
  Collider: {
    size: 'fit',
    static: true
  },
  Animation: {
    src: 'assets/coin.png',
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