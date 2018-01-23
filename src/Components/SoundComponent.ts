
export default class SoundComponent {
  public sound: Sound
  constructor (name, src) {
    this.sound = new Sound(src)
  }

  play () {
    this.sound.play()
  }
}
