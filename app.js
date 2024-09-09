// console.log(dados);
//console.log(section);
//console.log(campoPesquisa);
//console.log(dado.titulo.includes(campoPesquisa))

//Criar uma função -- Pamela
function pesquisar(){
    // Obtém a seção HTML onde os resultados serão exibidos   
    // document.getElementById= Insere os dados de um ID no HMTL a partir de JS --Pamela 
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campo pesquisa for nullo, retorna e não executa os códigos seguintes
    if(!campoPesquisa) { //-- ! se a variavel estiver vazia
      section.innerHTML = "<p>Nada foi encontrado! Digite o que esta setindo ou um livro da Bíblia.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
// Inicializa uma string vazia para armazenar os resultados
let resultados = "" //-->> Criada para inserir todos os itens da lista e depois inserí-los uma unica vez no innerHTML, ao inves de chama-lo para cada item.
let titulo = "";
let versiculo = "";
let tags = "";

//Laço de Repetição: para cada dado (for let dado) dentro da lista de dados (of dados) (dados é o arquivo de dados com a lista que criamos) --Pamela
// Itera sobre cada dado da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    versiculo = dado.versiculo.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if(titulo.includes(campoPesquisa) || versiculo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    // então faça...   
    //section.innerHTML += ` -- >> Usado/chamado para incrementar cada item da lista para o html(Uso sem a variavel Resultas)  
    // Cria um novo elemento HTML para cada resultado
    resultados += `
    <div class="item-resultado">
        <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.versiculo}</p>
        <a href="${dado.link} target="_blank">Leia o capítulo completo!</a>
    </div> 
    
    `;

    }
    
}

if (!resultados) {
  resultados = "<p>Nada foi encontrado!. </p>"
}

// Atribui os resultados gerados à seção HTML
section.innerHTML = resultados

}

/* 
function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";

  // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
    // **Construindo o HTML para cada resultado:**
    //  - `div.item-resultado`: Cria um container para cada resultado.
    //  - `h2`: Exibe o título do resultado com um link.
    //  - `p.descricao-meta`: Exibe o versículo (assumindo que 'dado.versiculo' contém o versículo).
    //  - `a`: Link para ler o capítulo completo.

    resultados += `
      <div class="item-resultado">
        <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.versiculo}</p>
        <a href="${dado.link}" target="_blank">Leia o capítulo completo!</a>
      </div>
    `;
  }

  // Atribui a string com todos os resultados ao conteúdo da seção
  section.innerHTML = resultados;
}
 */
