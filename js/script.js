const sabores = [
    {
    sabor: 'Marguerita',
    descricao: [`Molho de tomate natural temperado com azeite, sal e orégano,
    Queijo mussarela fatiado.
    Orégano e manjericão fresco.`]
    },
]

console.log(sabores[0])

function arrowLeft(){
    let arrowleft = document.getElementById('arrow-left')
    let paragraphSec2 = document.getElementById('hide-psec2')
    console.log(paragraphSec2)

    paragraphSec2.innerHTML = `${sabores[0].descricao}`
    
}



// Manipular o slider
new Glide(".images", {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    gap: 0,
    autoplay: ''

}).mount()
