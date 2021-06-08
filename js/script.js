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


let contador = 0

function arrowLeft(){    
    
    let paragraphSec2 = document.getElementById('hide-psec2')   
    let flavorImage = document.getElementById('img-sec2')    
        
    paragraphSec2.innerHTML = `${flavors[contador++].description}`
    console.log(contador)
    if(contador === 3){
        contador = 0
    }
    
    
}

function arrowRight(){    
    
    let paragraphSec2 = document.getElementById('hide-psec2')   
    let flavorImage = document.getElementById('img-sec2')       
        
    paragraphSec2.innerText = flavors[contador].description    
    flavorImage.src = `${flavors[contador++].image[0].url}`        
   
    if(contador === 3){
        contador = 0        
    }    
    
    
}

console.log(flavors[0].description)
