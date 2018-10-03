var target_date = new Date("december 18, 2017").getTime();
var dias=0, horas=0, minutos=0, segundos=0;
var regressiva = document.getElementById("regressiva");

setInterval(function () {

    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;
    dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);
    document.getElementById('dia').innerHTML = dias;
    document.getElementById('hora').innerHTML = horas;
    document.getElementById('minuto').innerHTML = minutos;
    document.getElementById('segundo').innerHTML = segundos;


    if(dias > 0 || horas > 0 || minutos > 0 || segundos > 0 ){

        document.getElementById('inicio1').classList.add('disable');

        document.getElementById('end').classList.add('disable');  

        document.getElementById('contagem1').classList.remove('disable');

    }else if(dias <= 0 & dias >= -2 & horas <= 0 & minutos <= 0 & segundos <= 0) {

        document.getElementById('contagem1').classList.add('disable');

         document.getElementById('end').classList.add('disable');

        document.getElementById('inicio1').classList.remove('disable');

        document.getElementById('service').classList.remove('esp-50N');

        document.getElementById('service').classList.add('esp-40N');


    }else if(dias <= -3){  

    	document.getElementById('inicio1').classList.add('disable');	

    	document.getElementById('contagem1').classList.add('disable');

    	document.getElementById('end').classList.remove('disable');

        document.getElementById('service').classList.remove('esp-50N');

        document.getElementById('service').classList.add('esp-40N');


       document.getElementById("insc").innerHTML =" <i class='fa fa-pencil-square-o' aria-hidden='true'></i><b> Inscrições:</b> Fechadas";

    }

}, 1000);
