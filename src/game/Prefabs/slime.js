import { Vector } from '../../lienzo'

export default {
  Transform: {
    position: new Vector(600, 250),
    scale: new Vector(0.5, 0.5)
  },
  Collider: {
    size: new Vector(100, 50)
  },
  Sprite: 'assets/Slime.png',
  Script: {
    update () {
     // this.collider.addForce(new Vector(80, 0))
    }
  }
}
