export default class Aluno{
    #nome;
    #notas = [];

    constructor(nome, notas){
        this.#nome = nome;
        this.#notas = notas;
    }

    #validarNotas(notas){
        let validarNotas = notas.every((nota) =>{
            return nota >= 0 && nota <= 10
        });

        if (notasValidas === false){
            alert("As notas devem estar entre 1 e 10!")
        }
        return true;
    }
    calcularMedia(){
        if(this.#notas.length > 0){

        let somaNotas = this.#notas.reduce((acumulador, notaAtual) =>{
            return acumulador + notaAtual;
        }, 0);
        let resultado = somaNotas / this.#notas.length;

        return resultado.toFixed(2);
    }else{
        alert("Divisão por zero não é permitida !")
        return 0;
        }
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get notas(){
        return this.#notas;
    }

    set notas(notas){
        if(this.#validarNotas(notas) === true){
            this.#notas = notas;
        }
       

    }
    toString(){
        return `Nome: ${this.nome}, Notas: ${this.notas.join(', ')};`
    }
}
