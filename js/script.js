const elementoNome = document.getElementById("nome");
const elementoSituacao = document.querySelector("#situacao");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#alterar");

elementoBtn.addEventListener("click",  () => {

    if(elementoBtn.value == "primeiro"){
        elementoImg.src = "../img/2-Trabalhando.png"
        elementoNome.innerText = "Ray Tomlinson, que inventou o e-mail."
        elementoSituacao.innerText = "Trabalhando;"
        elementoBtn.value = "segundo"
    }

    else if(elementoBtn.value == "segundo") { 
        elementoImg.src = "../img/3-Almoçando.png"
        elementoNome.innerText = "Linus Torvalds, escreveu o kernel Linux e criou o sistema de controle de versão Git."
        elementoSituacao.innerText = "Almoçando;"
        elementoBtn.value = "terceiro"
    }

    else if(elementoBtn.value == "terceiro") { 
    elementoImg.src = "../img/4-Descansando.png" 
    elementoNome.innerText = "James Gosling, que criou o Java."
    elementoSituacao.innerText = "Descansando;"
    elementoBtn.value = "quarto"
    }

    else if(elementoBtn.value == "quarto") { 
    elementoImg.src = "../img/5-Com_os_Amigos.png"
    elementoNome.innerText = "Rasmus Lerdorf, que escreveu a primeira versão do PHP."
    elementoSituacao.innerText = "Com os Amigos."
    elementoBtn.value = "quinto"
    }

    else if(elementoBtn.value == "quinto") { 
    elementoImg.src ="../img/6-Dormindo.png"
    elementoNome.innerText = "Você amanhã fazendo diferente, separe um momento do dia e se levante, o mundo é belo, é só você querer olhar ele com os seus proprios olhos ao invés dos olhos na tela!"
    elementoSituacao.innerText = "Dormindo"
    elementoBtn.value = "sexto"
    }

    else { 
        elementoImg.src = "../img/1-Café_da_Manhã.png"
        elementoNome.innerText = "Bill Gates, que revolucionou o computador pessoal!"
        elementoSituacao.innerText = "Café da Manhã;"
        elementoBtn.value = "primeiro"
    }

})

