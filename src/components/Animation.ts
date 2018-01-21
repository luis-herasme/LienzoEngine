
import Animation  from '../render/Animation'
import Vector2D   from '../Vector/Vector2D'

export default class AnimationComponent {
  private src       : string
  private size      : Vector2D
  private frameRate : number

  constructor (config) {
    this.src = config.src
    this.size = config.size? config.size: 100
    this.frameRate = config.frameRate? config.frameRate: new Vector2D(10, 10)
  }
  
  load (gameObject) {
    const animation = new Animation(this.src, gameObject.Transform.scale, gameObject.Transform.position, this.frameRate, this.size)
    gameObject.graphics.push(animation)
  }
} 
