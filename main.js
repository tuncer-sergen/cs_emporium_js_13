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

let ca = document.getElementsByClassName("card")[0];
let para1 = document.getElementsByClassName("card-subtitle")[0];

let ac = ()=>{
    ca.style.backgroundColor = "#e41445";
    ca.style.color="white"
    para1.style.color ="white";
}

ca.addEventListener("mouseover",ac);



let ca1 = document.getElementsByClassName("card")[1];
let para2 = document.getElementsByClassName("card-subtitle")[1];

let ac1 = ()=>{
    ca1.style.backgroundColor = "#e41445";
    ca1.style.color="white"
    para2.style.color ="white";

}

ca1.addEventListener("mouseover",ac1);



let ca2 = document.getElementsByClassName("card")[2];
let para3 = document.getElementsByClassName("card-subtitle")[2];

let ac2 = ()=>{
    ca2.style.backgroundColor = "#e41445";
    ca2.style.color="white"
    para3.style.color ="white";

}

ca2.addEventListener("mouseover",ac2);

