
import GameScene from './GameScene'
import GameObject from './GameObject'
import { Vector2D } from 'vector_class'
import { Render } from 'dibujo'

export default class GameManager extends Render {
  public gameScene: GameScene

  constructor(id?: string, width?: number, height?: number) {
    super(id, width, height)
    initEvents(this)
  }

  setScene(scene: GameScene): void {
    this.gameScene = scene
    this.gameScene.stage.setRender(this)
  }

  getWidth(): number {
    return this.getWidth()
  }

  getHeight(): number {
    return this.getHeight()
  }

  getTranslation(): Vector2D {
    return this.gameScene.stage.translation
  }

  start(): void {
    setInterval(() => {
      this.gameScene.update()
    })
  }
}

function initEvents(manager) {
  let keys = {}

  setInterval(() => {
    Object.keys(keys).some((key) => {
      if (keys[key]) {
        if (!manager.gameScene.paused) {
          manager.gameScene.run('keyPress', [keys])
        }
        return true
      }
    })
  }, 20)

  document.addEventListener('mousedown', function (event) {
    if (!manager.gameScene.paused) {
      manager.gameScene.run('globalMouseDown', [new Vector2D(event.clientX, event.clientY)])
      manager.gameScene.runMouseDown(event, [new Vector2D(event.clientX, event.clientY)])
    }
  })

  document.addEventListener('mousemove', function (event) {
    if (!manager.gameScene.paused) {
      manager.gameScene.run('globalMouseMove', [new Vector2D(event.clientX, event.clientY)])
    }
  })

  document.addEventListener('mouseup', function (event) {
    if (!manager.gameScene.paused) {
      manager.gameScene.run('globalMouseUp', [new Vector2D(event.clientX, event.clientY)])
    }
  })

  document.addEventListener('keydown', function (event) {
    keys[event.key] = true
    if (!manager.gameScene.paused) {
      manager.gameScene.run('keyDown', [event.key])
    }
  })

  document.addEventListener('keyup', function (event) {
    keys[event.key] = false
    if (!manager.gameScene.paused) {
      manager.gameScene.run('keyUp', [event.key])
    }
  })
}

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
