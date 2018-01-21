export default {
  position: new Vector(i * (500 * (Math.random() + 0.5)), manager.getHeight() - 224 - (256 * 0.75)),
  collider: 'fit',
  static: true,
  scale: new Vector(0.75, 0.75),
  sprite: 'assets/cactus.png',
  script: {
    collision (other) {
      if (other.gameObject.name === 'character') {
        other.gameObject.health--
        this.destroy()
      }
    }
  }
}