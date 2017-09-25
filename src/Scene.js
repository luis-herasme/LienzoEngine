let idCounter = 0
/**
 * This is the scene class it creates a new scene for the game
 * ,you can add, create and remove scene from the GameManager
 * when you create an instance of the scene you can add, and destroy
 * objects from the scene.
 * @example
 * scene.add(gameObject)
 * scene.destroy(gameObject)
 */
class Scene {
  constructor () {
    this.elemets = []
  }
  add () {
    Array.from(arguments).forEach((gameObject) => {
      gameObject.id = idCounter++
      gameObject.run('init', gameObject)
      this.elemets.push(gameObject)
    })
  }
  run (name, data) {
    this.elemets.forEach((element) => element.run(name, data))
  }
  update () {
    this.elemets.forEach((element) => element.update())
  }
  destroy (gameObject) {
    this.elemets = this.elemets.filter((x) => x.id !== gameObject.id)
    gameObject.destroy()
  }
}
module.exports = Scene
