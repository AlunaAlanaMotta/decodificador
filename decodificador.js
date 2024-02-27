// Seleciona o elemento de entrada de texto no HTML
const texto_input = document.querySelector('#myInput');

// Seleciona o elemento de saída de texto no HTML
const texto_output = document.querySelector('#output');

// Seleciona o botão de copiar no HTML (nota: o ID deve ser 'botaoCopiar' em vez de 'copiar')
const botao_copiar = document.getElementById('copiar');

// Função para criptografar a mensagem do campo de entrada
function criptografar() {
    const mensagem = texto_input.value;

    // Substitui cada vogal na mensagem por sua respectiva codificação
    const resultadoCripto = mensagem
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");


    // Atualiza a saída com o resultado criptografado e limpa o campo de entrada
    atualizarOutput(resultadoCripto);
    limparInput();
}


// Função para descriptografar a mensagem do campo de entrada
function descriptografar() {
    const mensagem = texto_input.value;

    // Substitui cada código na mensagem por sua respectiva vogal
    const resultadoDescripto = mensagem
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Atualiza a saída com o resultado descriptografado e limpa o campo de entrada
    atualizarOutput(resultadoDescripto);
    limparInput();
}

// Função para atualizar a saída com o resultado e adicionar botão de cópia
function atualizarOutput(resultado) {
    texto_output.innerHTML = `<textarea readonly id="mensagem">${resultado}</textarea>
                              <button class="botao__copiar" id="botaoCopiar">Copiar</button>`;
    const botao_copiar = document.getElementById('botaoCopiar');
    botao_copiar.addEventListener('click', copiarTexto);
}

// Função para limpar o campo de entrada
function limparInput() {
    texto_input.value = "";
}


// Função para copiar o texto da área de mensagem
function copiarTexto() {
    const textoCop = document.getElementById("mensagem");
    textoCop.select();
    document.execCommand('copy');
    alert(`Sua mensagem "${textoCop.value}" foi copiada`);
    texto_input.value = textoCop.value;
}

// Adiciona um ouvinte de eventos para o clique do usuário
document.addEventListener('click', function () {
    var audio = document.getElementById('backgroundAudio');
    audio.play();
    audio.volume = 0.2; // Defina o volume desejado (de 0 a 1)
    // Remova o ouvinte de eventos para evitar reprodução contínua ao clicar novamente
    document.removeEventListener('click', arguments.callee);
});
