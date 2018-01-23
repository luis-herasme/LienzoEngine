import * as Component from '../components/components'

export default function load (configuration): GameObject {
  let result = {}
  if (configuration) {
    for (let component of Object.keys(configuration)) {
      result[component] = new Component[component](configuration[component])
    }
  }
  return new GameObject(result)
}
