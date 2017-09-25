const Vector = require('vector_class')
const vec = require('vector_functions')
/**
 * This class constrols the position of a gameObject
 * with the methods of this class you can control
 * the position of the gameObject
 */
class Place {
  constructor (config) {
    this.gameObject = config.gameObject
    this.scale = config.scale
    this.position = new Vector(...config.position)
    this.rotation = config.rotation
  }
  /**
   * This method updates the position of the gameObject
   */
  update () {
    if (this.gameObject.collider) {
      this.position.value[0] = this.gameObject.collider.center[0]
      this.position.value[1] = this.gameObject.collider.center[1]
    }
    this.gameObject.sprite.position.x = this.position.value[0]
    this.gameObject.sprite.position.y = this.position.value[1]
    this.gameObject.sprite.rotation = this.rotation
  }
  /**
   * This method rotates the gameObject
   * @param {number} rotation This is the amount of rotation
   */
  rotate (rotation) {
    this.rotation += rotation
    this.update()
  }
  /**
   * This method sets the position of the gameObject
   * @param {number} x The X coordinate that you want to put the gameObjet in
   * @param {number} y The X coordinate that you want to put the gameObjet in
   */
  setPosition (x, y) {
    this.position = new Vector(x, y) // TODO: Change the collider position
    this.update()
  }
  /**
   * This method translates the gameObject
   * @param {number} x
   * @param {number} y
   */
  globalTranslate (x, y) {
    this.position.add(new Vector(x, y))
    this.update()
  }
  /**
   * This method translates the gameObject localy
   * @param {number} x change in X
   * @param {number} x Change in Y
   */
  translate (x, y) {
    let translationY = vec.angleMagnitude(this.rotation, y)
    let translationX = vec.angleMagnitude(this.rotation + Math.PI / 2, x)
    translationY = new Vector(...translationY)
    translationX = new Vector(...translationX)
    this.position.add(translationY)
    this.position.add(translationX)
    this.update()
  }
}

module.exports = Place
