
import { Rect }       from '../physics/index'
import Vector2D       from '../Vector/Vector2D'
import * as Dibujo    from '../render/index'
import GameObject     from './GameObject'
import * as Component from '../components/components'
import Render         from '../render/Render'

export default class Scene {
  public stage           : Dibujo.Scene = new Dibujo.Scene()
  private physicsWorld   : Rect.World = new Rect.World()
  private gameObjects    : Array<GameObject> = []
  private background     : string = '#000000'
  private paused         : boolean = false

  constructor (config?) {
    this.physicsWorld = new Rect.World(config.gravity)

    if (config.background) {
      this.background = config.background
    }
    if (config.bounds) {
      this.physicsWorld.setBounds(config.bounds)
    }
  }

  setRender (render: Render): void {
    this.stage.renderer = render
    this.stage.context = render.context
    this.stage.smoth(false)
  }

  load (gameObject: Object): void {
    this.add(create(load(gameObject)))
  }

  add (gameObject: GameObject) {
  
    for (let graphic of gameObject.graphics) {
      this.stage.add(graphic)
    }

    if (gameObject.collider) {
      gameObject.collider.load(gameObject)
      this.physicsWorld.add(gameObject.collider)
    }

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
    this.stage.clear(this.background)
    this.physicsWorld.update()
    this.stage.update()
    this.run('update')
  }

  run (method: string, data?: Array<any>) {
    for (let gameObject of this.gameObjects) {
      gameObject.run(method, data)
    }
  }

  runMouseDown (mouse) {
    const translation = this.stage.translation
    this.gameObjects.forEach(gameObject => {
      if (gameObject.collider) {
        if (mouse.x > gameObject.Transform.position.x + translation.x &&
          mouse.x < gameObject.Transform.position.x + translation.x + gameObject.collider.size.x &&
          mouse.y > gameObject.Transform.position.y + translation.y &&
          mouse.y < gameObject.Transform.position.y + translation.y + gameObject.collider.size.y) {
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
      this.stage.remove(gameObject.sprite)
    }
  }
}

function load (configuration) {
  for (let component in Object.keys(configuration)) {
    configuration[component] = new Component[component](configuration[component])
  }
}

function create (configuration) {
  return new GameObject(load(configuration))
}
