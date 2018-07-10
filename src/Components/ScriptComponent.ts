
import GameObject from '../Managers/GameObject'

class ScriptManager {
  private methods: Object = {}
  private gameObject: GameObject

  constructor(gameObject: GameObject) {
    this.gameObject = gameObject
  }

  add(scripts: Array<Object>): void {
    for (let script of scripts) {
      this.one(script)
    }
  }

  one(script): void {
    for (let method of Object.keys(script)) {
      if (!this.methods[method]) {
        this.methods[method] = []
      }
      this.methods[method].push(script[method].bind(this.gameObject))
    }
  }

  run(name, params): void {
    if (this.methods[name]) {
      for (let method of this.methods[name]) {
        method(...params)
      }
    }
  }
}

export default ScriptManager

/*

  runMouseDown(manager: GameManager, mouse: Vector2D) {
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
*/
