/*
Pegar nome do cliente e enviar para o campo cliente
pegar data e enviar para campo data
pegar end e enviar para campo end
*/
function EnvDados () {
    const iptCliente = document.querySelector('#cliente');
    const rcbCliente = document.querySelector('.nome-cliente');
    const iptData = document.querySelector('#input-data');
    const rcbData = document.querySelector('.data-recibo');
    const iptEnd = document.querySelector('#input-end');
    const rcbEnd = document.querySelector('.end-recibo');

    this.pressBtn = function() {
        document.addEventListener ('click', e => {
            const el = e.target;

            if (el.classList.contains('env-tudo')) {
                this.envInfo(iptCliente.value, iptData.value, iptEnd.value);
            };
        });
    };

    this.envInfo = function(nome, data, end) {
        rcbCliente.innerHTML = `Cliente: ${nome}`;
        rcbData.innerHTML = `Data: ${data}`;
        rcbEnd.innerHTML = `Endereço para Instalação: ${end}`;
    };

    this.formtData = function () {
        
    };
}

const enviar = new EnvDados();
enviar.pressBtn();