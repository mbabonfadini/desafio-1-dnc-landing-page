const form = document.getElementById("cadForm")

form.addEventListener("submit", event => {
    event.preventDefault()

    const dados = form.getElementsByClassName("dados")
    
    const validador = validaValor(dados)

    if (validador < 2) {
        alert("Por favor validar os dados inseridos")
    }
    else {
        alert("Dados enviados com sucesso")
        event.currentTarget.submit()
    }

}
)

function validaValor(dados) {


    let validador = 0

    for (let i in dados) {

        if (dados[i].id == "nome" || dados[i].id == "email") {
            dados[i].value.length < 3
                ? validador
                : validador++
        }
    }

    return validador
}