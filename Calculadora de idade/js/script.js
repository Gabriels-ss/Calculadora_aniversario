let input_dia = document.querySelector("#dia");
let input_mes = document.querySelector("#mes");
let input_ano = document.querySelector("#ano");
let button = document.querySelector("#calcular");

button.addEventListener("click", calcular);

function calcular() {
    let dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    let mes = dataAtual.getMonth() + 1;
    let dia = dataAtual.getDate();

    let calculo_ano = ano - input_ano.value;
    let calculo_mes = mes - input_mes.value;
    let calculo_dia = dia - input_dia.value;

    if (calculo_mes < 0 || (calculo_mes === 0 && calculo_dia < 0)) {
        calculo_ano--;
        calculo_mes += 12;
    }

    if (calculo_dia < 0) {
        let antidiasnegativo = new Date(input_ano.value, input_mes.value, 0).getDate();
        calculo_mes--;
        calculo_dia += antidiasnegativo;
    }


    let calculo_dias_vividos = (calculo_ano * 365) + (calculo_mes * 30) + calculo_dia;
    let calculo_horas_vividas = calculo_dias_vividos * 24;
    let calculo_minutos_vividos = calculo_horas_vividas * 60;

    console.log("Dia: " + calculo_dia);
    console.log("Mês: " + calculo_mes);
    console.log("Anos: " + calculo_ano);
    console.log("Dias vividos: " + calculo_dias_vividos);
    console.log("Horas vividas: " + calculo_horas_vividas);
    console.log("Minutos vividos: " + calculo_minutos_vividos);
}
