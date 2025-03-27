'use strict'

const menu = document.querySelector('#menu');
const menuBOx = document.querySelector('#menu-box')
menu.addEventListener('click' , function(){
    if(menuBOx.style.display === 'none'){
        menuBOx.style.display ='block'
    }else{
        menuBOx.style.display ='none'


    }
})