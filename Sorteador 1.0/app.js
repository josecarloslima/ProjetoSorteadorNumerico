async function sortear() {
    // Pegar o total de resultados
    // Acessar o numero dentro do INPUT
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value)

    // Pegar o menor valor
    const menorValor = Number(document.querySelector('#menorValorInput').value)

    // Pegar o maior valor
    const maiorValor = Number(document.querySelector('#maiorValorInput').value)

    // Criando o efeito de numeros passando (tipo cassino)
    for (let j = 0; j < 20; j++) {

        // Limpar resultados antigos no HTML
        const elementoHTMLResultValues = document.querySelector('.result-values')
        elementoHTMLResultValues.innerHTML = ''

        // Passar o total de resultados para o RESULTADOS

        for (let i = 0; i < totalResultados; i++) {

            // Gerar um numero aleatório entre o Menor e o Maior valor
            // Math.floor arredonda os valores
            const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1) + menorValor)

            // Gerar um elemento HTM para o resultado
            const elementoHTMLdeResultado = document.createElement('div')
            elementoHTMLdeResultado.classList.add('result-value')
            elementoHTMLdeResultado.innerText = resultado

            // Adicionar o elemento ao HTML
            elementoHTMLResultValues.append(elementoHTMLdeResultado)

        }

        await wait(20)
    }
}

function wait(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}