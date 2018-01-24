
import Animation  from '../render/Animation'
import Vector2D   from '../Vector/Vector2D'

export default class AnimationComponent {
  private src       : string
  private size      : Vector2D
  private frameRate : number
  private loop      : boolean

  constructor (config) {
    this.src       = config.src
    this.loop      = config.loop
    this.size      = config.size? config.size: 100
    this.frameRate = config.frameRate? config.frameRate: 1000 / 60
  }
  
  load (gameObject, Scene) {
    const animation = new Animation(
      this.src,
      gameObject.Transform.scale,
      gameObject.Transform.position,
      this.frameRate,
      this.size)
    Scene.stage.add(animation)
  }
} 
