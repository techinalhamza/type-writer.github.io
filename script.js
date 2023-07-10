let text = document.querySelector('.sec-text');

const textLoad = () =>{
    setTimeout(()=>{
        text.innerHTML='1 web developer'
    },0)
    setInterval(()=>{
        text.innerHTML='2 web designer'
    },4000)
    setInterval(()=>{
        text.innerHTML='3 graphic designer'
    },8000)
    setInterval(()=>{
        text.innerHTML='4 youtuber'
    },12000)
    setInterval(()=>{
        text.innerHTML='5 freelawncer'
    },16000)
}
setInterval(textLoad(),20000)

console.log('halo');