
import { Animation } from 'dibujo'
import { Vector2D } from 'vector_class'

class AnimationComponent extends Animation{

  private src: string
  private size: Vector2D
  private frameRate: number
  private loop: boolean

  constructor(config) {
    this.src = config.src
    this.loop = config.loop
    this.size = config.size ? config.size : 100
    this.frameRate = config.frameRate ? config.frameRate : 1000 / 60
  }

  load(gameObject, scene) {
    const animation = new Animation({
      src: this.src,
      position: gameObject.Transform.position,
      scale: gameObject.Transform.scale,
      frameRate: this.frameRate,
      size: this.size
    })
    scene.stage.add(animation)
  }

  destroy(scene) {
    scene.destroy(this)
  }
}

export default AnimationComponent
