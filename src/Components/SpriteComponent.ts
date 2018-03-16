
import Sprite     from '../render/Sprite'
import Vector2D   from '../Vector/Vector2D'
import GameObject from '../Managers/GameObject'
import GameScene  from '../Managers/GameScene'

export default class SpriteComponent {
  private src: string
  public sprite: Sprite

  constructor (src) {
    this.src = src
  }

  load (gameObject: GameObject, Scene: GameScene): void {
    console.log(this.src,
      gameObject.Transform.position,
      gameObject.Transform.scale,
      gameObject.Transform.rotation)
    this.sprite = new Sprite(
      this.src,
      gameObject.Transform.position,
      gameObject.Transform.scale,
      gameObject.Transform.rotation,
      new Vector2D(0, 0))
    Scene.stage.add(this.sprite)
  }
}
