async function consultarDepoimentos() {
    const resposta = await fetch( 'http://localhost:3000/depoimentos' );
    if ( ! resposta.ok ) {
        throw new Error( 'Erro ao consultar os depoimentos.' );
    }
    const depoimentos = await resposta.json();
    return depoimentos;
}

function mostrarMensagem( mensagem ) {
    alert( mensagem );
}

function getStarRating(rating) {
    rating = Math.max(1, Math.min(rating, 5));
    let stars = '';

    for (let i = 0; i < rating; i++) {
        stars += '★';
    }

    for (let i = rating; i < 5; i++) {
        stars += '☆';
    }

    return stars;
}

function desenharDepoimento(depoimentos) {
    console.log(depoimentos);
    const depoimentoContainer = document.querySelector('#comments');

    depoimentos.forEach(d => {
        const depoimentoDiv = document.createElement('div');
        depoimentoDiv.classList.add('comment');
        
        depoimentoDiv.innerHTML = `
            <div class="comment-information">
                            <img src="${d.imagem}" alt="Pessoa" width="80" height="80">
                            <div>
                                <h4>${d.nome}</h4>
                                <p>${d.Cidade}</p>
                                <span>${getStarRating(d.classificacao)}</span>
                            </div>
                        </div>
                        <div class="comment-text">
                            <img src="./img/symbol0.png" width="15" height="15">
                            <p>${d.descricao}</p>
                            <div>
                                <img src="./img/symbol1.png" width="15" height="15">
                            </div>
                        </div>
        `;

        // Adiciona a nova div ao container de lançamentos
        depoimentoContainer.appendChild(depoimentoDiv);
    });
}

( async function() {
    try {
        const depoimentos = await consultarDepoimentos();
        desenharDepoimento(depoimentos);
    } catch ( erro ) {
        console.log( erro.message );
    }
} )(); // <-- invocando


