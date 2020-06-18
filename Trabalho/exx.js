function ver(){
   document.getElementById('tela').className="invisivel";
   document.getElementById('cab').className="visivel";
   document.getElementById('principal').className="visivel";
}
function ver_if(){
	document.getElementById('texto_if').className="visivel";
	document.getElementById('principal').className="invisivel";
	document.getElementById('texto_switch').className="invisivel";
    document.getElementById('question').className="invisivel";
}
function ver_switch(){
	document.getElementById('texto_switch').className="visivel";
	document.getElementById('principal').className="invisivel";
	document.getElementById('texto_if').className="invisivel";
	document.getElementById('question').className="invisivel";
}
function ver_quest(){
	document.getElementById('question').className="visivel";
	document.getElementById('principal').className="invisivel";
	document.getElementById('texto_if').className="invisivel";
	document.getElementById('texto_switch').className="invisivel";
}
function voltar(){
	document.getElementById('principal').className="visivel";
	document.getElementById('texto_if').className="invisivel";
	document.getElementById('texto_switch').className="invisivel";
	document.getElementById('question').className="invisivel";
}
function reset(){
	document.getElementById('nome').value=' ';
	document.getElementById('email').value=' ';
	document.getElementById('duv').value= ' ';
}
function enviar(){
	n=document.getElementById('nome').value;
	e=document.getElementById('email').value;
	d=document.getElementById('duv').value;

	vet=[]

	if(n=n.length){
		vet=n;
		alert("Informaçoes enviadas")
	}
}