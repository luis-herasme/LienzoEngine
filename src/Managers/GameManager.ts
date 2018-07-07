
import { Render } from 'dibujo'
import GameScene from './GameScene'
import { Vector2D } from 'vector_class'

/**
 * has 3 optional parameters in the configuration
 * id the id of the canvas
 * width and height
 */
class GameManager {

  public render: Render
  public gameScene: GameScene

  constructor(configuration) {
    const id = configuration.id ? configuration.id : undefined
    const width = configuration.width ? configuration.width : undefined
    const height = configuration.height ? configuration.height : undefined

    this.render = new Render(id, width, height)
    this.gameScene = new GameScene(this.render)
    this.initEvents()
  }

  initEvents() {
    let keys = {}

    setInterval(() => {
      Object.keys(keys).some((key) => {
        if (keys[key]) {
          if (!this.gameScene.paused) {
            this.gameScene.run('keyPress', [keys])
          }
          return true
        }
      })
    }, 20)
  
    document.addEventListener('mousedown', function (event) {
      if (!this.gameScene.paused) {
        this.gameScene.run('globalMouseDown', [new Vector2D(event.clientX, event.clientY)])
        this.gameScene.runMouseDown(event, [new Vector2D(event.clientX, event.clientY)])
      }
    })
  
    document.addEventListener('mousemove', function (event) {
      if (!this.gameScene.paused) {
        this.gameScene.run('globalMouseMove', [new Vector2D(event.clientX, event.clientY)])
      }
    })
  
    document.addEventListener('mouseup', function (event) {
      if (!this.gameScene.paused) {
        this.gameScene.run('globalMouseUp', [new Vector2D(event.clientX, event.clientY)])
      }
    })
  
    document.addEventListener('keydown', function (event) {
      keys[event.key] = true
      if (!this.gameScene.paused) {
        this.gameScene.run('keyDown', [event.key])
      }
    })
  
    document.addEventListener('keyup', function (event) {
      keys[event.key] = false
      if (!this.gameScene.paused) {
        this.gameScene.run('keyUp', [event.key])
      }
    })
  }
}

  /*
  getTranslation(): Vector2D {
    return this.gameScene.stage.translation
  }

  start(): void {
    setInterval(() => {
      this.gameScene.update()
    })
  }
*/




function mouseDown(manager: GameManager, mouse: Vector2D) {
  const translation = manager.gameScene.stage.translation
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

export default GameManager
