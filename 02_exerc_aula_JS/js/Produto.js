export default class Produto{
    #nome;
    #quantidade;
    #preco;
 
    constructor(nome, quantidade, preco){
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
    }

   valorTotal(){
    return ((this.#quantidade * this.#preco)*1.10).toFixed(2);

   }

    toString(){
        return `Nome: ${this.#nome}\n
        Quantidade: ${this.#quantidade}\n
        Preço Unitário: R$ ${this.#preco}\n
        Valor Total: R$ ${this.valorTotal(this.#quantidade, this.#preco)}`;
    }

    get nome(){
        return this.#nome;
    }
    get quantidade(){
        return this.#quantidade;
    }
    get preco(){
        return this.#preco
    }
    
}