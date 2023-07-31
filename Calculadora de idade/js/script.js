let input_dia = document.querySelector("#dia");
let input_mes = document.querySelector("#mes");
let input_ano = document.querySelector("#ano");
let button = document.querySelector("#calcular");

// Cria uma div para exibir os resultados
let divResultado = document.createElement("div");
document.body.appendChild(divResultado);

button.addEventListener("click", calcular);

function calcular() {
    // Limpa o resultado anterior, se houver
    limparResultado();

    let dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    let mes = dataAtual.getMonth() + 1;
    let dia = dataAtual.getDate();

    let calculo_ano = ano - input_ano.value;
    let calculo_mes = mes - input_mes.value;
    let calculo_dia = dia - input_dia.value;

    if (input_dia.value == '') {
        alert("Selecione o dia");
    } else {
        if (input_mes.value == '') {
            alert("Selecione o mês");
        } else {
            if (input_ano.value == '') {
                alert("Digite o ano");
            } else {
                if (input_ano.value > ano) {
                    alert("Ano inválido");
                } else {
                    if (calculo_mes < 0 || (calculo_mes === 0 && calculo_dia < 0)) {
                        calculo_ano--;
                        calculo_mes += 12;
                    }

                    // Calcula a próxima data de aniversário
                    let proximoAno = ano;
                    let proximoMes = input_mes.value;
                    let proximoDia = input_dia.value;

                    if (proximoMes < mes || (proximoMes === mes && proximoDia < dia)) {
                        proximoAno++;
                    }

                    let proximaDataAniversario = new Date(proximoAno, proximoMes - 1, proximoDia);

                    let calculo_dias_vividos = (calculo_ano * 365) + (calculo_mes * 30) + calculo_dia;
                    let calculo_horas_vividas = calculo_dias_vividos * 24;
                    let calculo_minutos_vividos = calculo_horas_vividas * 60;

                    // Mostra o resultado na div criada
                    let info_idade = document.createElement("p");
                    let info_dias = document.createElement("p");
                    let info_horas = document.createElement("p");
                    let info_minuto = document.createElement("p");
                    let info_proxima_data_aniversario = document.createElement("p");

                    info_idade.textContent = calculo_ano + " anos, " + calculo_mes + " meses, " + calculo_dia + " dias";
                    info_dias.textContent = "Dias vividos: " + calculo_dias_vividos;
                    info_horas.textContent = "Horas vividas: " + calculo_horas_vividas;
                    info_minuto.textContent = "Minutos vividos: " + calculo_minutos_vividos;
                    info_proxima_data_aniversario.textContent = "Próxima data de aniversário: " + proximaDataAniversario.toLocaleDateString();

                    divResultado.appendChild(info_idade);
                    divResultado.appendChild(info_dias);
                    divResultado.appendChild(info_horas);
                    divResultado.appendChild(info_minuto);
                    divResultado.appendChild(info_proxima_data_aniversario);
                }
            }
        }
    }
}

function limparResultado() {
    // Remove todos os elementos filhos da div de resultado
    while (divResultado.firstChild) {
        divResultado.removeChild(divResultado.firstChild);
    }
}
