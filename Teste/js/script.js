const header = getElmentsByTagName('header')[0];
const menu = header.offSetTop;

window.onscroll = function(){
	fixarNoTopo();
}

function fixarNoTopo(){

     if(window.pageYOffset >= menu){
         header.classList.add('fixed')
     }

     else{
     	header.classList.remove('fixed')
     }
 }