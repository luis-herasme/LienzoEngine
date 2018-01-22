
import { Vector, Graphic } from '../../lienzo'

export default {
  Identifier: {
    name: 'character'
  },

  Transform: {
    position: new Vector(0, 0),
    scale: new Vector(2, 2)
  },

  Collider: {
    size: 'fit'
  },

  Animation: {
    src: 'assets/walk.png',
    size: new Vector(16, 28)
  },

  Script: {
    init () {
      this.jump = true
      this.coins = 0
      this.health = 30
      let x = new Graphic(function () {
        this.text(`Monedas: ${this.gameObject.coins}`, -this.position.x + 50, this.position.y + 75, { fillStyle: '#FFF', font: 'bold 34px Helvetica', lineWidth: 1 }, true)
      }, new Vector(0, 0))

      x.gameObject = this
      this.scene.renderWorld.add(x)

      let health = new Graphic(function () {
        this.rect(this.position.x, this.position.y - 15, 90, 10, '#000')
        this.rect(this.position.x, this.position.y - 15, this.gameObject.health * 3, 10, '#F00')
        this.text(`Health ${this.gameObject.health}`, this.position.x, this.position.y - 20, { fillStyle: '#000', font: 'bold 16px Arial' })
      }, this.transform.position)
      health.gameObject = this
      this.scene.renderWorld.add(health)
    },

    mouseDown (mouse) {
      let x = new Graphic(function () {
        this.rect(this.position.x, this.position.y - 25, 30 * 10, 30)
        this.text(`Monedas ${this.gameObject.coins}`, this.position.x, this.position.y, { fillStyle: '#f00', font: '34px Arial bold' })
      }, this.transform.position)
      x.gameObject = this

      this.scene.renderWorld.add(x)
      setTimeout(() => this.scene.renderWorld.remove(x), 1000)
    },

    keyPress (keys) {
      if (keys['d']) this.collider.addForce(new Vector(1000, 0))
      if (keys['a']) this.collider.addForce(new Vector(-1000, 0))
      if (keys['s']) this.collider.addForce(new Vector(0, 1000))
      if (keys['w']) this.run('jump')
    },

    update () {
      if (this.transform.position.y > window.innerHeight) {
        console.log('U lose')
      }
    },

    jump () {
      if (this.jump) {
        this.jump = false
        this.collider.addForce(new Vector(0, -40000))
        setTimeout(() => { this.jump = true }, 1500)
      }
    }
  }
}
