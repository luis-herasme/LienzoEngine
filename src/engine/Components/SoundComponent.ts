
class SoundComponent {
  public sound: HTMLAudioElement
  constructor (configuration) {
    this.sound = new Audio(configuration.src)
  }

  play () {
    this.sound.play()
  }
}

export default SoundComponent
