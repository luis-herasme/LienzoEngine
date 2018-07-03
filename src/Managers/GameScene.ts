
import { Rect } from 'fisica'
import { Scene } from 'dibujo'
import GameObject from './GameObject'
import load from '../utils/loader'

class GameScene {
  public stage: Scene
  public world: Rect.World = new Rect.World()
  private background: string = '#000000'
  private paused: boolean = false
  private gameObjects: Array<GameObject> = []

  constructor(config?) {
    this.world = new Rect.World(config.gravity)
    if (config) {
      if (config.background) {
        this.background = config.background
      }

      if (config.manager) {
        this.stage = new Scene(config.manager)
      }

      if (config.bounds) {
        this.world.setBounds(config.bounds)
      }

      if (config.gameObjects) {
        this.add(config.gameObjects)
      }
    }
  }

  add(gameObjects) {
    for (let gameObject of gameObjects) {
      const loaded = load(gameObject)
      this.addGameObject(loaded)
    }
  }

  addGameObject(gameObject: GameObject): void {
    gameObject.Scene = this

    for (let component in gameObject.Components) {
      const compo = gameObject.Components[component]
      if (compo.load) {
        compo.load(gameObject, this)
      }
    }

    gameObject.run('init')
    this.gameObjects.push(gameObject)
  }

  find(property: string, value: string): Array<GameObject> {
    let found = []
    for (let gameObject of this.gameObjects) {
      if (gameObject.Identifier) {
        if (gameObject.Identifier[property] === value) {
          found.push(gameObject)
        }
      }
    }
    return found
  }

  remove(gameObject: GameObject): void {
    this.gameObjects = this.gameObjects.filter(other => {
      return gameObject.Identifier.id !== other.Identifier.id
    })
  }

  run(method: string, params?: Array<any>): void {
    for (let gameObject of this.gameObjects) {
      gameObject.run(method, params)
    }
  }

  update() {
    this.stage.clear(this.background)
    this.world.update()
    this.stage.update()
    this.run('update')
  }
}

export default GameScene
