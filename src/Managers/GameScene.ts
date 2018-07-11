import { Rect } from 'fisica'
import { Scene } from 'dibujo'
import GameObject from './GameObject'
import GameManager from './GameManager'

class GameScene {
  public renderScene: Scene
  public physicsScene: Rect.World
  private gameObjects: Array<GameObject>

  constructor(manager: GameManager) {
    this.physicsScene = new Rect.World()
    this.renderScene = new Scene(manager.getRender())
    this.gameObjects = []
  }

  add(gameObject: GameObject): void {
    this.gameObjects.push(gameObject)
  }

  remove(gameObject: GameObject): void {
    this.gameObjects = this.gameObjects.filter(other => {
      return gameObject.identifierComponent.id !== other.identifierComponent.id
    })
  }

  find(property: string, value: string): Array<GameObject> {
    return this.gameObjects.filter((gameObject) => {
      return gameObject.identifierComponent[property] === value
    })
  }

  run(method: string, params?: Array<any>): void {
    for (let gameObject of this.gameObjects) {
      gameObject.run(method, params)
    }
  }

  update(): void {
    this.physicsScene.update()
    this.renderScene.render()
    this.run('update')
  }
}

export default GameScene
