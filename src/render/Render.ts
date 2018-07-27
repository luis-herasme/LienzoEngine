import Scene from './Scene'
import Vector2D from '../vector/Vector2D'

class Render {
  public scene: Scene
  public canvas: HTMLCanvasElement
  public context: CanvasRenderingContext2D
  public frameRate: number = 1000 / 60

  private width: string
  private height: string

  constructor(canvas?: HTMLCanvasElement, _width?: string, _height?: string) {
    if (canvas) {
      this.canvas = canvas
    } else {
      this.canvas = document.createElement('canvas')
      document.body.appendChild(this.canvas)
    }

    if (_width && _height) {
      this.width = _width 
      this.height = _height
      this.canvas.width = this.convertPercentage(_width, window.innerWidth)
      this.canvas.height = this.convertPercentage(_height, window.innerHeight)
    } else {
      this.width = '100%'
      this.height = '100%'
      this.canvas.width = this.convertPercentage(this.width, window.innerWidth)
      this.canvas.height = this.convertPercentage(this.height, window.innerHeight)
    }

    this.context = this.canvas.getContext('2d')

    window.addEventListener('resize', () => {
      this.canvas.width = this.convertPercentage(this.width, window.innerWidth)
      this.canvas.height = this.convertPercentage(this.height, window.innerHeight)
    })
  }

  convertPercentage(numb: string, complete: number): number {
    if (numb.slice(-1) === '%') {
      numb = numb.substring(0, numb.length - 1)
      return (Number(numb) / 100) * complete
    } else {
      return Number(numb)
    }
  }

  getWidth(): number {
    return this.canvas.width
  }

  getHeight(): number {
    return this.canvas.height
  }

  getSize(): Vector2D {
    return new Vector2D(
      this.canvas.width,
      this.canvas.height)
  }

  getCanvasImage(): string {
    return this.canvas.toDataURL()
  }

  fullScreen(): void {
    let isFull = false
    document.addEventListener('click', () => {
      if (!isFull) {
        this.canvas.webkitRequestFullScreen()
      }
    })
  }

  setScene(scene: Scene): void {
    this.scene = scene
    this.scene.renderer = this
    this.scene.context = this.context
    this.scene.smoth(false)
  }
}

export default Render
