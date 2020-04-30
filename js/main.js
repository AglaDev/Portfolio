window.onload= function(){
	//mudar cores cabeçalho
	var cabecalho = document.getElementById('content-logo-btn-menu');
	var btnMenu = document.getElementById('btn_menu');
	var textLogo = document.getElementById('logo-span');
	var titlesCabecalho = document.getElementsByClassName('section-titles')[0];
	titlesCabecalho.style.marginTop = cabecalho.offsetHeight+60+'px';

	window.addEventListener('scroll',function(){


		function mudaCor(args,cor){

			for(let i = 0; i < args.length; i++){

				args[i].style.color = cor;
			}

		}

		if(window.scrollY > cabecalho.offsetHeight){
			
			cabecalho.style.backgroundColor = 'rgba(255,255,255,1)';
			mudaCor([btnMenu,textLogo],'#333');

		}else{
			cabecalho.style.backgroundColor = 'initial';
			mudaCor([btnMenu,textLogo],'#fff');
		}
	})

	//TITLES DO cabeçalho
	var divp = document.querySelector('#div-subtitulo');
	divp.style.opacity='1';
	divp.style.transform = 'translate3d(0,0,0)';

	//efeito maquina de escrever

	function escreveFrase(elemento){

		const textArray = elemento.innerHTML.split('');
		elemento.innerHTML="";

		textArray.forEach(function(letra,i){

			setTimeout(function(){

				elemento.innerHTML += letra;

			},75 * i);

		});
	}

	const subtitulo = document.getElementById('subtitulo');
	escreveFrase(subtitulo);
	var aviso=document.getElementById('aviso');
	escreveFrase(aviso);


}