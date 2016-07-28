

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
$(function busca(){
			$("#txtBusca").keyup(function(){
				var texto = $(this).val();
		
				$("#ulItens li").css("display", "block");
				$("#ulItens li").each(function(){
					if($(this).text().toUpperCase().indexOf(texto.toUpperCase()) < 0)
   						$(this).css("display", "none");
				});
			});
		});