
let idade;

function configurar(){
    let inserirBtn = document.getElementById('inserirBtn');
    let idadeInput = document.getElementById('idadeInput');
    if ((inserirBtn instanceof HTMLButtonElement) && (idadeInput instanceof HTMLInputElement)){
        inserirBtn.addEventListener('click',() => {
            try {
                idade = parseInt(idadeInput.value)
                if(idade < 18){
                    throw new Error('Você é menor de idade!');
                }if(numero <0){
                    throw new Error('Digite um número válido!');
                }

            } catch (error) {
               console.log(error.message);
            }
        
        })
    }
}
document.addEventListener('DOMContentLoaded', configurar);