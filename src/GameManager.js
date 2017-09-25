const render = require('canvas_render')
const fisica = require('fisica')
const engine = new fisica.Engine()

window.addEventListener('load', function () {
  window.loaded = true
})

/**
 * This objects manages the state of the game you can change the scene that is been
 * rendered in the game and you can run methods from the scene gameObjects as events
 */
class GameManager {
  constructor () {
    this.stage = new render.Stage()
    this.engine = engine
    this.paused = false
    this.time = 1000 / 60
  }
  setScene (scene) {
    this.scene = scene
  }
  run (name) {
    this.scene.run(name)
  }
  init () {
    if (window.loaded) render.init()
    initEvents()
    this.interval = setInterval(() => {
      this.scene.run('update')
      this.scene.update()
      this.engine.update()
      this.stage.update()
      if (this.paused) this.time = 0
    }, this.time)
  }
}
/**
 * This function is called when the gameManager is initialized and
 * runs the events in the methods
 */
function initEvents () {
  let keys = {}

  setInterval(() => {
    Object.keys(keys).some((key) => {
      if (keys[key]) {
        if (!gameManager.paused) {
          gameManager.scene.run('keyPress', keys)
        }
        return true
      }
    })
  }, 20)

  document.addEventListener('mousedown', function () {
    if (!gameManager.paused) {
      gameManager.scene.run('globalMouseDown')
    }
  })

  document.addEventListener('mouseup', function () {
    if (!gameManager.paused) {
      gameManager.scene.run('globalMouseUp')
    }
  })

  document.addEventListener('keydown', function (event) {
    keys[event.key] = true
    if (!gameManager.paused) {
      gameManager.scene.run('keyDown', event.key)
    }
  })

  document.addEventListener('keyup', function (event) {
    keys[event.key] = false
    if (!gameManager.paused) {
      gameManager.scene.run('keyUp', event.key)
    }
  })
}

const gameManager = new GameManager()

module.exports = gameManager
