var toggleButton =document.querySelector('.toggle-button');
var mobileNav =document.querySelector('.mobile-nav');
var backDrop =document.querySelector('.backdrop');
toggleButton.addEventListener('click',function(){
     mobileNav.style.display ='block';
     backDrop.style.display='block';
  });
  backDrop.addEventListener('click',function(){
    mobileNav.style.display ='none';
    backDrop.style.display='none';
  })