
import { Rect }     from '../physics/index'
import Vector2D     from '../Vector/Vector2D'
import * as Dibujo  from '../render/index'
import GameObject   from './GameObject'

export default class Scene {
  private physicsWorld = new Rect.World()
  private gameObjects = []

  public renderWorld: Dibujo.Scene = new Dibujo.Scene()
  public paused: boolean = false
  public backgroundColor: string = '#000000'

  constructor (config?) {
    if (config) {
      this.physicsWorld = new Rect.World(config.gravity)
      if (config.backgroundColor) this.backgroundColor = config.backgroundColor
      if (config.bounds) this.physicsWorld.setBounds(config.bounds)
    }
  }

  setRender (render) {
    this.renderWorld.renderer = render
    this.renderWorld.context = render.context
    this.renderWorld.smoth(false)
  }

  add (gameObject: GameObject) {
    gameObject.load()

    if (gameObject.collider) {
      this.physicsWorld.add(gameObject.collider)
    }

    gameObject.graphics.forEach(graphic => {
      this.renderWorld.add(graphic)
    })

    gameObject.scene = this
    gameObject.run('init')

    this.gameObjects.push(gameObject)  
  }

  findByName (name) { // NOT WORKING
    return this.gameObjects.find((gameObject) => {
      if (gameObject.name === name) return gameObject
      return false
    })
  }

  update () {
    this.renderWorld.clear(this.backgroundColor)
    this.physicsWorld.update()
    this.renderWorld.update()
    this.run('update')
  }

  run (method: string, data?: Array<any>) {
    this.gameObjects.forEach((gameObject) => gameObject.run(method, data))
  }

  runMouseDown (mouse) {
    const translation = this.renderWorld.translation
    this.gameObjects.forEach(gameObject => {
      if (gameObject.collider) {
        if (mouse.x > gameObject.transform.position.x + translation.x &&
          mouse.x < gameObject.transform.position.x + translation.x + gameObject.collider.size.x &&
          mouse.y > gameObject.transform.position.y + translation.y &&
          mouse.y < gameObject.transform.position.y + translation.y + gameObject.collider.size.y) {
          gameObject.run('mouseDown', mouse)
        }
      }
    })
  }

  destroy (gameObject) {
    this.gameObjects = this.gameObjects.filter(go => gameObject.id !== go.id)

    if (gameObject.collider) {
      this.physicsWorld.remove(gameObject.collider)
    }
    if (gameObject.sprite) {
      this.renderWorld.remove(gameObject.sprite)
    }
  }
}
