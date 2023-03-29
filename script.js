//skapa ref till html tag
let menuIcon = document.querySelector('#js-menu-toggle');
// console.log('menuIcon');
let menuList = document.querySelector('#js-menu');

//lägg på en lyssnare på menuIcon som lyssnar efter klikc
menuIcon.addEventListener('click', function(){
    //vad ska hända n är jag klickar
    console.log('klick klick');
    //lägger på en klass på menuList vid klick 
    menuList.classList.toggle('active');
    menuIcon.classList.toggle('exit');
});

