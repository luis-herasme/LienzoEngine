
import id from '../utils/id'

export default class Identifier {
  public tags : Array<string>
  public id   : string = id()
  public name : string

  constructor (name, tags) {
    this.name = name
    this.tags = tags
  }
}
