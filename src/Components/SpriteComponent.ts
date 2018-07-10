
import { Picture } from 'dibujo'
import { Scene } from 'dibujo'
import { Vector2D } from 'vector_class'
import GameObject from '../Managers/GameObject'
import GameScene from '../Managers/GameScene'

class SpriteComponent {
  private src: string
  public sprite: Picture

  constructor(src) {
    this.src = src
  }

  load(gameObject: GameObject, Scene: GameScene): void {
    this.sprite = new Picture(
      this.src,
      gameObject.TransformComponent.position,
      gameObject.TransformComponent.scale,
      gameObject.TransformComponent.rotation,
      new Vector2D(0, 0))
    Scene.stage.add(this.sprite)
  }

  destroy(scene: Scene) {
    scene.destroy(this)
  }
}

export default SpriteComponent
