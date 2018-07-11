
import GameObject from '../Managers/GameObject'

class ScriptManager {

  private methods: Object = {}
  private gameObject: GameObject

  constructor(gameObject: GameObject) {
    this.gameObject = gameObject
  }

  add(script): void {
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
