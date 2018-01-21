
import Sprite   from '../render/Sprite'
import Vector2D from '../Vector/Vector2D'

export default class SpriteComponent {
  private src: string

  constructor (src) {
    this.src = src
  }

  load (gameObject) {
    const sprite = new Sprite(
      this.src,
      gameObject.transform.position,
      gameObject.transform.scale,
      gameObject.transform.rotation,
      new Vector2D(0, 0))
    gameObject.graphics.push(sprite)
  }
}
