
/* global describe, it */

const expect = require('chai').expect
const fisica = require('../dist/bundle_server')

const Vector2D = fisica.Vector2D
const world = new fisica.Rect.World()


describe('Given a Rect RigidBody instance', () => {
  const rect = new fisica.Rect.RigidBody(new Vector2D(100, 100), new Vector2D(5, 5))

  it('it\'s position should change be equal to the one set in the constructor', () => {
    expect(rect.position).to.deep.equal(new Vector2D(100, 100))
  })

  it('Check if it has the correct mass', () => {
    expect(rect.mass).to.deep.equal(rect.size.x * rect.size.y)
  })

  it('I should be able to add a force', () => {
    rect.addForce(new Vector2D(1, 0))
    expect(rect.acceleration).to.deep.equal(new Vector2D(1, 0))
  })
  

  it('I should be able to get the momentum', () => {
    expect(rect.momentum()).deep.equal(Vector2D.mult(rect.velocity, rect.mass))
  })

  it('The velocity should change with an acceleration', () => {
    rect.update()
    expect(rect.velocity).to.deep.equal(new Vector2D(1 / rect.mass, 0))
  })
  
})

describe('Given a Rect Collider instance', () => {
  const rect = new fisica.Rect.Collider(new Vector2D(0, 0), new Vector2D(10, 10))
  const rect2 = new fisica.Rect.Collider(new Vector2D(5, 2), new Vector2D(5, 5))
  
  it('Should be able to know if collides with other rect', () => {
     expect(rect.collidesWith(rect2)).to.deep.equal(true)
  })
})

describe('Given a Rect Trigger instance', () => {
  const rect = new fisica.Rect.Trigger(new Vector2D(0, 0), new Vector2D(50, 50))
  const rect2 = new fisica.Rect.Collider(new Vector2D(10, 10), new Vector2D(5, 5))

  rect.update(rect2)
  it('I should be able to know if other rect is inside', () => {
    expect(rect.isInside(rect2)).to.deep.equal(true)
  })

  it('I should be able to know if other rect gets outside', () => {
    rect.update(rect2)
    expect(rect.isInList(rect2)).deep.equal(true)
    rect2.position = new Vector2D(1000, 1000)
    rect.update(rect2)
    expect(rect.isInList(rect2)).deep.equal(false)
  })

  it('Should be able to know if a rect stays inside', () => {
    rect2.position = new Vector2D(10, 10)
    rect.update(rect2)
    expect(rect.isInList(rect2)).to.deep.equal(true)
  })

})
