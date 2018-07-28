const manager = new engine.GameManager()
const tree = manager.gameObject({
    Sprite: {
        src: '../../assets/tree.png',
        width: 50,
        height: 50
    }
})
manager.add(tree)
manager.start()