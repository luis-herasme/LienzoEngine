/*
import * as Component from './components/components'
import GameObject from './Managers/GameObject'

function load(configuration): GameObject {
  let result = {}
  let Transform
  let Script
  if (configuration) {
    for (let component of Object.keys(configuration)) {
      if (component === 'Transform') {
        Transform = new Component[component](configuration[component])
      } else if (component === 'Script') {
        Script = configuration[component]
      } else {
        result[component] = new Component[component](configuration[component])
      }
    }
  }
  const gm = new GameObject(result)
  gm['Transform'].position = Transform.position
  gm['Transform'].rotation = Transform.rotation
  gm['Transform'].scale = Transform.scale
  if (Script) {
    gm.Script.one(Script)
  }
  return gm
}

export default load
*/