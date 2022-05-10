// Selecionou as tags
// Interceptar o clique no botão
// Pegar as informações que estão dentro do campo

const btnSortear = document.querySelector(".botaoSortear")
const textarea = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const btnFechar = document.querySelector(".fechar")

// Pegandos Dados do Formulário
function pegarDadosFormulario(){
    
    // Recuperando o valor do campo (textarea)
    const valorCampo = textarea.value
    const listaNomes = valorCampo.split(",")
    const tamanhoArray = listaNomes.length
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray)
    const nome = listaNomes[posicaoNome]
    mostrarResultado(nome)
    
    textarea.value = ""
}

// Interceptando o click / Executando Função
btnSortear.addEventListener("click", pegarDadosFormulario)

// Gerando número aleatório
function gerarNumeroAleatorio(tamanhoArray){
    
    return Math.floor(Math.random() * (tamanhoArray - 0) + 0)
}

function mostrarResultado(nome){

    tagResultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}

function fecharPopUp(){

    popUpResultado.classList.remove("mostrarResultado")
}

btnFechar.addEventListener("click", fecharPopUp)