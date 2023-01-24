var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.icone i');

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}