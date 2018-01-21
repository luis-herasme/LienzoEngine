
/* global Image */

import Vector2D from '../Vector/Vector2D'

class Sprite {
  public context
  public position: Vector2D
  public scale: Vector2D
  public anchor: Vector2D
  public rotation: number
  public image

  constructor (
    src     : string,
    position: Vector2D = new Vector2D(1, 1),
    scale   : Vector2D = new Vector2D(1, 1),
    rotation: number = 0,
    anchor  : Vector2D = new Vector2D(0.5, 0.5)) {
    this.load(src)
    this.position = position
    this.scale = scale
    this.anchor = anchor
    this.rotation = rotation
  }

  load (src: string): void {
    this.image = new Image()
    this.image.src = src
  }

  getSize (): Vector2D {
    return new Vector2D(this.scale.x * this.image.width,
    this.scale.y * this.image.height)
  }

  render (): void{
    this.context.save()
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(this.rotation)
    const realWidth = this.scale.x * this.image.width
    const realHeight = this.scale.y * this.image.height

    this.context.drawImage(
      this.image,
      -(realWidth * this.anchor.x),
      -(realHeight * this.anchor.y),
      realWidth,
      realHeight
    )

    this.context.restore()
  }
}

export default Sprite
