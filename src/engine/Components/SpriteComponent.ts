
import Picture from '../../render/Media/Picture'
import GameObject from '../Managers/GameObject'

class SpriteComponent extends Picture {
    constructor(configuration, gameObject: GameObject) {
        console.log(`Sprite Component configuration:
        ${configuration}`)
        super(configuration)
        this.mouseMove((mouse) => gameObject.run('mousemove', [mouse]))
        console.log('Testing events')
        this.mouseDown((mouse) => {
            console.log('Testing mouse down')
            gameObject.run('mousedown', [mouse])
        })
        this.mouseUp((mouse) => gameObject.run('mouseUp', [mouse]))
        this.click((mouse) => gameObject.run('click', [mouse]))
    }
}

export default SpriteComponent
