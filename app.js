
let threedote = document.querySelector('.threedote');
let menue = document.querySelector('#menue');
let crossbtn = document.querySelector('.crossbtn');

threedote.addEventListener("click", function(){
    menue.classList.add('active');
});

crossbtn.addEventListener("click", function(){
  menue.classList.remove('active');
});

menue.addEventListener('click', function(e){
  if(e.target.classList.contains("active")){
    menue.classList.remove('active');
  }
  
});