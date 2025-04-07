let idade;

function configurar() {
    let inserirBtn = document.getElementById('inserirBtn');
    let idadeInput = document.getElementById('idadeInput');
    
    // Verifica se os elementos existem
    if ((inserirBtn instanceof HTMLButtonElement) && (idadeInput instanceof HTMLInputElement)) {
        // Adiciona um evento de clique ao botão
        inserirBtn.addEventListener('click', () => {
            try {
                // Converte a entrada para um número inteiro
                idade = parseInt(idadeInput.value);

                // Verifica se a idade é menor que 18
                if (idade < 18) {
                    throw new Error('Você é menor de idade!');
                }

                // Verifica se a idade é um número negativo ou inválido
                if (idade < 0 || isNaN(idade)) {
                    throw new Error('Digite um número válido!');
                }

                console.log(`Idade válida: ${idade}`);  
            } catch (error) {
                
                console.log(error.message);
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', configurar);
