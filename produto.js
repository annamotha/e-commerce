async function consultarProdutos() {
    const resposta = await fetch( 'http://localhost:3000/produtos' );
    if ( ! resposta.ok ) {
        throw new Error( 'Erro ao consultar os produtos.' );
    }
    const produtos = await resposta.json();
    return produtos;
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




function desenharProdutosL(produtos) {
    console.log(produtos);
    const lancamentoContainer = document.querySelector('#produt-new');

    produtos.lancamentos.forEach(p => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produt');
        
        produtoDiv.innerHTML = `
            <h4>Lançamento</h4>
            <img src="${p.imagem}" alt="foto do produto" width="250" height="400">
            <nav>
            <img src="./img/like-white.png" alt="like" width="20" heigh="20">
            <a href="#">FAVORITAR</a>
            <img src="./img/icon-see.png" alt="like">
            <a href="#">ESPIAR</a>
            </nav>
            <div>
                <span>${getStarRating(p.classificacao)}</span>
                <p class="descricao">${p.descricao}</p>
                <p class="ref">Ref: ${p.ref}</p>
                <p class="preco">R$ ${p.preco}</p>
                <p class="boleto">no boleto</p>
                <p class="parcela">em até ${p.parcela ? p.parcela : '10x de R$ ' + (p.preco / 10).toFixed(2)}</p>
                <a href="#" class="compre">COMPRE AGORA</a>
            </div>
        `;

        // Adiciona a nova div ao container de lançamentos
        lancamentoContainer.appendChild(produtoDiv);
    });
}
function desenharProdutosD(produtos) {
    console.log(produtos);
    const destaqueContainer = document.querySelector('#produt-destaque-new');

    produtos.destaques.forEach(p => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produt');
        
        produtoDiv.innerHTML = `
            <img src="${p.imagem}" alt="foto do produto" width="250" height="400">
            <nav>
            <img src="./img/like-white.png" alt="like" width="20" heigh="20">
            <a href="#">FAVORITAR</a>
            <img src="./img/icon-see.png" alt="like">
            <a href="#">ESPIAR</a>
            </nav>
            <div>
                <span>${getStarRating(p.classificacao)}</span>
                <p class="descricao">${p.descricao}</p>
                <p class="ref">Ref: ${p.ref}</p>
                <p class="preco">R$ ${p.preco}</p>
                <p class="boleto">no boleto</p>
                <p class="parcela">em até ${p.parcela ? p.parcela : '10x de R$ ' + (p.preco / 10).toFixed(2)}</p>
                <a href="#" class="compre">COMPRE AGORA</a>
            </div>
        `;

        // Adiciona a nova div ao container de lançamentos
        destaqueContainer.appendChild(produtoDiv);
    });
}
function desenharProdutosO(produtos) {
    console.log(produtos);
    const outletContainer = document.querySelector('#produt-outlet-new');

    produtos.outlet.forEach(p => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produt');
        
        produtoDiv.innerHTML = `
            <img src="${p.imagem}" alt="foto do produto" width="250" height="400">
            <nav>
            <img src="./img/like-white.png" alt="like" width="20" heigh="20">
            <a href="#">FAVORITAR</a>
            <img src="./img/icon-see.png" alt="like">
            <a href="#">ESPIAR</a>
            </nav>
            <div>
                <span>${getStarRating(p.classificacao)}</span>
                <p class="descricao">${p.descricao}</p>
                <p class="ref">Ref: ${p.ref}</p>
                <p class="preco">R$ ${p.preco}</p>
                <p class="boleto">no boleto</p>
                <p class="parcela">em até ${p.parcela ? p.parcela : '10x de R$ ' + (p.preco / 10).toFixed(2)}</p>
                <a href="#" class="compre">COMPRE AGORA</a>
            </div>
        `;

        // Adiciona a nova div ao container de lançamentos
        outletContainer.appendChild(produtoDiv);
    });
}

( async function() {
    try {
        const produtos = await consultarProdutos();
        desenharProdutosL( produtos );
        desenharProdutosD( produtos );
        desenharProdutosO( produtos );
    } catch ( erro ) {
        console.log( erro.message );
    }
} )(); // <-- invocando