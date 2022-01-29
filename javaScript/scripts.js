let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

// Variável pra criar a tela bonus se der tempo
let pedidos = [];

function selecaoPrato(prato) {
    const selecionado = document.querySelector('.pratos .selected');
    const icone = document.querySelector('.pratos .aparecendo')

    if (selecionado !== null || icone !== null) {
        selecionado.classList.remove("selected");
        icone.classList.remove("aparecendo");
    }
    
    prato.querySelector('.icone').classList.add('aparecendo');
    prato.classList.add("selected");

    pratoSelecionado = prato.querySelector('.nome').innerHTML;
    pedidos[0] = prato;

    
    finalizarPedido();
}

function selecaoBebida(bebida) {
    const selecionado = document.querySelector(".bebidas .selected");
    const icone = document.querySelector('.bebidas .aparecendo')

    if (selecionado !== null || icone !== null) {
        selecionado.classList.remove("selected");
        icone.classList.remove("aparecendo");
    }

    bebida.querySelector('.icone').classList.add('aparecendo');
    bebida.classList.add("selected");

    bebidaSelecionada = bebida.querySelector('.nome').innerHTML;
    pedidos[1] = bebida;

    
    finalizarPedido();
}

function selecaoSobremesa(sobremesa) {
    const selecionado = document.querySelector(".sobremesas .selected");
    const icone = document.querySelector(".sobremesas .aparecendo");

    if (selecionado !== null || icone !== null) {
        selecionado.classList.remove("selected");
        icone.classList.remove("aparecendo");
    }
   
    sobremesa.querySelector('.icone').classList.add('aparecendo');
    sobremesa.classList.add("selected");

    sobremesaSelecionada = sobremesa.querySelector('.nome').innerHTML;
    pedidos[2] = sobremesa;


    finalizarPedido();
}


function finalizarPedido() {
    if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        document.getElementById('finalPedido').innerHTML = "Fechar pedido"
        document.getElementById('bordaPedido').style.backgroundColor = "#32B72F";
    }
}