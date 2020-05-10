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


//ANIMAÇÃO BTN MENU	E CONTENT MENU
var linhasBtnMenu = document.querySelectorAll('.linha');
var contentMenu = document.getElementById('content-menu');

btnMenu.addEventListener('click',function(){

	linhasBtnMenu.forEach(function(e,i){

		e.classList.toggle('togglel'+i);

	})


	contentMenu.classList.toggle('content-menu-toggle');

});

//aqui muda a cor do cabeçalho e btn menu
var pos;
window.addEventListener('scroll',function(){

	pos = window.scrollY;
	posCab = cabecalho.offsetHeight;
	var textLog = document.getElementById('logo-span');

	if (pos > posCab) {

		mudaCorBackground([cabecalho], '#fff');
		cabecalho.style.borderBottom = "rgba(0,170,255,0.2) 1px solid";
		mudaCorBackground(linhasBtnMenu, '#333');
		mudaColor([textLog],"#333");

	}else{

		mudaCorBackground([cabecalho], 'initial');
		cabecalho.style.borderBottom = "rgba(255,255,255,.2) 1px solid";
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

	//ANIMAÇÕES NA SECTION DE SERVIÇOS
	//usar variavel pos
	var servicos = document.querySelectorAll('.servico');
	var offset = window.innerHeight * 2.6 /4;
	console.log(offset);
	function animeScroll(){
		
		var docTop = window.scrollY;
		
		servicos.forEach(function(e){
			var divTitle = e.querySelector('.div-titles');
			var imgZoom = e.querySelector('.div-img img');
			var itemTop = e.offsetTop;
			
			if(docTop > itemTop - offset){
				divTitle.classList.add('div-titles-active');
				imgZoom.classList.add('img-zoom');

			}else{
				divTitle.classList.remove('div-titles-active');
				imgZoom.classList.remove('img-zoom');
			}

		});

	}

	

	animeScroll();
	
	window.addEventListener('scroll', function(){


		animeScroll();


	});

	




}