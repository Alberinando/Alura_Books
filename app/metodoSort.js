let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', OrdenarPorPreco);

function OrdenarPorPreco() {
    let livrosOrdernados = livros.sort((a,b)=> a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdernados);
}