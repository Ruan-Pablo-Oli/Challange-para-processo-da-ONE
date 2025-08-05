//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaAmigos = [];



function adicionarAmigo(){
    let campo = document.querySelector('input');
    let nomeAmigo = campo.value.trim();
    if(nomeAmigo == null){
        alert('Porfavor, insira um nome!');
    }

    listaAmigos.push(nomeAmigo);
    campo.innerHTML = '';
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


function sortearAmigo(){
    if(listaAmigos.length == 0){
        alert("A lista de amigos está vazio,adicione amigos!");
    }
}

}