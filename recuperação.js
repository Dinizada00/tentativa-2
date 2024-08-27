class produto {
    constructor(nome, preço, quantidade) {
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }
}

class Gerenciadordeprodutos {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(nome, preço, quantidade) {
        if (nome && preço > 0 && quantidade > 0) {
            const produto = constproduto(nome, preço, quantidade);
            this.produtos.push(produto);
            console.log('Produto adicionado com sucesso!');
        }else {
            console.log('erro: dados inválidos');
        }
        }
    }

    removerproduto(nome) 
        const index = this.produtos.findIndex(produto => produto.nome === nome);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`Produto removido com sucesso!`);
          } else {
            console.log(`Erro: produto não encontrado`);
          }
        
      
        listarProdutos() 
          console.log(`Produtos cadastrados:`);
          this.produtos.forEach(produto => console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`));
        
      
        getProduto(nome)  
          const produto = this.produtos.find(produto => produto.nome === nome);
          if (produto) {
            return produto;
          } else {
            console.log(`Erro: produto não encontrado`);
            return null;
          }
        
      
      
      // Exemplo de uso
      const gerenciador = new GerenciadorDeProdutos();
      
      gerenciador.adicionarProduto('Produto 1', 10.99, 5);
      gerenciador.adicionarProduto('Produto 2', 20.99, 10);
      gerenciador.adicionarProduto('Produto 3', 30.99, 15);
      
      gerenciador.listarProdutos();
      
      const produto = gerenciador.getProduto('Produto 2');
      if (produto) {
        console.log(`Produto encontrado: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`);
      }
      
      gerenciador.removerProduto('Produto 2');
      gerenciador.listarProdutos();
    
