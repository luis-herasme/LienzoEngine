import { gObject } from '../render/index'

class GraphicComponent extends gObject {
  public gui: boolean
  constructor (configuration) {
    super(configuration.data)
    this.gui = configuration.gui
  }
}