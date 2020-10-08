let body = document.querySelector('body')
let navA = document.querySelectorAll('a')
let tabNavA = Array.from(navA)
let buttonClair = document.querySelectorAll('button')[1]
let buttonSombre = document.querySelectorAll('button')[2]
let buttonConnexion = document.querySelectorAll('button')[3]
// bouton sombre
buttonSombre.addEventListener('click',()=>{
    body.style.background = 'black'
    body.style.color = 'white'
    modal1.style.background = 'black'
    buttonConnexion.setAttribute('class','text-dark bg-white border-0')
    tabNavA.forEach(element => {
        element.style.color = 'white'
    });
})
// bouton clair
buttonClair.addEventListener('click',()=>{
    body.style.background = 'white'
    body.style.color = ''
    modal1.style.background = ''
    buttonConnexion.setAttribute('class','bg-secondary border-0 text-white')
    tabNavA.forEach(element => {
        element.style.color = ''
    });
})

// agrandissement image
let divAgrandit = document.getElementsByClassName('imgAgrandit')
tabDivAgrandit = Array.from(divAgrandit)

tabDivAgrandit.forEach(element => {
    let divAgranditImg = element.querySelectorAll('img')
    divAgranditImg.forEach(element => {
        element.style.position = 'relative'
        element.addEventListener('mouseover',(e)=>{
            element.style.transform = 'scale(1.25)'
            element.style.zIndex = "99"
        })
        element.addEventListener('mouseout',()=>{
            element.style.transform = 'scale(1)'
        })
    });
});

// ligne blanche cards

let imgcards1 = document.querySelector('.imgcards1')
let imgcards2 = document.querySelector('.imgcards2')
let imgcards3 = document.querySelector('.imgcards3')
let hr = document.getElementsByClassName('hrtest')
tabhr = Array.from(hr)
let tabImgcards = [imgcards1,imgcards2,imgcards3]
tabImgcards.forEach(element => {
    element.addEventListener('mouseover',(e)=>{
        if(e.target.nodeName == 'DIV'){
            e.target.children[1].style.width = '20%'
        }
    })
    element.addEventListener('mouseout',()=>{
        tabhr.forEach(element => {
            element.style.width = '300px'
        });
    })
});


// navbar fixed
let nav = document.querySelector('nav')
let sticky = nav.offsetTop
window.onscroll = function() {myFunction()};
function myFunction() {
    if (window.pageYOffset >= sticky) {
      nav.style.position = 'fixed'
      nav.style.top = 0
      nav.style.left = '10%'
      nav.style.zIndex = '100'
      nav.style.border = 'black 1px solid'
    } else {
        nav.style.position = ''
        nav.style.top = ''  
        nav.style.left = ''
        nav.style.zIndex = ''
        nav.style.border = ''  
    }
  }

//   bouton connexion
let modal1 = document.getElementsByClassName('modal1')[0]
console.log(modal1)
body.addEventListener('click',(e)=>{
    if(e.target == buttonConnexion){
        modal1.style.opacity = 1
        modal1.style.visibility = 'visible'   
    }
})

// bouton s'inscrire
let spanInscrire = document.getElementsByClassName('inscrire')[0]
let co = document.getElementById('connexion')
let insc = document.getElementById('inscription') 
let salut2 = document.getElementsByClassName('salut2')[0]
spanInscrire.addEventListener('click',()=>{
    co.style.display = 'none'
    insc.style.display = 'block'
})
let connecter = document.getElementsByClassName('connecter')[0]
connecter.addEventListener('click',()=>{
    co.style.display = 'block'
    insc.style.display = 'none'
})

// bouton annulé
let annule1 = document.getElementsByClassName('annule')[0]
let annule2 = document.getElementsByClassName('annule')[1]

annule1.addEventListener('click',()=>{
    modal1.style.opacity = 0
    modal1.style.visibility = 'hidden'
})
annule2.addEventListener('click',()=>{
    modal1.style.opacity = 0
    modal1.style.visibility = 'hidden'
})




let collapse = document.getElementById('collapse')
let navChild = nav.children[0]
let navChildChild = navChild.children
console.log(navChild);
let tabnavChild = Array.from(navChildChild)
collapse.addEventListener('click',()=>{
    tabnavChild.forEach(element => {
        if(element.style.display == 'none' || element.style.display == ''){
            element.style.display = 'flex'    
            element.className = ''
            navChild.style.display = 'flex'
            navChild.style.flexDirection = 'column'
        }else{
            element.style.display = 'none'
        }
    });
})

