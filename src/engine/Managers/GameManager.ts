import { Render } from '../../render'
import GameScene from './GameScene'
import GameObject from './GameObject'

class GameManager {
  private render: Render
  private scene: GameScene
  private scenes = {}
  private interval

  constructor(id?: HTMLCanvasElement, width?: string, height?: string) {
    this.render = new Render(id, width, height)
    this.scene = new GameScene(this)
  }

  setScene(scene: GameScene): void {
    this.scene = scene
  }

  createScene(name: string): GameScene {
    const scene = new GameScene(this)
    this.scenes[name] = scene
    return scene
  }

  gameObject(config): GameObject {
    const gm = new GameObject(this.scene)
    if (config.Script) gm.scriptComponent.add(config.Script)
    if (config.RigidBody) gm.setRigidBody(config.RigidBody)
    if (config.Sprite) gm.setSprite(config.Sprite)
    console.log('LOADED')
    return gm
  }

  add(gm: GameObject) {
    this.scene.add(gm)
  }

  useScene(name: string) {
    if (this.scenes[name]) {
      this.setScene(this.scenes[name])
    } else {
      console.error(`The scene ${name} is not defined.`)
    }
  }

  getRender(): Render {
    return this.render
  }

  start(): void {
    this.scene.run('start')
    this.interval = setInterval(() => {
      this.scene.update()
    })
  }

  stop(): void {
    clearInterval(this.interval)
  }
}

export default GameManager
