
import Vector from '../../Vector/Vector2D'

import DynamicCircle from './Dynamic/DynamicCircle'
import DynamicBox from './Dynamic/DynamicBox'
import DynamicRect from './Dynamic/DynamicRect'

import StaticCircle from './Static/StaticCircle'
import StaticBox from './Static/StaticBox'
import StaticRect from './Static/StaticRect'

import World from './World/World'

function dynamicBody (shape, size, position) {
  if (shape === 'circle') {
    return new DynamicCircle(position, size)
  } else if (shape === 'box') {
    return new DynamicBox(position, size)
  } else if (shape === 'rect') {
    return new DynamicRect(position, size)
  } else {
    throw new Error('Type of body [' + shape + '] does not exist.')
  }
}

function staticBody (shape, size, position) {
  if (shape === 'circle') {
    return new StaticCircle(position, size)
  } else if (shape === 'box') {
    return new StaticBox(position, size)
  } else if (shape === 'rect') {
    return new StaticRect(position, size)
  } else {
    throw new Error('Type of body [' + shape + '] does not exist.')
  }
}

function body (type: string, shape: string, size, position: Vector, onCollision?) {
  let collider

  if (type === 'static') {
    collider = staticBody(shape, size, position)
  } else if (type === 'dynamic') {
    collider = dynamicBody(shape, size, position)
  } else {
    throw new Error('Type [' + type + '] does not exist. dynamic or static')
  }

  if (onCollision) {
    collider.coliciona = onCollision.bind(this)
  } else {
    collider.coliciona = function () {}
  }

  return collider
}

export { body, World }
