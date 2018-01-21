import { Vector } from '../../lienzo'

export default {
  position: new Vector(600, 250),
  collider: new Vector(100, 50),
  sprite: 'assets/Slime.png',
  script: {
    update () {
      this.collider.addForce(new Vector(80, 0))
    }
  }
}
