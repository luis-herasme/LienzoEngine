
import Vector2D from '../Vector/Vector2D'

export default function initEvents (manager) {
  let keys = {}

  setInterval(() => {
    Object.keys(keys).some((key) => {
      if (keys[key]) {
        if (!manager.scene.paused) {
          manager.scene.run('keyPress', [keys])
        }
        return true
      }
    })
  }, 20)

  document.addEventListener('mousedown', function (event) {
    if (!manager.scene.paused) {
      manager.scene.run('globalMouseDown', [new Vector2D(event.clientX, event.clientY)])
      manager.scene.runMouseDown(event, [new Vector2D(event.clientX, event.clientY)])
    }
  })

  document.addEventListener('mousemove', function (event) {
    if (!manager.scene.paused) {
      manager.scene.run('globalMouseMove', [new Vector2D(event.clientX, event.clientY)])
    }
  })

  document.addEventListener('mouseup', function (event) {
    if (!manager.scene.paused) {
      manager.scene.run('globalMouseUp', [new Vector2D(event.clientX, event.clientY)])
    }
  })

  document.addEventListener('keydown', function (event) {
    keys[event.key] = true
    if (!manager.scene.paused) {
      manager.scene.run('keyDown', [event.key])
    }
  })

  document.addEventListener('keyup', function (event) {
    keys[event.key] = false
    if (!manager.scene.paused) {
      manager.scene.run('keyUp', [event.key])
    }
  })
}
