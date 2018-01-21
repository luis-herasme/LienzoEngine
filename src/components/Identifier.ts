function id () {
  let ID = ''
  for (let i = 0; i < 10; i++) {
    ID += Math.round(Math.random() * 100)
  }
  return ID
}

export default class Identifier {
  public tags : Array<string>
  public id   : string = id()
  public name : string

  constructor (name, tags) {
    this.name = name
    this.tags = tags
  }
}
