// Capturar evento de submit do formulário para parar o envio
const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inpoutAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inpoutAltura.value);

    if(!peso){
        setResult('Peso inválido', false);
        return;
    }

    if(!altura){
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc( peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResult(msg, true);
});

// Calcula o nivel do peso
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];

    if (imc >= 34.9) return nivel[4];
    
    if (imc >= 29.9) return nivel[3];
    
    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];
    
    if (imc <  18.5) return nivel[0];
    
}

// Função que calcula o IMC
function getImc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

// Função que cria um parágrafo com uma classe
function criaP(){
    const p = document.createElement('p'); // Cria um parágrafo onde o resultado vazio recebe oque foi criado
    return p;
}

// Função que adiciona o resultado abaixo do botão enviar
function setResult(msg, isValid) {
    const resultado = document.querySelector('#resultado'); // Limpa a mensagem
    resultado.innerHTML = '';
    const p = criaP();

    if(isValid) {
        p.classList.add('pResult');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}