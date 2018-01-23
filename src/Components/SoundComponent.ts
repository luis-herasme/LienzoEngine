
export default class SoundComponent {
  public sound: Sound
  constructor (configuration) {
    this.sound = new Sound(src)
  }

  play () {
    this.sound.play()
  }
}
