const amigos = [];

window.adicionarAmigo = function() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  input.value = '';
  atualizarLista();
  limparResultado();
}

function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function limparResultado() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
}

window.sortearAmigo = function() {
  const resultado = document.getElementById('resultado');

  if (amigos.length === 0) {
    alert('Não há amigos para sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
