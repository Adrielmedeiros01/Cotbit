
function pegarHorarioAtual() {
    const agora = new Date();
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    const ano = agora.getFullYear();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos} - ${dia}:${mes}:${ano} - ${diaSemana}`;
}
//=============================================================================================================
function atualizarHorario() {
    const elementoData = document.getElementById('data');
    document.getElementById("data").style.fontWeight = "normal";
    elementoData.textContent = pegarHorarioAtual();
}
// Atualiza o horário a cada segundo
setInterval(atualizarHorario, 1000);
//=============================================================================================================
// atualizarHorario(); // Atualiza imediatamente ao carregar
//=============================================================================================================
async function pegarCotacaoBitcoin() {
    try {
        const resposta = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl,usd,eur');
        const dados = await resposta.json();
        const brl = dados.bitcoin.brl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const usd = dados.bitcoin.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        document.getElementById("cotacao").style.fontWeight = "bold";
        document.getElementById('cotacao').innerHTML =
            ` BRL: ${brl}<br>
              USD: ${usd}`
    }
    catch (erro) {
        document.getElementById('cotacao').textContent = 'Carregando...';
        console.error(erro);
    }
}
async function pegarCotacaoBitcoin2() {
    try {
        const resposta = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl,usd,eur');
        const dados = await resposta.json();
        const usd = dados.bitcoin.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        document.getElementById("cotacaoD").style.fontWeight = "bold";
        document.getElementById('cotacaoD').innerHTML =
            `${usd}`
    }
    catch (erro) {
        document.getElementById('cotacaoD').textContent = 'Carregando...';
        console.error(erro);
    }
}
// Atualiza a cada 10 segundos
pegarCotacaoBitcoin();
setInterval(pegarCotacaoBitcoin, 10000);
pegarCotacaoBitcoin2()
setInterval(pegarCotacaoBitcoin2, 10000);
//=============================================================================================================
