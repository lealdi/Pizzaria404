const flavors = [
        {
            flavor: 'Marguerita',
            description: `Molho de tomate natural temperado com azeite, sal e orégano,
            Queijo mussarela fatiado.
            Orégano e manjericão fresco.`,
            image:[
                {url:"./images/pizza1.jpg"}    
            ]
        },
        {
            flavor: 'Mussarela',
            description: `A Pizza de Mussarela é coberta com molho de tomate, queijo tipo mussarela,
                azeitonas pretas e orégano e massa com fermentação natural,
                oferece mais sabor e qualidade à sua mesa.`,
            image:[
                {url:"./images/pizza2.jpg"}    
            ]
        },
        {
            flavor: 'Frango com Requeijão',
            description: `A Pizza de Frango com Requeijão possui uma massa leve e um recheio especial,
            composto pelo nosso frango desfiado, queijo mussarela e requeijão`,
            image:[
                {url:"./images/pizza3.jpg"}    
            ]
        },
    ]

// Funcoes Slider
let contador = 0
function arrowLeft(){    
    let h1Sec2 = document.getElementById('hide-h2sec2')
    let paragraphSec2 = document.getElementById('hide-psec2')   
    let flavorImage = document.getElementById('img-sec2')    
    
    h1Sec2.innerHTML = flavors[contador].flavor
    paragraphSec2.innerHTML = `${flavors[contador].description}`
    flavorImage.src = `${flavors[contador--].image[0].url}`
    
    if(contador === -1){
        contador = 2               
    }    
}

function arrowRight(){    
    let h1Sec2 = document.getElementById('hide-h2sec2')
    let paragraphSec2 = document.getElementById('hide-psec2')   
    let flavorImage = document.getElementById('img-sec2')       
    
    h1Sec2.innerHTML = flavors[contador].flavor
    paragraphSec2.innerText = flavors[contador].description    
    flavorImage.src = `${flavors[contador++].image[0].url}`        
   
    if(contador === 3){
        contador = 0        
    }   
}
// Slider End

// Menu Hamburguer

function openMenu() {
    
}


// Biblioteca slider

new Glide(".images", {
    type: 'carousel',
    perView: 2,
    focusAt: 'center',
    gap: 10,
    autoplay: ''

}).mount()