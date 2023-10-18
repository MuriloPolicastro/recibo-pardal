/*
Pegar nome do cliente e enviar para o campo cliente
pegar data e enviar para campo data
pegar end e enviar para campo end
*/

const iptCliente = document.querySelector('#cliente');
const rcbCliente = document.querySelector('.nome-cliente');

document.addEventListener ('click', function(e) {
    const el = e.target;

    if (el.classList.contains('env-tudo')) {
        rcbCliente.innerHTML = `Cliente: ${iptCliente.value}`;
    };
});
