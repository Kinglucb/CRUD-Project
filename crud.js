document.querySelector("#salvar").addEventListener("click", cadastrar)
function cadastrar() {
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let pontos = document.querySelector("#pontos").value
    let categoria = document.querySelector("#categoria").value
    
    const tarefa = {
        titulo,
        descricao,
        pontos,
        categoria
    }

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)
    console.log(titulo, descricao, pontos, categoria)
}

function gerarCard(tarefa){
    return `
    <div class="col-12 col-md-6 col-lg-3">
    <div class="card">
        <div class="card-header">
        ${tarefa.titulo}
        </div>
        <div class="card-body">
        <p class="card-text"> ${tarefa.descricao}</p>
        <P>
            <span class="badge text-bg-dark">${tarefa.categoria}</span>
        </P>
        <p>${tarefa.pontos}pts</p>
        <a href="#" class="btn btn-success">
            <i class="bi bi-check2-square"></i>
        </a>
        <a href="#" class="btn btn-danger">
            <i class="bi bi-check2-square"></i>
        </a>
        </div>
    </div>
</div>`
}

console.log()