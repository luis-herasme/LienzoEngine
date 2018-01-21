
import { Vector, Scene, GameObject, Manager, Graphic } from '../lienzo'
import character from './character'
import Transform from '../components/Transform';

const manager = new Manager()

manager.setScene(new Scene({
  gravity: new Vector(0, 500),
  system: 'Rect',
  backgroundColor: '#9FE6FF'
}))

// BACKGROUND
for (let i = 0; i < 100; i++) {
  manager.add({
    Transform: {
      position: new Vector(i * 1920, -100)
    },
    Sprite: {
      src: 'assets/bg.png'
    }
  })
}
manager.add(character)

const personaje = new GameObject({
  Identifier: new Identifier({
    name: 'Character'
  }),
  Transform: new Transform({
    position: ['10px', '10px'],
    rotation: 20
  }),
  Collider: new Collider({
    size: 'fixed',
    static: true
  }),
  Sprite: new Sprite({

  }),
  Script: new Script({
    src:
  })
})

manager.scene.renderWorld.follow(
  manager.scene.findByName('character')
)

// Clouds
manager.add({
  position: new Vector(0, 0),
  scale: new Vector(0.5, 0.5),
  sprite: 'assets/clouds.png',
  script: {
    update () {
      this.transform.position.x += 5
    }
  }
})

// Grass
for (let i = 0; i < 100; i++) {
  manager.add({
    position: new Vector(i * 1680, manager.getHeight() - 224),
    scale: new Vector(5, 2),
    sprite: 'assets/grass.png',
    collider: 'fit',
    static: true
  })
}

for (let i = 0; i < 25; i++) {
  // Coins
  manager.add({
    position: new Vector(i * 500, 600),
    collider: 'fit',
    static: true,
    scale: new Vector(0.5, 0.5),
    spriteSheet: {
      src: 'assets/coin.png',
      size: new Vector(700/6, 200)
    },
    script: {
      collision (other) {
        if (other.gameObject.name === 'character') {
          other.gameObject.coins++
          this.destroy()
        }
      }
    }
  })
  // Captus
  manager.add({
    position: new Vector(i * (500 * (Math.random() + 0.5)), manager.getHeight() - 224 - (256 * 0.75)),
    collider: 'fit',
    static: true,
    scale: new Vector(0.75, 0.75),
    sprite: 'assets/cactus.png',
    script: {
      collision (other) {
        if (other.gameObject.name === 'character') {
          other.gameObject.health--
          this.destroy()
        }
      }
    }
  })
}

// Slime
manager.add({
  position: new Vector(600, 250),
  collider: new Vector(100, 50),
  sprite: 'assets/Slime.png',
  script: {
    update () {
      this.collider.addForce(new Vector(80, 0))
    }
  }
})

// Blocks
for (let i = 0; i < 5; i++) {
  manager.add({
    position: new Vector(300 + i * 70, 300 - 70),
    collider: new Vector(70, 70),
    sprite: 'assets/malo.png',
    static: true
  })
}

manager.add({
  position: new Vector(1300 + 5 * 70, 710 - 5 * 70 - 70),
  collider: new Vector(70, 70),
  sprite: 'assets/malo.png',
  static: true,
  script: {
    update () {
      this.transform.position.x += 0.1
    }
  }
})

manager.start()
