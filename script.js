const worker = new Worker('worker.js')

const background = document.getElementById('bg')
const inTotal = document.getElementById('total')


inTotal.addEventListener('click', ()=>{

    worker.postMessage('worker please working for me')

})

worker.onmessage = (message)=>{
    
    console.log(`total amount ${message.data}`)
}



background.addEventListener("click", ()=>{
    
    if(document.body.style.background !== 'green'){
        document.body.style.background = 'green'
    }else{
        document.body.style.background = 'blue'
    }
})
