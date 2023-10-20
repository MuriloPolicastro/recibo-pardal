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

            if (el.classList.contains('env-tudo')) {
                this.envInfoCliente(iptCliente.value, iptEnd.value);
                this.envInfoServ(desc.value, metragem.value, valor.value);
            };
        });
    };

    this.envInfoCliente = function (nome, end) {
        rcbCliente.innerHTML = `Cliente: ${nome}`;
        rcbData.innerHTML = `Data: ${this.formtData()}`;
        rcbEnd.innerHTML = `Endereço para Instalação: ${end}`;
    };

    this.envInfoServ = function (desc, metragem, valor) {
        this.addServ(desc, metragem, valor);
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

    this.criaTr = function () {
        const tr = document.createElement('tr');
        return tr;
    };

    this.criaTd = function () {
        const td = document.createElement('td');
        return td;
    };

    this.addServ = function (desc, metragem, valor) {
        const tr = this.criaTr();
        tabela.appendChild(tr);
        const td = this.criaTd();
        td.innerText = contador;
        td.innerText += desc;
        td.innerText += metragem;
        td.innerText += valor;
        tr.appendChild(td);
        contador++;
    };
}

const enviar = new EnvDados();
enviar.pressBtn();