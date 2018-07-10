
import { Rect } from 'fisica'
import { Scene } from 'dibujo'
import GameObject from './GameObject'
import GameManager from './GameManager'

class GameScene {

  private stage: Scene
  private world: Rect.World
  private gameObjects: Array<GameObject>

  constructor(manager: GameManager) {
    this.world = new Rect.World()
    this.stage = new Scene(manager.getRender())
    this.gameObjects = []
  }

  getScene(): Scene {
    return this.stage
  }

  getWorld(): Rect.World {
    return this.world
  }

  add(gameObject: GameObject): void {
    this.gameObjects.push(gameObject)
  }

  remove(gameObject: GameObject): void {
    this.gameObjects = this.gameObjects.filter(other => gameObject.IdentifierComponent.id !== other.IdentifierComponent.id)
  }

  find(property: string, value: string): Array<GameObject> {
    return this.gameObjects.filter((gameObject) => {
      return gameObject.IdentifierComponent[property] === value
    })
  }

  run(method: string, params?: Array<any>): void {
    for (let gameObject of this.gameObjects) {
      gameObject.run(method, params)
    }
  }

  update() {
    this.stage.clearScreen()
    this.world.update()
    this.stage.render()
    this.run('update')
  }
}

export default GameScene
