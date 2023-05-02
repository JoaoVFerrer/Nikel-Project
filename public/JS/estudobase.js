const nome = "João Victor Ferreira Silva";   /**constante sem alteração*/
let nome2 = "Tiracacafiga";     /**declara variavel passível de mudança */

let pessoaDefaut =
{
    nome: "João Victor",
    idade: 27,
    profissao: "desempregado"
}
let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro silva"];
let pessoas =
    [
        {
            nome: "Maria Silva",
            idade: "25",
            profissao: "UI/UX Designer"
        },
        {
            nome: "Pedro Silva",
            idade: "30",
            profissao: "Demente"
        },
    ];

function alterarNome()/**cria função */ {
    nome2 = "mariademencia"; /**alterou o nome conforme a função (poderia ser um calculo) */
    console.log("valor alterado"); /**titulo da ação,mostra em console */
    console.log(nome2); /** mostra no console o result da função*/

}

function receberealterarNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome") /**titulo da ação,mostra em console */
    console.log(nome2);

}

function imprimirPessoa(pessoa) {

    console.log(pessoa); // mostra o objeto da classe nome
    console.log("Nome"); //o que será chamado
    console.log(pessoa.nome); // mostra o atributo nome do objeto pessoa

    console.log("Idade"); //o que será chamado
    console.log(pessoa.idade);

    console.log("Profissão"); //o que será chamado
    console.log(pessoa.profissao); // mostra o atributo profissao do objeto pessoa
}

function adicionarPessoas(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    pessoas.forEach((item) => {
        console.log("----------Imprimir Pessoas---------");
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade");
        console.log(item.idade);

        console.log("Profissão");
        console.log(item.profissao);
        console.log(item);
    })
}

imprimirPessoas();

adicionarPessoas
    (
        {
            nome: "Bilaq Pinto",
            idade: "55",
            profissao: "Deputado federal"
        }
    );

imprimirPessoas();

// imprimirPessoa(pessoaDefaut) // pessoa default objeto com parametros
// imprimirPessoa // imprime os parametros de um objeto
//({
   // nome: "Maria Silva",
   // idade: "25",
   // profissao: "UI/UX Designer"
//})

// receberealterarNome("João Silva Pereira");

// receberealterarNome("Pereira Funk");

// alterarNome(); /**chamando função*/

//document.getElementById("Link-conta").addEventListener("click", function ( )
//{

//});