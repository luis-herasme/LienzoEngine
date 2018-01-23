
import Vector2D from '../Vector/Vector2D'
import Scene from './Scene'

class Render {
  public scene: Scene
  private canvas
  public context

  constructor (canvasName?: string, width?: number, height?: number) {
    if (canvasName) {
      this.canvas = document.getElementById(canvasName)
      if (this.canvas === null) {
        throw new Error('Element with that ID was not found.')
      }
    } else {
      this.canvas = document.createElement('canvas')
      document.body.appendChild(this.canvas)
    }

    if (width && height) {
      this.canvas.width = width
      this.canvas.height = height
    } else {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    }

    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    })

    this.context = this.canvas.getContext('2d') 
  }

  getWidth (): number {
    return this.canvas.width
  }

  getHeight (): number {
    return this.canvas.height
  }

  getCenter (): Vector2D {
    return new Vector2D(
      this.canvas.width / 2,
      this.canvas.height / 2)
  }

  setScene (scene): void {
    this.scene = scene
    this.scene.renderer = this
  }
}

export default Render
