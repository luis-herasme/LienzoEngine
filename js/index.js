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
    },{
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
                    if (this.follow) {
                        this.transformComponent.position.moveTowards(this.mouse)
                    }
                },
                click(mouse) {
                    this.follow = !this.follow
                    this.mouse = mouse
                }
            }
        })
        manager.add(tree)
        manager.start()
        `,
        src: 'examples/mouseFollow/index.html'
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