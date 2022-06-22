// ------ Var globales : ---- 
// Les différentes parties
let accueil = document.querySelector("#Accueil");
let a_propos = document.querySelector("#A_mon_propos");
let competences = document.querySelector("#competences");
let portfolio = document.querySelector("#Portfolio");
let contact = document.querySelector("#contact");

// position de chaque partie
let posAccueil = elementPosition(accueil).viewportY;
let posAPropos = elementPosition(a_propos).viewportY;
let posPortfolio = elementPosition(portfolio).viewportY;
let posCompetences = elementPosition(competences).viewportY;
let posContact = elementPosition(contact).viewportY;

// les liens pour y accéder
let lien_accueil = document.querySelector(".lienAccueil");
let lien_a_propos = document.querySelector(".lienA_mon_propos");
let lien_competences = document.querySelector(".lienCompetences");
let lien_portfolio = document.querySelector(".lienPortfolio");
let lien_contact = document.querySelector(".lienContact");

// -------------------- MENU -----------------------
const burger = document.querySelector('.burger');
const menu = document.querySelector('.navigationMobile');

burger.addEventListener("click",()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('menuShow');
});


//  ------------ Defilement vers une partie -------------------
lien_accueil.addEventListener("click", () => {
    window.scrollTo({
        top:posAccueil,
        left:0,
        behavior:"smooth"
    });
});


lien_a_propos.addEventListener("click", () => {
    window.scrollTo({
        top:posAPropos,
        left:0,
        behavior:"smooth"
    });
});

lien_competences.addEventListener("click", () => {
    window.scrollTo({
        top:posCompetences,
        left:0,
        behavior:"smooth"
    });
});


lien_portfolio.addEventListener("click", () => {
        window.scrollTo({
            top:posPortfolio,
            left:0,
            behavior:"smooth"
        });
});



lien_contact.addEventListener("click", () => {
    window.scrollTo({
        top:posContact,
        left:0,
        behavior:"smooth"
    });
});

// ------------- Animation écriture des titres couvertures ------
const titre_mon_nom = document.querySelector(".container_titres h1");
new Typewriter(titre_mon_nom, {
    deleteSpeed: 20
})
.changeDelay(20)
.typeString("Inès El Ouali")
.pauseFor(300)
.typeString("<br><strong> Développeuse full-stack</strong> !")
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color:#A7D6C1"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style= "color:#F0C873"> PHP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:#ff6910">Javascript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString("full-stack !")
.start();

// -------------- BARRE DE PROGRESSION ------------------ 

window.addEventListener("scroll", detecterPositionElt);
function detecterPositionElt(){
        positionCouranteP = elementPosition(portfolio).viewportY;
        if(positionCouranteP <= posPortfolio ){
            barre_progression();
            window.removeEventListener("scroll", detecterPositionElt);
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

// ---------------------- BOUTONS CONTACT -------------------------
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

