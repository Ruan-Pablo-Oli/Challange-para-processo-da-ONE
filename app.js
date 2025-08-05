//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaAmigos = [];



function adicionarAmigo(){
    let campo = document.querySelector('input');
    let nomeAmigo = campo.value.trim();
    if(nomeAmigo == ''){
        alert('Porfavor, insira um nome!');
        return 
    }

    campo.value = '';
    listaAmigos.push(nomeAmigo);
    atualizarListaAmigos();
}

function atualizarListaAmigos(){
    let campoListaAmigos = document.getElementById('listaAmigos');
    campoListaAmigos.innerHTML = '';
    for(i = 0; i < listaAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        campoListaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    console.log("Aqui");
    console.log(listaAmigos);
    let quantidadeListaAmigos = listaAmigos.length;
    if(quantidadeListaAmigos == 0){
        alert('A lista de amigos está vazia, por favor insira amigos!');
    }

    let resultadoCampo = document.getElementById("resultado");
    resultadoCampo.innerHTML = '' ;

    let li = document.createElement("li");
    li.textContent = listaAmigos[gerarNumeroAleatorio(quantidadeListaAmigos)];
    resultadoCampo.appendChild(li); 


}


function gerarNumeroAleatorio(n){
    return parseInt(Math.random() * n);
}

