
import Vector2D       from '../Vector/Vector2D'
import { Rect }       from '../physics/index'
import { GameObject } from '../lienzo'

export default class Collider  {
  private static      : boolean
  private restitution : Vector2D
  private collision   : Function
  private gameObject  : GameObject
  private collider    : Rect.Dynamic|Rect.Collider
  private size        : Vector2D|string

  constructor (configuration) { 
    this.restitution = configuration.restitution
    this.size        = configuration.size
    this.static      = true
  }

  load (gameObject) {
    if (this.size === 'fit') {
      if (this.static) {
        this.collider = new Rect.Collider(
          gameObject.transform.position,
          gameObject.sprite.getSize()
        )
      }
      else {
        this.collider = new Rect.Dynamic(
          gameObject.transform.position, 
          this.restitution,
          gameObject.sprite.getSize()
        )
      }
    }
    
    else {
      if (this.static) {
        this.collider = new Rect.Collider(
          gameObject.transform.position,
          this.size
        )
      }
      else {
        this.collider = new Rect.Dynamic(
          gameObject.transform.position, 
          this.restitution,
          this.size
        )
      }
    }

    if (!gameObject.sprite.animation) {
      gameObject.sprite.scale = new Vector2D(
        this.size.x / gameObject.sprite.image.width,
        this.size.y / gameObject.sprite.image.height)
    }
  
    this.collision = (other) => {
      gameObject.run('collision', [other])
    }
    gameObject.collider = this.collider
  }
}
