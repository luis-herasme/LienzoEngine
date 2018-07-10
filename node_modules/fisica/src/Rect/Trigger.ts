
import Collider from './Collider'
import RigidBody from './RigidBody'

class Trigger extends Collider {

  public particles: Array<any> = []

  isInside(other: Collider | RigidBody) {
    return this.collidesWith(other)
  }

  isInList(other: Collider | RigidBody) {
    return includes(this.particles, other)
  }

  update(other: Collider | RigidBody): void {

    if (this.collidesWith(other)) // Is inside
    {
      if (!this.isInList(other)) // Is not in the list
      {
        if (other.onTriggerEnter) {
          other.onTriggerEnter(this)
        }
        this.particles.push(other)
      }
      else // Is in the list
      {
        if (other.onTriggerStay) {
          other.onTriggerStay(this)
        }
      }
    } else { // Is outside
      if (this.isInList(other)) { // Is outside but is in the list
        this.particles.splice(this.particles.indexOf(other), 1)
        if (other.onTriggerExit) {
          other.onTriggerExit(this)
        }
      }
    }
  }
}

function includes(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return true
  }
  return false
}

export default Trigger
