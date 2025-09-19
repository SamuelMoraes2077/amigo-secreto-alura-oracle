let amigos = []

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome == "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    amigos.push(nome); // Adiciona nome a lista de amigos
    input.value = ""; // Limpa o campo de input
    console.log(amigos); // Exibir lista de amigos no console
    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
} 

console.log(amigos.length);


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    let sorteados = amigos.slice(); // Cria uma cópia da lista de amigos

    for (let i = sorteados.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]]; // Troca os elementos
    }

    let lista = document.getElementById("resultado");
    lista.innerHTML = ""; // Limpa o resultado antes de atualizar
    for (let i = 0; i < sorteados.length; i++) {
        let li = document.createElement("li");
        li.textContent = sorteados[i];
        lista.appendChild(li);
    }
}