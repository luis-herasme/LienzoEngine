// This js file is for the examples in index.html



const examples = [
    {
        title: 'Image example',
        code: `
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
        `,
        src: 'examples/images/index.html',
    }, {
        title: 'Follow mouse on click',
        code: `
        const manager = new engine.GameManager()
        const tree = manager.gameObject({
            Sprite: {
                src: '../../assets/character.png',
                width: 50,
                height: 50
            },
            Script: {
                update() {
                    if (this.mouse) {
                        this.transformComponent.position.moveTowards(this.mouse)
                    }
                },
                click(mouse) {
                    this.mouse = mouse
                }
            }
        })
        manager.add(tree)
        manager.start()
        `,
        src: 'examples/mouseFollow/index.html'
    }, {
        title: 'Physics',
        src: 'examples/physics/index.html',
        code: `
const manager = new engine.GameManager()
manager.scene.renderScene.backgroundColor = 'rgba(255,255,255, 0.25)'

for (let index = 0; index < 150; index++) {
    const block = manager.gameObject({
        Sprite: {
            src: '../../assets/character.png',
            width: 15,
            height: 15
        },
        RigidBody: {
            width: 15,
            height: 15
        },
        Script: {
            start() {
                this.colliderComponent.restitution = 0.75
                this.colliderComponent.position = engine.Vector2D.randomP(300, 300)
            },
            update() {
                if (this.mouse) {
                    const m = engine.Vector2D.sub(this.mouse, this.transformComponent.position)
                    const normal = engine.Vector2D.normalize(m)
                    m.mult(0.5)
                    this.colliderComponent.addForce(m)
                 
                }
            },
            click(mouse) {
                this.mouse = mouse
            }
        }
    })
    manager.add(block)    
}
manager.start()
`
    },{
        title: 'Player movement',
        code: `
const manager = new engine.GameManager()
manager.scene.renderScene.backgroundColor = 'rgb(50,50,50)'
const block = manager.gameObject({
    Sprite: {
        src: '../../assets/character.png',
        width: 50,
        height: 50
    },
    Script: {
        start() {
            this.spriteComponent.anchor = new engine.Vector2D(0.5, 0.5)
        },
        keyPress(e) {
            if (e.key === 's') {
                this.transformComponent.translate(10, 0)
            }
            if (e.key === 'w') {
                this.transformComponent.translate(-10, 0)
            }
            if (e.key === 'a') {
                this.transformComponent.rotation -= 0.1
            }
            if (e.key === 'd') {
                this.transformComponent.rotation += 0.1
            }
        }
    }
})
manager.add(block)
manager.start()
        `,
        src: 'examples/player/index.html'
    }
]

const examplesDOM = document.getElementById('examples')
const examplesList = document.getElementById('examplesList')

for (let item of examples) {
    const id = makeid()
    console.log(id)
    examplesList.innerHTML += `<a href='#${id}' class="collection-item">${item.title}</a>`
    examplesDOM.innerHTML += `
<div class="row" id="${id}">
<div class="col m12">
    <h4>${item.title}</h4>
</div>

<div class="col m12">
    <iframe style="padding: 0px; width: 100%; height: 400px; border-radius: 0.3em;" src=${item.src} frameborder="0"></iframe>
</div>
<div class="col m12">
    <pre style="margin: 0%;">
<code class="lang-javascript">
${item.code}
</code>
</pre>
</div>
</div>
<hr>
    `
}
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}