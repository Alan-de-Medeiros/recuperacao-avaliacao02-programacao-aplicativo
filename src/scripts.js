var Desenvolvedores = [];

function adicionarDesenvolvedor(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const tecnologias = document.getElementById("tecnologias").value;
    const biografia = document.getElementById("biografia").value;
    const github = document.getElementById("github").value;
    const imagem = document.getElementById("imagem").value;
    const novoDesenvolvedor = {
        nome: nome,
        tecnologias: tecnologias,
        biografia: biografia,
        github: github,
        imagem: imagem
    };

    Desenvolvedores.push(novoDesenvolvedor);
    localStorage.setItem("Desenvolvedores", JSON.stringify(Desenvolvedores));
    
    render();
    
    document.getElementById("devForm").reset();
}

function render() {
    const lista = document.getElementById("listaDesenvolvedores");
    lista.innerHTML = ""; 

    for (var i = 0; i < Desenvolvedores.length; i++) {
        const dev = Desenvolvedores[i];
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${dev.imagem}" alt="${dev.nome}" class="veiculo-imagem" />
            <div>
                <h3>Nome: ${dev.nome}</h3>
                <h4>Tecnologias: ${dev.tecnologias}</h4>
                <h4>Biografia: ${dev.biografia}</h4>
                <h4>Usuário do Github: ${dev.github}</h4>
                <button class="remove-botao" onclick="removerDesenvolvedor(${i})">Remover</button>
            </div>
        `;
        lista.appendChild(li);
    }
}

function removerDesenvolvedor(i) {
    Desenvolvedores.splice(i, 1);
    localStorage.setItem("Desenvolvedores", JSON.stringify(Desenvolvedores));
    render();
}

