
import GameObject from './GameObject'

class ScriptManager {

  private methods: Object = {}
  private gameObject: GameObject

  constructor (gameObject: GameObject) {
    this.gameObject = gameObject
  }

  add (scripts: Array<Object>): void {
    scripts.forEach(script => this.addOne(script))
  }

  addOne (script): void {
    Object.keys(script).forEach(method => {
      if (!this.methods[method]) this.methods[method] = []
      this.methods[method].push(script[method].bind(this.gameObject))
    })
  }

  run (name, params): void {
    if (this.methods[name]) {
      this.methods[name].forEach(method => {
        //if (params) {
        method(...params)
        /*} else {
          method()
        }*/
      })
    }
  }
}

export default ScriptManager
