
import { Render } from 'dibujo'
import GameScene from './GameScene'
import { Vector2D } from 'vector_class'

class GameManager {

  private render: Render
  private scene: GameScene
  private interval

  constructor(id?: string, width?: number, height?: number) {
    this.render = new Render(id, width, height)
    this.scene = new GameScene(this)
  }

  public getRender(): Render {
    return this.render
  }

  public start(): void {
    this.scene.run('start')
    this.interval = setInterval(() => {
      this.scene.run('update')
    })
  }

  public stop(): void {
    clearInterval(this.interval)
  }
}

export default GameManager
