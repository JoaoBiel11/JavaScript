import Pedido from './Pedido.js';

export default class GerenciarPedido {
    #itens = [];

    configurar() {
        let adicionarBtn = document.getElementById('adicionarBtn');
        let valorTotalBtn = document.getElementById('valorTotalBtn');
        
        
        if (adicionarBtn instanceof HTMLButtonElement && valorTotalBtn instanceof HTMLButtonElement) {
            adicionarBtn.addEventListener('click', this.adicionarProduto.bind(this));
            valorTotalBtn.addEventListener('click', this.calcularTotal.bind(this));
        }
    }

    adicionarProduto() {
        let nomeInput = document.getElementById('nome');
        let quantidadeInput = document.getElementById('quantidade');
        let precoInput = document.getElementById('preco');

        if ((nomeInput instanceof HTMLInputElement) && 
            (quantidadeInput instanceof HTMLInputElement) && 
            (precoInput instanceof HTMLInputElement)) {

            let nome = nomeInput.value.trim();
            let quantidade = parseInt(quantidadeInput.value);
            let preco = parseFloat(precoInput.value);

            
            if (nome === "") {
                alert("Nome do produto é obrigatório!");
                return;
            }
            if (isNaN(quantidade) || quantidade <= 0) {
                alert("Quantidade inválida!");
                return;
            }
            if (isNaN(preco) || preco <= 0) {
                alert("Preço inválido!");
                return;
            }

            
            const pedido = new Pedido(nome, quantidade, preco);
            this.#itens.push(pedido);
            this.atualizar(); 
            this.limparConteudo();  
        }
    }

    atualizar() {
        let estoqueLista = document.getElementById('estoqueLista');
        if (estoqueLista instanceof HTMLUListElement) {
            estoqueLista.innerHTML = '';    

            
            this.#itens.forEach((produto) => {
                let li = document.createElement('li');
                li.textContent = produto.toString();  
                estoqueLista.appendChild(li);
            });
        }
    }

    limparConteudo() {
       
        document.getElementById('nome').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('preco').value = '';
    }

    calcularTotal() {
       
        let total = this.#itens.reduce((total, item) => total + parseFloat(item.valorTotal()), 0);
        alert(`Valor Total: R$ ${total.toFixed(2)}`); 
    }
    
}

// Configura os eventos após o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    const gerenciarPedido = new GerenciarPedido();
    gerenciarPedido.configurar();
});
