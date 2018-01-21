
import { Rect }              from '../physics/index'
import { Animation, Sprite } from '../render/index'
import Vector2D              from '../Vector/Vector2D'
import ScriptManager         from './ScriptManager'
import Transform             from './Transform'
import Scene                 from './Scene'

function id () {
  let ID = ''
  for (let i = 0; i < 10; i++) {
    ID += Math.round(Math.random() * 100)
  }
  return ID
}

export default class GameObject {
  private ScriptManager = new ScriptManager(this)
  public transform: Transform = new Transform()

  public id: string = id()
  public scene: Scene
  public name: string
  public graphics = []
  public collider
  public sprite

  constructor (components) {
    Object.keys(components).forEach(component => this.add(component, components[component]))
  }

  add (componentType: string, data): void {
    if (componentType === 'graphics') {
      this.addGraphics(data)
    } else if (componentType === 'collider') {
      this.setCollider(data)
    } else if (componentType === 'scripts') {
      this.addScripts(data)
    } else if (componentType === 'script') {
      this.behavior(data)
    } else if (componentType === 'position') {
      this.transform.position = data
    } else if (componentType === 'static') {
      this.static = true
    } else if (componentType === 'scale') {
      this.transform.scale = data
    } else if (componentType === 'name') {
      this.name = data
    } else if (componentType === 'sprite') {
      this.sprite = data
    } else if (componentType === 'spriteSheet') {
      this.sprite = {
        data: data,
        animation: true
      }
    }
  }

  load () {
    if (this.sprite) {
      if (this.sprite.animation ) {
        const sprite = new Animation(this.sprite.data.src, this.transform.scale, this.transform.position, 100, this.sprite.data.size)
        this.graphics.push(sprite)
        this.sprite = sprite
      } else {
        const sprite = new Sprite(this.sprite, this.transform.position, this.transform.scale, 0, new Vector2D(0, 0)) 
        this.graphics.push(sprite)
        this.sprite = sprite
      }
    }

    if (this.collider) {
      if (this.collider === 'fit') {
        const collider = new Rect.Dynamic(this.transform.position, 0.25, this.sprite.getSize())
        collider.gameObject = this
        collider.position = this.transform.position
        this.collider = collider
      } else {
        const collider = new Rect.Dynamic(this.transform.position, 0.25, this.collider)

        if (!this.sprite.animation ) {
          this.sprite.scale = new Vector2D(
            this.collider.x / this.sprite.image.width,
            this.collider.y / this.sprite.image.height)
        }

        collider.gameObject = this
        collider.position = this.transform.position
        this.collider = collider
      }

      this.collider.collision = (other) => {
        this.run('collision', [other])
      } 
    }
  }

  addGraphics (graphics: Array<any>): void {
    graphics.forEach(graphic => {
      graphic.gameObject = this
      this.graphics.push(graphic)
    })
  }

  setCollider (colliderSize: Vector2D): void {
    this.collider = colliderSize
  }

  behavior (script: Object): void {
    this.ScriptManager.addOne(script)
  }
  
  addScripts (scripts): void {
    this.ScriptManager.add(scripts)
  }

  setTransform (transform: Transform): void {
    this.transform = transform
  }

  run (methodName: string, params?: Array<any>): void {
    this.ScriptManager.run(methodName, params)
  }

  destroy () {
    this.scene.destroy(this)
  }
}
