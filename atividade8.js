//1- criar array de objetos
let produtos=[
    {nome: 'notebook', preço:3500,estoque:true},
    {nome: 'mouse', preço:100,estoque:false},
    {nome: 'teclado', preço:150,estoque:true},
    {nome: 'monitor', preço:900,estoque:false},
    {nome: 'cadeira gamer', preço:1200,estoque:true},

]

//2- filtrar produtos com estoque true
const produtosDisponiveis = produtos.filter(produto=> produto.estoque);

//3- exibir o nome e preço desses produtos
produtosDisponiveis.forEach(produto=>{
    console.log(`produto: ${produto.nome} | preço:R$ ${produto.preço}`);
});