
import { Rect }       from '../physics/index'
import { GameObject } from '../lienzo'

export default class Collider extends Rect.Dynamic {
  public gameObject: GameObject
  public static: boolean

  constructor () {
    this.static = true

    if (this.collider) {
      if (this.collider === 'fit') {
        const collider = new Rect.Dynamic(this.transform.position, 0.25, this.sprite.getSize())
        collider.gameObject = this
        collider.position = this.transform.position
        this.collider = collider
      } else {
        const collider = new Rect.Dynamic(this.transform.position, 0.25, this.collider)

        if (!this.sprite.animation ) {
          this.sprite.scale = new Vector2D(
            this.collider.x / this.sprite.image.width,
            this.collider.y / this.sprite.image.height)
        }

        collider.gameObject = this
        collider.position = this.transform.position
        this.collider = collider
      }

      this.collision = (other) => {
        this.run('collision', [other])
      } 
    }
  }
}
