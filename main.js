
const form = document.getElementById('form-atividade');
const imgAprovado = '<img src=./images/aprovado.png alt="emoji celebrando"/>';
const imgReprovado = '<img src=./images/reprovado.png alt="emoji decepcionado"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseInt(prompt('Digite a nota minima'));


let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
    
})



function adicionaLinha (){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`Atividade ${inputNomeAtividade.value} já cadastrada`);
    }else{

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    

    let linha ='<tr>';    
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado :imgReprovado }</td>`;
    linha += '<tr>';

    linhas += linha
    }


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado :spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0

    for(let i=0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}



/* Codigo Original
const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = '<img src=./images/aprovado.png alt="emoji celebrando"/>'
const imgReprovado = '<img src=./images/reprovado.png alt="emoji decepcionado"/>'

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    

    let linha ='<tr>';    
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado :imgReprovado }</td>`;
    linha += '<tr>';

    linhas += linha

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
})
*/