const imagens = []; // Array para armazenar as imagens para o carrossel

// Função para consultar produtos
async function consultarProdutos() {
    const resposta = await fetch('http://localhost:3000/produtos');
    if (!resposta.ok) {
        throw new Error('Erro ao consultar os produtos.');
    }
    const produtos = await resposta.json();
    return produtos;
}

// Função para mostrar uma mensagem de erro
function mostrarMensagem(mensagem) {
    alert(mensagem);
}

// Função para obter a classificação em estrelas
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

// Função para desenhar produtos
function desenharProdutos(produtos) {
    console.log(produtos);
    
    const lancamentoContainer = document.querySelector('#produt-new');
    const destaqueContainer = document.querySelector('#produt-destaque-new');
    const outletContainer = document.querySelector('#produt-outlet-new');

    // Lançamentos
    produtos.lancamentos.forEach(p => {
        const produtoDiv = criarProdutoDivL(p);
        lancamentoContainer.appendChild(produtoDiv);
        imagens.push(p.imagem); // Adiciona imagem para o carrossel
    });

    // Destaques
    produtos.destaques.forEach(p => {
        const produtoDiv = criarProdutoDiv(p);
        destaqueContainer.appendChild(produtoDiv);
        imagens.push(p.imagem); // Adiciona imagem para o carrossel
    });

    // Outlet
    produtos.outlet.forEach(p => {
        const produtoDiv = criarProdutoDiv(p);
        outletContainer.appendChild(produtoDiv);
        imagens.push(p.imagem); // Adiciona imagem para o carrossel
    });

    // Iniciar o carrossel de imagens para cada categoria
    iniciarCarrossel(lancamentoContainer);
    iniciarCarrossel(destaqueContainer);
    iniciarCarrossel(outletContainer);

}

// Função para criar a div de produto
function criarProdutoDivL(p) {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produt');

    produtoDiv.innerHTML = `
        <h4>Lançamento</h4>
        <img src="${p.imagem}" alt="foto do produto" width="250" height="400">
        <nav>
            <img src="./img/like-white.png" alt="like" width="20" height="20">
            <a href="#">FAVORITAR</a>
            <img src="./img/icon-see.png" alt="like">
            <a href="./produto/produto.html">ESPIAR</a>
        </nav>
        <div>
            <span>${getStarRating(p.classificacao)}</span>
            <p class="descricao">${p.descricao}</p>
            <p class="ref">Ref: ${p.ref}</p>
            <p class="preco">R$ ${p.preco}</p>
            <p class="boleto">no boleto</p>
            <p class="parcela">em até ${p.parcela ? p.parcela : '10x de R$ ' + (p.preco / 10).toFixed(2)}</p>
            <a href="./produto/produto.html" class="compre">COMPRE AGORA</a>
        </div>
    `;

    return produtoDiv;
}

// Função para criar a div de produto
function criarProdutoDiv(p) {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produt');

    produtoDiv.innerHTML = `
        <img src="${p.imagem}" alt="foto do produto" width="250" height="400">
        <nav>
            <img src="./img/like-white.png" alt="like" width="20" height="20">
            <a href="#">FAVORITAR</a>
            <img src="./img/icon-see.png" alt="like">
            <a href="./produto/produto.html">ESPIAR</a>
        </nav>
        <div>
            <span>${getStarRating(p.classificacao)}</span>
            <p class="descricao">${p.descricao}</p>
            <p class="ref">Ref: ${p.ref}</p>
            <p class="preco">R$ ${p.preco}</p>
            <p class="boleto">no boleto</p>
            <p class="parcela">em até ${p.parcela ? p.parcela : '10x de R$ ' + (p.preco / 10).toFixed(2)}</p>
            <a href="./produto/produto.html" class="compre">COMPRE AGORA</a>
        </div>
    `;

    return produtoDiv;
}

function iniciarCarrossel(container) {
    const divs = container.children;
    const dats = document.querySelectorAll('.dat');  
    let indiceAtual = 0;  
    

    // Função para atualizar o estado ativo dos dots
    const atualizarDats = (indice) => {
        // Remove a classe 'active' de todos os dots
        dats.forEach(dat => dat.classList.remove('active'));
        // Adiciona a classe 'active' ao dot correspondente ao índice atual
        dats[indice].classList.add('active');
    };

    // Verifica se existem divs suficientes para fazer o carrossel
    if (divs.length > 1) {
        const prevButton = document.querySelectorAll('#prevL');
        const nextButton = document.querySelectorAll('#nextL');

        // Função para mover o carrossel à esquerda (anterior)
        const moverParaEsquerda = () => {
            const ultimoElemento = divs[divs.length - 1];
            container.insertBefore(ultimoElemento, divs[0]);
            
            // Atualiza o índice e o estado dos dots
            indiceAtual = (indiceAtual - 1 + divs.length) % divs.length;
            atualizarDats(indiceAtual);
        };

        // Função para mover o carrossel à direita (próximo)
        const moverParaDireita = () => {
            const primeiroElemento = divs[0];
            container.appendChild(primeiroElemento);
            
            // Atualiza o índice e o estado dos dots
            indiceAtual = (indiceAtual + 1) % divs.length;
            atualizarDats(indiceAtual);
        };

    
        
        prevButton.forEach(button => {
            button.addEventListener('click', moverParaEsquerda);
        });
        nextButton.forEach(button => {
            button.addEventListener('click', moverParaDireita);
        });

        atualizarDats(indiceAtual);

        /* prevButton.addEventListener('click', moverParaEsquerda);
        nextButton.addEventListener('click', moverParaDireita); */

        /* // Movimento automático do carrossel
        setInterval(() => {
                moverParaDireita();
         }, 3000); // Muda de produto a cada 3 segundos */
    }
}

// Invoca a função principal
(async function () {
    try {
        const produtos = await consultarProdutos();
        desenharProdutos(produtos);
    } catch (erro) {
        console.log(erro.message);
    }
})();
