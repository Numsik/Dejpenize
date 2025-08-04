const cudlik = document.querySelector('.Cudlik');
const img = document.querySelector('.imgg');
const div = document.querySelector('.tadybudewidth');
let isvisible = false;


cudlik.addEventListener('click', () =>{
    if (!isvisible){
        img.style.opacity = 1;
        isvisible = true;
        div.classList.toggle('active')
        
    }else{
        img.style.opacity = 0
        div.classList.remove('active')
        isvisible = false;
        
    }
    
    

})