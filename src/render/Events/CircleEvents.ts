import Graphic from '../graphics/Graphic'
import Events from '../Events'
import Vector2D from '../../vector/Vector2D'

enum EventNames {
  mousemove = 'mousemove',
  mousedown = 'mousedown',
  mouseup = 'mouseup',
}

class CircleEvents extends Graphic implements Events {
  public radius: number
  public position: Vector2D

  // Private
  private moveEnabled: boolean = false
  private hoverEnabled: boolean = false
  private dragEndEnabled: boolean = false
  private dragingEnabled: boolean = false
  private mouseUpEnabled: boolean = false
  private dragStartEnabled: boolean = false
  private mouseDownEnabled: boolean = false
  private clickEnabled: boolean = false

  private moveMethods: Array<Function>
  private hoverMethods: Array<Function>
  private mouseUpMethods: Array<Function>
  private dragingMethods: Array<Function>
  private dragEndMethods: Array<Function>
  private mouseDownMethods: Array<Function>
  private dragStartMethods: Array<Function>
  private clickMethods: Array<Function>

  constructor(configuration: any) {
    super(configuration)
    this.moveMethods = []
    this.hoverMethods = []
    this.mouseUpMethods = []
    this.dragingMethods = []
    this.dragEndMethods = []
    this.dragStartMethods = []
    this.mouseDownMethods = []
    this.clickMethods = []
    console.log(`configuration:
    ${configuration}`)
    if (configuration) {
      if (configuration.radius) this.radius = configuration.radius
    }
  }

  checkIfInside(point: Vector2D): boolean {
    return this.position.distance(point) < this.radius
  }

  private enableEvent(eventName: EventNames, methods: Array<Function>): void {
    let mouse: Vector2D
    document.addEventListener(eventName, (event) => {
      mouse = new Vector2D(event.clientX, event.clientY)
      if (this.checkIfInside(mouse)) {
        methods.forEach((method: Function) => method(mouse))
      }
    })
  }

  click(func: Function): void {
    if (!this.clickEnabled) {
      this.clickEnabled = !this.clickEnabled
      let mouse: Vector2D
      document.addEventListener('click', (event) => {
        mouse = new Vector2D(event.clientX, event.clientY)
        this.clickMethods.forEach((method: Function) => method(mouse))
      })
    }
    func = func.bind(this)
    this.clickMethods.push(func)
  }

  mouseDown(func: Function): void {
    console.log('mouseDownEnabled', this.mouseDownEnabled)
    if (!this.mouseDownEnabled) {
      this.mouseDownEnabled = !this.mouseDownEnabled
      let mouse: Vector2D
      document.addEventListener('click', (event) => {
        console.log('evento creado')
        mouse = new Vector2D(event.clientX, event.clientY)
        if (this.checkIfInside(mouse)) {
          this.mouseDownMethods.forEach((method: Function) => method(mouse))
        }
      })
    }
    func = func.bind(this)
    this.mouseDownMethods.push(func)
  }

  mouseUp(func: Function): void {
    if (!this.mouseUpEnabled) {
      this.mouseUpEnabled = !this.mouseUpEnabled
      this.enableEvent(EventNames.mouseup, this.mouseUpMethods)
    }
    this.mouseUpMethods.push(func.bind(this))
  }

  hover(func: Function): void {
    if (!this.hoverEnabled) {
      this.hoverEnabled = !this.hoverEnabled
      this.enableEvent(EventNames.mousemove, this.hoverMethods)
    }
    this.hoverMethods.push(func.bind(this))
  }

  mouseMove(func: Function): void {
    if (!this.moveEnabled) {
      this.moveEnabled = !this.moveEnabled
      let mouse: any
      document.addEventListener('mousemove', (event) => {
        mouse = new Vector2D(event.clientX, event.clientY)
        this.moveMethods.forEach((method: Function) => method(mouse))
      })
    }
    func = func.bind(this)
    this.moveMethods.push(func)
  }


  dragStart(func: Function): void {
    this.dragStartMethods.push(func.bind(this))
  }

  draging(func: Function): void {
    this.dragingMethods.push(func.bind(this))
  }

  dragEnd(func: Function): void {
    this.dragEndMethods.push(func.bind(this))
  }

  enableMouseDrag() {
    let isDraging = false
    let distance: Vector2D = new Vector2D()

    document.addEventListener('mousemove', (event) => {
      if (isDraging) {
        this.position = Vector2D.add(distance, new Vector2D(event.clientX, event.clientY))
        this.dragingMethods.forEach((meth: Function) => meth())
      }
    })

    this.mouseDown((mouse: Vector2D) => {
      if (!isDraging) {
        document.body.style.cursor = 'pointer'
        isDraging = true
        distance = Vector2D.sub(this.position, mouse)
        this.position = Vector2D.add(distance, mouse)
        this.dragStartMethods.forEach((meth: Function) => meth())
      }
    })

    this.mouseUp(() => {
      if (isDraging) {
        document.body.style.cursor = 'default'
        isDraging = false
        this.dragEndMethods.forEach((meth: Function) => meth())
      }
    })
  }
}

export default CircleEvents
