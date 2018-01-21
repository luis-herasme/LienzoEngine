
import Collision from './Collision'
import { detectCollision } from './Utils'

class CollisionHandeler {
  constructor () {
    this.particles = []
    this.resolution = [3, 3]
    this.helpers = []

    this.maxPositionX = window.innerWidth
    this.minPositionX = 0
    this.maxPositionY = window.innerHeight
    this.minPositionY = 0

    for (let x = 0; x <= this.resolution[0]; x++) {
      this.helpers.push([])
      for (let y = 0; y <= this.resolution[1]; y++) {
        this.helpers[x].push(new Collision(x, y))
      }
    }
  }

  add (particle) {
    this.particles.push(particle)
    this.insideWorldBounds(particle)
  }

  remove (particle) {
    this.particles.splice(this.particles.indexOf(particle), 1)
  }

  organizeParticle (particle) {
    const positionX = Math.floor((particle.position.x / this.maxPositionX) * this.resolution[0])
    const positionY = Math.floor((particle.position.y / this.maxPositionY) * this.resolution[1])
    if (particle.collider) particle.collider.remove(particle)
    this.helpers[positionX][positionY].add(particle)
  }

  organizeSharedParticles (particle) {
    const BorderMaxX = Math.floor(((particle.position.x + particle.size) / this.maxPositionX) * this.resolution[0])
    const BorderMinX = Math.floor(((particle.position.x - particle.size) / this.maxPositionX) * this.resolution[0])

    const BorderMaxY = Math.floor(((particle.position.y + particle.size) / this.maxPositionY) * this.resolution[1])
    const BorderMinY = Math.floor(((particle.position.y - particle.size) / this.maxPositionY) * this.resolution[1])

    if (BorderMaxX !== particle.collider.x) {
      if (BorderMaxX < this.resolution[0]) {
        this.helpers[BorderMaxX][particle.collider.y].simpleAdd(particle)
      }
    }

    if (BorderMinX !== particle.collider.x) {
      if (BorderMinX > 0) {
        this.helpers[BorderMinX][particle.collider.y].simpleAdd(particle)
      }
    }

    if (BorderMaxY !== particle.collider.y) {
      if (BorderMaxY < this.resolution[1]) {
        this.helpers[particle.collider.x][BorderMaxY].simpleAdd(particle)
      }
    }

    if (BorderMinY !== particle.collider.y) {
      if (BorderMinY > 0) {
        this.helpers[particle.collider.x][BorderMinY].simpleAdd(particle)
      }
    }
  }

  insideWorldBounds (particle) {
    if (particle.position.x/* + particle.size */> this.maxPositionX) {
      particle.position.x = this.maxPositionX// - particle.size
      particle.velocity.x *= -1
    } else if (particle.position.x/* - particle.size */< this.minPositionX) {
      particle.position.x = this.minPositionX// + particle.size
      particle.velocity.x *= -1
    }

    if (particle.position.y/* + particle.size */> this.maxPositionY) {
      particle.position.y = this.maxPositionY// - particle.size
      particle.velocity.y *= -1
    } else if (particle.position.y/* - particle.size */< this.minPositionY) {
      particle.position.y = this.minPositionY// + particle.size
      particle.velocity.y *= -1
    }
  }
/*
  smartInsideWorldBounds (particle) {
    if (particle.border) {
      this.insideWorldBounds(particle)
    }
  }
*/
  update () {
    this.particles.forEach((particle) => {
      this.insideWorldBounds(particle)
      this.organizeParticle(particle)
      // this.smartInsideWorldBounds(particle)
      this.organizeSharedParticles(particle)
    })

    this.helpers.forEach((helperRow) => {
      // this.borderCheck()
      helperRow.forEach((helper) => {
        helper.check()
      })
    })
  }

  localChecker (particles) {
    detectCollision(particles)
  }
}

export default CollisionHandeler
