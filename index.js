let red,blue,green


setInterval(function(){
    red=Math.floor(Math.random()*255)
    blue=Math.floor(Math.random()*255)
    green=Math.floor(Math.random()*255)
    document.body.style.backgroundColor='rgb('+red +',' +blue+ ',' +green+ ')'
    
}, 1000);