let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

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
}

