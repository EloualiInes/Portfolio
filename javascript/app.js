// MENU
const burger = document.querySelector('.burger');
const menu = document.querySelector('.navigationMobile');

burger.addEventListener("click",()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('menuShow');
});

// BARRE DE PROGRESSION
let elt = document.getElementById('competences');
    let heightElt = elt.scrollHeight;
    window.onload = () => {
        window.addEventListener("scroll", detecterPositionElt);
    }

function detecterPositionElt(){
        var positions = elementPosition(elt);
        positionElt = positions.viewportY;
        console.log("Hauteur body : " + document.body.scrollHeight);
        if(positionElt < heightElt * 3/4){
            barre_progression();
            window.removeEventListener("scroll",detecterPositionElt);
        }
}

function elementPosition (a) {
    var b = a.getBoundingClientRect();
    return {
      clientX: a.offsetLeft,
      clientY: a.offsetTop,
      viewportX: (b.x || b.left),
      viewportY: (b.y || b.top)
    }
  }

function barre_progression(){
    const progress = document.querySelectorAll('.progress-value');
    const vitesse = 30;

    for (let i = 0; i < progress.length; i++){
        let limit = parseInt(progress[i].getAttribute('data-done'),10);
        for(let j = 0; j<=limit;j++){
            setTimeout(() => {
                progress[i].innerHTML = '<p>' + j + '%</p>';
                progress[i].style.width = j + '%';    
            }, vitesse * j);
        }
    }
  }

// Portfolio modal

// Les projets
const projets = document.querySelectorAll('.projets');

// fermetures des modaux
const modal__close = document.querySelectorAll('.modal__close');

projets.forEach(function(btn){
    btn.addEventListener("click", () => {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).classList.add('show');
        document.body.style.overflowY = "hidden";
    });
});

modal__close.forEach(function(btn){
    btn.addEventListener("click", () => {
        let modal = btn.closest('.modal').classList.remove('show');
        document.body.style.overflowY = "visible";
    });
});

// BOUTONS CONTACT
const btn1 = document.querySelector('.box1');
const btn2 = document.querySelector('.box2');

btn1.addEventListener('mouseenter', () => {

    btn2.classList.add('flou');
});

btn2.addEventListener('mouseenter', () => {

    btn1.classList.add('flou');
});

btn1.addEventListener('mouseleave', () => {

    btn2.classList.remove('flou');
});

btn2.addEventListener('mouseleave', () => {

    btn1.classList.remove('flou');
});