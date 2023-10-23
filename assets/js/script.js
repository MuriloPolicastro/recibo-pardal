/*
Pegar nome do cliente e enviar para o campo cliente
pegar data e enviar para campo data
pegar end e enviar para campo end
*/
function EnvDados() {
    const iptCliente = document.querySelector('#cliente');
    const rcbCliente = document.querySelector('.nome-cliente');
    const iptData = document.querySelector('#input-data');
    const rcbData = document.querySelector('.data-recibo');
    const iptEnd = document.querySelector('#input-end');
    const rcbEnd = document.querySelector('.end-recibo');

    const tabela = document.querySelector('.tabela-servicos');
    const desc = document.querySelector('#desc-serv');
    const metragem = document.querySelector('#metragem');
    const valor = document.querySelector('#valor');

    let contador = 1;


    this.pressBtn = function () {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('enviar')) {
                this.envInfoCliente(iptCliente.value, iptEnd.value);
                this.addServ(contador ,desc.value, metragem.value, this.formtValor());
                this.limpaServ();
            };

            if (el.classList.contains('remover')) {
                this.rmvTr();
            };
        });
    };

    this.envInfoCliente = function (nome, end) {
        rcbCliente.innerHTML = `Cliente: ${nome}`;
        rcbData.innerHTML = `Data: ${this.formtData()}`;
        rcbEnd.innerHTML = `Endereço para Instalação: ${end}`;
    };

    this.formtData = function () {
        const dataIpt = new Date(iptData.value),
            dia = (dataIpt.getDate() + 1).toString(),
            diaF = (dia.length == 1) ? `0${dia}` : dia,
            mes = (dataIpt.getMonth() + 1).toString(),
            mesF = (mes.length == 1) ? `0${mes}` : mes,
            anoF = dataIpt.getFullYear();
        return `${diaF}/${mesF}/${anoF}`;
    };

    this.formtValor = function () {
        const valorString = valor.value.toString();
        const valorF = `R$ ${valorString}`;
        return valorF;
    };

    this.addServ = function (cont, desc, metragem, valor) {
        const tr = document.createElement('tr');
        tabela.appendChild(tr);
        const itens = [cont, desc, metragem, valor];
        for (i of itens) {
            const td = document.createElement('td');
            td.innerText += i;
            tr.appendChild(td);
        }
        contador++
    };

    this.limpaServ = function () {
        desc.value = '';
        metragem.value = '';
        valor.value = '';
    };

    this.rmvTr = function () {
        tabela.removeChild(tabela.lastChild)
    };
}

const enviar = new EnvDados();
enviar.pressBtn();