
/* global describe, it */

const expect = require('chai').expect
const fisica = require('../dist/bundle_server')

const Vector2D = fisica.Vector2D
const world = new fisica.Circle.World()

describe('Given a RigidBody instance', () => {
  const circle = new fisica.Circle.RigidBody(new Vector2D(100, 100), 5)

  it('it\'s position should change be equal to the one set in the constructor', () => {
    expect(circle.position).to.deep.equal(new Vector2D(100, 100))
  })

  it('Check if it has the correct mass', () => {
    expect(circle.mass).to.deep.equal(Math.PI * Math.pow(circle.radius, 2))
  })

  it('I should be able to add a force', () => {
    circle.addForce(new Vector2D(1, 0))
    expect(circle.acceleration).to.deep.equal(new Vector2D(1, 0))
  })

  it('I should be able to get the momentum of the circle', () => {
    expect(circle.momentum()).deep.equal(Vector2D.mult(circle.velocity, circle.mass))
  })

  it('The velocity should change with an acceleration', () => {
    circle.update()
    expect(circle.velocity).to.deep.equal(new Vector2D(1 / circle.mass, 0))
  })
})

describe('Given a Collider instance', () => {
  const circle = new fisica.Circle.Collider(new Vector2D(0, 0), 10)
  const circle2 = new fisica.Circle.Collider(new Vector2D(5, 2), 5)
  
  it('Should be able to know if collides with other circle', () => {
     expect(circle.collidesWith(circle2)).to.deep.equal(true)
  })
})

describe('Given a Trigger instance', () => {
  const circle = new fisica.Circle.Trigger(new Vector2D(0, 0), 50)
  const circle2 = new fisica.Circle.Collider(new Vector2D(10, 10), 5)
  circle.update(circle2)

  it('I should be able to know if other circle is inside', () => {
    expect(circle.isInside(circle2)).to.deep.equal(true)
  })

  it('I should be able to know if other circle gets outside', () => {
    circle.update(circle2)
    expect(circle.isInList(circle2)).deep.equal(true)
    circle2.position = new Vector2D(1000, 1000)
    circle.update(circle2)
    expect(circle.isInList(circle2)).deep.equal(false)
  })

  it('Should be able to know if a circle stays inside', () => {
    circle2.position = new Vector2D(-10, -10)
    circle.update(circle2)
    expect(circle.isInList(circle2)).to.deep.equal(true)
  })
})
