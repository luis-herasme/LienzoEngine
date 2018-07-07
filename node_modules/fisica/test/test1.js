
/* global describe, it */

const expect = require('chai').expect
const fisica = require('../dist/bundle')
console.log(fisica)

const engine = new fisica.Engine()

let body = new fisica.Body('Rect', {
  position: [0, 0],
  width: 100,
  height: 100,
  collision: function () {
    console.log('Choque')
  }
})

let body2 = new fisica.Body('Rect', {
  position: [-5, -5],
  width: 50,
  height: 100,
  collision: function () {
    console.log('Choque2')
  }
})

let circle = fisica.Body('Circle', {
  position: [-10, 10],
  radius: 50,
  collision: function () {
    console.log('Circle collision')
  }
})

engine.add(body)
engine.add(circle)
engine.add(body2)

describe('Given a Body', function () {
  it('I should be able to see its vertices', function () {
    engine.update()
    expect(body.vertices.points).deep.equal(body.vertices.points)
  })
})
