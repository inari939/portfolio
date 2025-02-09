//nube//

// function rain(){
//      let nube = document.querySelector('.nube');
//      let e = document.createElement('div');
//      let left = Math.floor(Math.random()* 310);
//      let width = Math.random()* 5;
//      let height = Math.random()* 50;
//      let duration =  Math.random()* 0.5;


//      e.classList.add('drop');
//      nube.appendChild(e);
//      e.style.left = left + 'px'
//      e.style.width = 0.5 + width + 'px'
//      e.style.height = 0.5 + height + 'px'
//      e.style.animationDuration = 1 + duration + 's'

//      setTimeout(function(){
//         nube.removeChild(e)
//      },2000)
// }


// setInterval(function(){
//     rain()
// },20);

//fin nube//
function randomText(){
    var text = ("!@#$%^()_+");
    letters = text[Math.floor(Math.random() * text.length)];
    return letters;
}
function rain() {
    let cloud = document.querySelector('.nube');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 290);
    let size = Math.random() * 1.5;
    let duration = Math.random() * 1;

    e.innerText = randomText()
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDuration = 1+duration+'s';

    setTimeout(function() {
        cloud.removeChild(e)
    },2000)
}



setInterval(function () {
    rain()
}, 20)


//menu hamburguesa


document.getElementById("icon-menu").addEventListener("click", function() {
    document.querySelector(".barra-navegacion ul").classList.toggle("active");
});


