var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector(".container");

/*log*/
btnSignin.addEventListener("click", function () {
   body.className = "container sign-in-js"; 
});

/*cadst*/
btnSignup.addEventListener("click", function () {
    body.className = "container sign-up-js";
})

function mostrarPrecos(cidade) {
    
    let abas = document.querySelectorAll('.aba');
    let precos = document.querySelectorAll('.precos');

    abas.forEach(botao => botao.classList.remove('ativa'));
    precos.forEach(secao => secao.classList.remove('ativo'));

    document.getElementById(`precos-${cidade}`).classList.add('ativo');
    event.target.classList.add('ativa');
    
}