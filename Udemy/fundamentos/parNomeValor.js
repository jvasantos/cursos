const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Faaala' // contexto léxico 2
    return saudacao
}

// Objetos saõ grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)