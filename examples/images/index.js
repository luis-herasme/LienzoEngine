
const manager = new engine.GameManager()
const scene = manager.createScene('home')
manager.useScene('home')
manager.add(manager.gameObject({
    Sprite: {
        src: '../../assets/tree.png',
        width: 50,
        height: 50
    }
}))
manager.start()
