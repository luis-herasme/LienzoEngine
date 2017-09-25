const Howl = require('howler')
const fisica = require('fisica')
const render = require('canvas_render')
const Place = require('./Place.js')
const GameManager = require('./GameManager.js')
/**
 * This class creates gameObjects and contains the methods to add components
 */
class GameObject {
  constructor (data) {
    this.sounds = {}
    this.methods = {}
    this.animations = {}
    Object.keys(data).forEach((key) => {
      this.add(key, data[key])
    })
    if (!this.ubication) {
      this.addUbication({
        position: [0, 0],
        rotation: 0,
        scale: 1
      })
    }
  }
  /**
   * This method adds a component to the gameobject
   * @param {string} type This will be the type of the component that you want to add
   * @param {object} data This objects contains the configuration of the component
   */
  add (type, data) {
    if (type === 'script') {
      this.addScript(data)
    } else if (type === 'sprite') {
      this.addSprite(data)
    } else if (type === 'collider') {
      this.addCollider(data)
    } else if (type === 'sound') {
      this.addSound(data)
    } else if (type === 'ubication') {
      this.addUbication(data)
    }
  }
  /**
   * This method adds a sound component to the gameObject
   * @param {object} data This object contains the configuration of sond that will be added
   */
  addSound (data) {
    this.sounds[data.name] = new Howl.Howl({src: data.src})
  }
  addUbication (data) {
    this.ubication = new Place({
      gameObject: this,
      position: data.position,
      scale: data.scale,
      rotation: data.rotation
    })
  }
  addCollider (data) {
    this.collider = new fisica.Body(data.type, data.config)
    this.collider.gameObject = this
    GameManager.engine.add(this.collider)
  }
  /**
   * This methods adds an script to the gameObject
   * @param {object} data This is an object that contains events to use in the gameObject
   */
  addScript (data) {
    Object.keys(data).forEach((method) => {
      if (this.methods[method]) {
        this.methods[method].push(data[method])
      } else {
        this.methods[method] = []
        this.methods[method].push(data[method])
      }
    })
  }
  addAnimation (data) {
    this.animations[data.name] = new render.SpriteSheet(data.name, data)
  }
  playAnimation (name, config) {
    this.sprite = this.animations[name]
  }
  /**
   * This methods sets the spite of the gameObject
   * @param {object} data This object contains the name of the image to be save in cache and the src of the image
   */
  addSprite (data) {
    this.sprite = new render.Sprite(data.name, data)
    GameManager.stage.add(this.sprite)
  }
  run (_event, data) {
    if (this.methods[_event]) this.methods[_event].forEach((x) => x(this, data))
  }
  /**
   * This method destroys the components that are been used by othes parts of the engine
   */
  destroy () {
    if (this.sprite) GameManager.stage.destroy(this.sprite.name)
    if (this.collider) GameManager.engine.destroy(this.collider)
  }
  render () {
    if (this.methods.render) this.methods.render.forEach((method) => method())
  }
  /**
   * This method updates the position of the gameObject
   */
  update () {
    this.ubication.update()
    this.render()
  }
}
module.exports = GameObject
