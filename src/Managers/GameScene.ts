
import { Rect }       from '../physics/index'
import { Scene }      from '../render/index'
import Vector2D       from '../Vector/Vector2D'
import GameObject     from './GameObject'
import Render         from '../render/Render'

export default class GameScene {
  private stage          : Scene             = new Scene()
  private world          : Rect.World        = new Rect.World()
  private background     : string            = '#000000'
  private paused         : boolean           = false
  private gameObjects    : Array<GameObject>

  constructor (config) {
    this.world                               = new Rect.World(config.gravity)
    if (config.background)  this.background  = config.background
    if (config.gameObjects) this.gameObjects = config.gameObjects
    if (config.bounds)      this.world.setBounds(config.bounds)
  }

  addGameObject (gameObject: GameObject): void {
    gameObject.scene = this
    if (gameObject.sprite) {
      gameObject.sprite.load(gameObject)
    }
    for (let graphic of gameObject.graphics) {
      this.stage.add(graphic)
    }
    if (gameObject.collider) {
      gameObject.collider.load(gameObject)
      this.world.add(gameObject.collider)
    }
    gameObject.run('init')
    this.gameObjects.push(gameObject)  
  }

  find (property: string, value: string): Array<GameObject> {
    let found = []
    for (let gameObject of this.gameObjects) {
      if (gameObject.Identifier) {
        if (gameObject.Identifier.name === name) {
          found.push(gameObject)
        }
      }
    }
    return found
  }

  destroy (gameObject) {
    this.gameObjects = this.gameObjects.filter(go => gameObject.id !== go.id)
    if (gameObject.collider) this.world.remove(gameObject.collider)
    if (gameObject.sprite)   this.stage.remove(gameObject.sprite)
  }

  update () {
    this.stage.clear(this.background)
    this.world.update()
    this.stage.update()
    this.run('update')
  }
}
