window.onload= function(){


//AFASTAR O TITULO DO CABEÇALHO
var cabecalho = document.getElementById('content-logo-btn-menu');
var title = document.querySelector('.section-titles');
var btnMenu = document.getElementById('btn_menu');

title.style.marginTop= cabecalho.offsetHeight+60+'px';

//FUNÇÃO MUDA COR 
function mudaCorBackground(arg,cor){	
	arg.forEach(function(e){
		e.style.backgroundColor = cor;
	});
}
function mudaColor(arg,cor){	
	arg.forEach(function(e){
		e.style.color = cor;
	});
}


//ANIMAÇÃO BTN MENU	
var linhasBtnMenu = document.querySelectorAll('.linha');
btnMenu.addEventListener('click',function(){

	linhasBtnMenu.forEach(function(e,i){

		e.classList.toggle('togglel'+i);

	})

});

//aqui muda a cor do cabeçalho e btn menu
var pos;
window.addEventListener('scroll',function(){

	pos = window.scrollY;
	posCab = cabecalho.offsetHeight;
	var textLog = document.getElementById('logo-span');

	if (pos > posCab) {

		mudaCorBackground([cabecalho], '#fff');
		mudaCorBackground(linhasBtnMenu, '#333');
		mudaColor([textLog],"#333");

	}else{

		mudaCorBackground([cabecalho], 'initial');
		mudaCorBackground(linhasBtnMenu, '#fff');
		mudaColor([textLog],"#fff");
	}



})

	


	//efeito maquina de escrever

	function escreveFrase(elemento){

		const textArray = elemento.innerHTML.split('');
		elemento.innerHTML="";

		textArray.forEach(function(letra,i){

			setTimeout(function(){

				elemento.innerHTML += letra;

			},80 * i);

		});
	}

	const subtitulo = document.getElementById('subtitulo');
	var divSubtitulo = document.getElementById('div-subtitulo');
	divSubtitulo.style.opacity= 1;
	divSubtitulo.style.transform = 'translate3d(0,0,0)';
	escreveFrase(subtitulo);

	var aviso=document.getElementById('aviso');
	escreveFrase(aviso);






}