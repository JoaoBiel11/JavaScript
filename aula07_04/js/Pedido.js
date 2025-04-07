export default class Pedido {
    #nome;
    #quantidade;
    #preco;

    constructor(nome, quantidade, preco) {
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
    }

    valorTotal() {

        return (this.#preco * this.#quantidade).toFixed(2);
    }

    toString() {
        // Retorna uma string formatada com os detalhes do pedido
        return `Nome: ${this.#nome}\nQuantidade: ${this.#quantidade}\nPreço Unitário: R$ ${this.#preco.toFixed(2)}\n`;
    }
}
