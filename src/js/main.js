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

// yasmina
let image1 = document.getElementsByClassName("d-block")[0];


let im = ()=>{
    image1.style.transform = "scale(1.2)" 
    ;
    image1.style.transition = "3s";
  


}

image1.addEventListener("mouseover",im);



let image2 = document.getElementsByClassName("d-block")[1];

let ima = ()=>{
    image2.style.transform = "scale(1.2)" 
    ;
    image2.style.transition = "3s"
   
}



image2.addEventListener("mouseover",ima);


let image3 = document.getElementsByClassName("d-block")[2];

let imag = ()=>{
    image3.style.transform = "scale(1.2)" 
    
    image3.style.transition = "3s"
}

image3.addEventListener("mouseover",imag);

let image4 = document.getElementsByClassName("d-block")[3];

let image = ()=>{
    image4.style.transform = "scale(1.2)" 
    ;
    image4.style.transition = "3s"
}

image4.addEventListener("mouseover",image);


// cards 3/////////////

let ca = document.getElementsByClassName("card-body")[0];
let para1 = document.getElementsByClassName("card-subtitle")[0];

let ac = ()=>{
    ca.style.backgroundColor = "#e41445";
    ca.style.color="white"
    para1.style.color ="white";
}

ca.addEventListener("mouseover",ac);
ca.addEventListener('mouseout',()=>{
    ca.style.background = 'rgb(235,229,222)'
    ca.style.color = 'black'
});


let ca1 = document.getElementsByClassName("card-body")[1];
let para2 = document.getElementsByClassName("card-subtitle")[1];

let ac1 = ()=>{
    ca1.style.backgroundColor = "#e41445";
    ca1.style.color="white"
    para2.style.color ="white";

}

ca1.addEventListener("mouseover",ac1);
ca1.addEventListener('mouseout',()=>{
    ca1.style.background = 'rgb(235,229,222)'
    ca1.style.color = 'black'
});


let ca2 = document.getElementsByClassName("card-body")[2];
let para3 = document.getElementsByClassName("card-subtitle")[2];

let ac2 = ()=>{
    ca2.style.backgroundColor = "#e41445";
    ca2.style.color="white"
    para3.style.color ="white";

}

ca2.addEventListener("mouseover",ac2);

ca2.addEventListener('mouseout',()=>{
    ca2.style.background = 'rgb(235,229,222)'
    ca2.style.color = 'black'
});