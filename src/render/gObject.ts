
import Graphic from './Graphic'

class gObject {
  public graphic
  public instrucctions

  constructor (data) {
    this.graphic = new Graphic(this.render())
    this.instrucctions = Object.keys(data)
  }

  render () {
    this.instrucctions.forEach(instrucction => {
      this.graphic[instrucction](...this.instrucctions[instrucction])
    })
  }
}

export default gObject
