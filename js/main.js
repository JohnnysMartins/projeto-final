

var texto = "Faça sua busca aqui!";
function preenche(){
    var valor=document.getElementById("busca").value;
    if(valor == ""){
        document.getElementById("busca").value=texto;
    }
}
function limpa(){
    var valor=document.getElementById("busca").value;
    if (valor == texto) {
        document.getElementById("busca").value='';
    }
}