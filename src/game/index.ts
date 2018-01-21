
import {Vector, Manager} from '../lienzo'

// Prefabs
import character  from './Prefabs/character'
import coins      from './Prefabs/coins'
import grass      from './Prefabs/grass'
import slime      from './Prefabs/slime'
import clouds     from './Prefabs/clouds'
import background from './Prefabs/background'

const manager = new Manager({
  system: 'Rect',
  background: '#9FE6FF',    
  gravity: new Vector(0, 500),
  gameObjects: [ character, coins, grass, slime, clouds, background]
})

manager.start()
