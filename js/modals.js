let modalIntro = document.getElementById('modal-intro');
let buttonIntro = document.getElementById('button-intro');
let close = document.getElementsByClassName('close')[0];

buttonIntro.addEventListener ('click', function(){
    modalIntro.classList.remove("out");
    modalIntro.classList.add("in");
});

close.addEventListener('click', function (){
    modalIntro.classList.add("out");
});

let modalWork = document.getElementById('modal-work');
let buttonWork = document.getElementById('button-work');
let close1 = document.getElementsByClassName('close')[1];

buttonWork.addEventListener ('click', function(){
    modalWork.classList.remove("out");
    modalWork.classList.add("in");
});

close1.addEventListener('click', function (){
    modalWork.classList.add("out");
});

let modalAbout = document.getElementById('modal-about');
let buttonAbout = document.getElementById('button-about');
let close2 = document.getElementsByClassName('close')[2];

buttonAbout.addEventListener ('click', function(){
    modalAbout.classList.remove("out");
    modalAbout.classList.add("in");
});

close2.addEventListener('click', function (){
    modalAbout.classList.add("out");
});

let modalContact = document.getElementById('modal-contact');
let buttonContact = document.getElementById('button-contact');
let close3 = document.getElementsByClassName('close')[3];

buttonContact.addEventListener ('click', function(){
    modalContact.classList.remove("out");
    modalContact.classList.add("in");
});

close3.addEventListener('click', function (){
    modalContact.classList.add("out");
});