let currentIndex = 0;

const botao = document.getElementById('change').addEventListener( 'click', function(){

    document.getElementById('textToChange').textContent = textOptions[currentIndex ];
    currentIndex = (currentIndex + 1) % textOptions.length;
});

const botao2 = document.getElementById('noChange').addEventListener( 'click', function(){
  document.getElementById('textToChange').textContent = "Texto normal";
});

const textOptions=[
  "Texto modificado 1",
  "Texto modificado 2",
  "Texto original",
  "Mais um texto",
  "Ultimo texto"
  
]
let p = document.getElementById('textToChange')