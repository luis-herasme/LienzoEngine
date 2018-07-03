
import {Vector, Manager, Scene} from '../lienzo'

// Prefabs
import character  from './Prefabs/character'
import coins      from './Prefabs/coins'
import grass      from './Prefabs/grass'
import slime      from './Prefabs/slime'
import clouds     from './Prefabs/clouds'
import background from './Prefabs/background'

const scene = new Scene({
  system: 'Rect',
  background: '#9FE6FF',    
  gravity: new Vector(0, 0),
  gameObjects: [ character, coins, grass, slime, clouds, background]
})
const manager = new Manager()
manager.setScene(scene)
scene.add([ background, character, coins, grass, slime, clouds])
manager.start()
