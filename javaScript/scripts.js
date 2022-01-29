let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

let converterPreco = 0;
let pratoPreco = 0;
let bebidaPreco = 0;
let sobremesaPreco = 0;

let precoTotal = 0;
let valorExibido = 0;
let valorPedido = 0;

let nome = null;
let endereco = null;

// Não deixei meu número porque o Git vai ficar público
let numeroRestaurante = 5521966810553;


function selecaoPrato(prato) {
    const selecionado = document.querySelector('.pratos .selected');
    const icone = document.querySelector('.pratos .aparecendo')

    if (selecionado !== null || icone !== null) {
        selecionado.classList.remove("selected");
        icone.classList.remove("aparecendo");
    }
    
    prato.querySelector('.icone').classList.add('aparecendo');
    prato.classList.add("selected");

    converterPreco = prato.querySelector('.price').attributes.value.value;
    pratoPreco = converterPreco;

    pratoSelecionado = prato.querySelector('.nome').innerHTML;

    
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

    converterPreco = bebida.querySelector('.price').attributes.value.value;
    bebidaPreco = converterPreco;

    bebidaSelecionada = bebida.querySelector('.nome').innerHTML;

    
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

    converterPreco = sobremesa.querySelector('.price').attributes.value.value;
    sobremesaPreco = converterPreco;

    sobremesaSelecionada = sobremesa.querySelector('.nome').innerHTML;
    finalizarPedido();
}


function finalizarPedido() {
    if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        document.getElementById('finalPedido').innerHTML = "Fechar pedido"
        document.getElementById('bordaPedido').style.backgroundColor = "#32B72F";
        precoTotal = parseInt(pratoPreco) + parseInt(bebidaPreco) + parseInt(sobremesaPreco);
        valorExibido = precoTotal.toFixed(2);
        valorPedido = valorExibido.toString().replace('.',',')
    }
}

function confirmarPedido() {
    if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        document.querySelector(".backgroundConfirmacao").classList.remove("escondido");
        
        document.getElementById('pratoFim').innerHTML = pratoSelecionado;
        document.getElementById('pratoFimValor').innerHTML = pratoPreco;

        document.getElementById('bebidaFim').innerHTML = bebidaSelecionada;
        document.getElementById('bebidaFimValor').innerHTML = bebidaPreco;

        document.getElementById('sobremesaFim').innerHTML = sobremesaSelecionada;
        document.getElementById('sobremesaFimValor').innerHTML = sobremesaPreco;

        document.getElementById('valorFim').innerHTML = "R$ " + valorPedido;
    }
}

function esconderPedido() {
    document.querySelector(".backgroundConfirmacao").classList.add("escondido");   
}

function enviarPedido() {

    nome = prompt("Insira seu nome!");
    endereco = prompt("Insira seu endereço!");

    let mensagemWhatsapp = `Olá, gostaria de fazer o pedido:
- Prato: ${pratoSelecionado}
- Bebida: ${bebidaSelecionada}
- Sobremesa: ${sobremesaSelecionada}
Total: R$ ${valorExibido}
                
Nome: ${nome}
Endereço: ${endereco}`

    let mensagemCriptografada = encodeURIComponent(mensagemWhatsapp);

    let linkPedido = `https://wa.me/${numeroRestaurante}?text=${mensagemCriptografada}`
    window.open(linkPedido);
}

