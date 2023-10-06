var imagens = [
    { src: "imagens/Meu primeiro site.jpg", link: "https://www.microsoft.com/pt-br", nome: "ODS - ONU" },
    { src: "imagens/Cardapio Sweetland Ice Cream.jpg", link: "https://www.microsoft.com/pt-br", nome: "Cardápio Sweetland Ice Cream" },
    { src: "imagens/Galeria de artes.jpg", link: "https://www.microsoft.com/pt-br", nome: "Galeria de Artes" }
];

var descricoes = [
    "Esse projeto é um site informativo sobre a ONU e seus Objetivos de Desenvolvimento Sustentável (ODS), nele apliquei meus conhecimentos em CSS para criar sessões informativas combinando imagens e textos, além da adição de um vídeo informativo e a interação com a imagem principal que se desfoca com o passar do cursor.",
    "Esse foi meu segundo projeto, trata-se de um cardápio de uma sorveteria imaginária. Nele pude aplicar minhas primeiras noções de CSS, como a ciração de links internos, interatividade com as imagens e inserção de um mapa com o endereço da loja fictícia.",
    "Este projeto é uma galeria de artes, onde o leitor pode aprender um pouco sobre os artistas do pós-impressionismo e admirar algumas de suas obras. Nele, fui capaz de aplicar meus conhecimentos em JavaScript para a criação de imagens dinâmicas com descrições, além da responsividade com o CSS."
];

var indiceAtual = 0;

function atualizarImagem() {
    var imagemElement = document.querySelector(".imagem");
    var imagem = document.createElement("img");
    var link = document.createElement("a");
    var nomeObra = document.querySelector("#nomeObra");
    var descricaoObra = document.querySelector("#descricaoObra"); // Elemento para a descrição
    
    var imagemAtual = imagens[indiceAtual];

    imagem.src = imagemAtual.src;
    imagem.alt = "Imagem " + (indiceAtual + 1);
    link.href = imagemAtual.link;
    link.target = "_blank"; 
    imagem.className = "imagem_responsiva";

    nomeObra.textContent = imagemAtual.nome;
    descricaoObra.textContent = descricoes[indiceAtual]; // Atualiza a descrição

    link.appendChild(imagem);
    imagemElement.innerHTML = "";
    imagemElement.appendChild(link);
    imagemElement.appendChild(nomeObra);
    imagemElement.appendChild(descricaoObra); // Adiciona a descrição à galeria
}

function mudarFoto(direcao) {
    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    atualizarImagem();
}

atualizarImagem();



//formulario
function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false; 
    }

    return true; 
}