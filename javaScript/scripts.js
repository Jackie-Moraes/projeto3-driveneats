// var selecoes = document.querySelectorAll(".item");
// var numSelected = 0;
// for(var i = 0;i<selecoes.length;i++){
//     selecoes[i].addEventListener("click", function(){        
//         if(this.classList.contains("selected")){
//             this.classList.remove("selected");
//             numSelected--;
//         }
//         else if(numSelected < 1){
//             this.classList.add("selected");
//             numSelected++;
//         }
//     });
// }


function selecaoPrato(prato) {
    const selecionado = document.querySelector(".pratos .selected");
    if (selecionado !== null) {
        selecionado.classList.remove("selected");
    }
    
    prato.classList.toggle("selected");
}

function selecaoBebida(bebida) {
    const selecionado = document.querySelector(".bebidas .selected");
    if (selecionado !== null) {
        selecionado.classList.remove("selected");
    }


    bebida.classList.toggle("selected");
}

function selecaoSobremesa(sobremesa) {
    const selecionado = document.querySelector(".sobremesas .selected");
    if (selecionado !== null) {
        selecionado.classList.remove("selected");
    }
   
    sobremesa.classList.toggle("selected");
}