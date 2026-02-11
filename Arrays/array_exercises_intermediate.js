// ========================================
// EXERCÍCIOS DE ARRAYS - NÍVEL INTERMEDIÁRIO
// ========================================

// EXERCÍCIO 1: Sistema de Pontuação
// Você tem um array de jogadores com suas pontuações em várias partidas.
// Crie uma função que:
// - Adicione uma nova partida para um jogador (push)
// - Remova a última partida (pop)
// - Calcule a média de pontos de cada jogador (map + reduce)
// - Filtre apenas jogadores com média acima de 70 (filter)

const jogadores = [
  { nome: "Ana", pontuacoes: [85, 90, 78] },
  { nome: "Bruno", pontuacoes: [60, 65, 55] },
  { nome: "Carlos", pontuacoes: [95, 88, 92] },
  { nome: "Diana", pontuacoes: [70, 75, 68] },
];

function adicionarPartida(jogadores, nomeJogador, pontuacao) {
  const jogador = jogadores.find((j) => j.nome === nomeJogador);
  if (jogador) {
    jogador.pontuacoes.push(pontuacao);
  }
}

function removerUltimaPartida(jogadores, nomeJogador) {
  const jogador = jogadores.find((j) => j.nome === nomeJogador);
  if (jogador) {
    jogador.pontuacoes.pop();
  }
}

function calcularMedias(jogadores) {
  return jogadores.map((jogador) => {
    const soma = jogador.pontuacoes.reduce(
      (acc, pontuacao) => acc + pontuacao,
      0
    );
    const media = soma / jogador.pontuacoes.length;
    return { nome: jogador.nome, media: media };
  });
}

function jogadoresDestaque(jogadores, mediaMinima) {
  const jogadoresComMedia = calcularMedias(jogadores);
  return jogadoresComMedia.filter((j) => j.media >= mediaMinima);
}

// Teste suas funções
console.log("=== EXERCÍCIO 1 ===");
adicionarPartida(jogadores, "Ana", 92);
console.log(jogadores);
console.log(calcularMedias(jogadores));
console.log(jogadoresDestaque(jogadores, 70));

// ========================================
// EXERCÍCIO 2: Processamento de Vendas
// Dado um array de vendas, calcule:
// 1. Total de vendas por categoria (reduce)
// 2. Produtos mais vendidos (map + sort + slice)
// 3. Vendas acima de R$ 1000 (filter)
// 4. Adicione desconto de 10% em produtos "Premium" (map)

const vendas = [
  {
    id: 1,
    produto: "Notebook",
    categoria: "Eletrônicos",
    valor: 3500,
    quantidade: 2,
    tipo: "Premium",
  },
  {
    id: 2,
    produto: "Mouse",
    categoria: "Periféricos",
    valor: 80,
    quantidade: 15,
    tipo: "Standard",
  },
  {
    id: 3,
    produto: "Teclado",
    categoria: "Periféricos",
    valor: 250,
    quantidade: 8,
    tipo: "Premium",
  },
  {
    id: 4,
    produto: "Monitor",
    categoria: "Eletrônicos",
    valor: 1200,
    quantidade: 5,
    tipo: "Premium",
  },
  {
    id: 5,
    produto: "Webcam",
    categoria: "Periféricos",
    valor: 300,
    quantidade: 10,
    tipo: "Standard",
  },
];

function totalPorCategoria(vendas) {
  // Retorne um objeto: { "Eletrônicos": valor, "Periféricos": valor }
  // Seu código aqui
}

function top3Produtos(vendas) {
  // Retorne os 3 produtos com maior faturamento (valor * quantidade)
  // Seu código aqui
}

function vendasAcimaDe(vendas, valorMinimo) {
  // Seu código aqui
}

function aplicarDescontoPremium(vendas) {
  // Aplique 10% de desconto nos produtos Premium
  // Seu código aqui
}

console.log("\n=== EXERCÍCIO 2 ===");
// console.log(totalPorCategoria(vendas));
// console.log(top3Produtos(vendas));

// ========================================
// EXERCÍCIO 3: Manipulação de Tarefas (TODO List)
// Crie um sistema de tarefas com diferentes operações

let tarefas = [
  {
    id: 1,
    titulo: "Estudar JavaScript",
    prioridade: "alta",
    concluida: false,
    tags: ["estudo", "programação"],
  },
  {
    id: 2,
    titulo: "Fazer exercícios",
    prioridade: "media",
    concluida: false,
    tags: ["estudo", "prática"],
  },
  {
    id: 3,
    titulo: "Revisar código",
    prioridade: "alta",
    concluida: true,
    tags: ["programação", "revisão"],
  },
  {
    id: 4,
    titulo: "Ler documentação",
    prioridade: "baixa",
    concluida: false,
    tags: ["estudo"],
  },
];

function adicionarTarefa(tarefas, novaTarefa) {
  // Adicione um ID automático (maior ID + 1)
  // Seu código aqui
}

function removerTarefaConcluida(tarefas) {
  // Remove a última tarefa concluída
  // Seu código aqui
}

function tarefasPorPrioridade(tarefas, prioridade) {
  // Filtre tarefas por prioridade e que não estão concluídas
  // Seu código aqui
}

function tarefasComTag(tarefas, tag) {
  // Retorne tarefas que possuem a tag especificada
  // Seu código aqui
}

function resumoTarefas(tarefas) {
  // Retorne: { total, concluidas, pendentes, porcentagemConcluida }
  // Seu código aqui
}

console.log("\n=== EXERCÍCIO 3 ===");
// console.log(tarefasPorPrioridade(tarefas, "alta"));
// console.log(resumoTarefas(tarefas));

// ========================================
// EXERCÍCIO 4: Análise de Dados de Alunos
// Combine múltiplos métodos para análise complexa

const turma = [
  { nome: "Alice", notas: [8.5, 9.0, 7.5, 8.0], faltas: 2, curso: "Frontend" },
  { nome: "Bob", notas: [6.0, 5.5, 7.0, 6.5], faltas: 8, curso: "Backend" },
  { nome: "Carol", notas: [9.5, 9.0, 10, 9.5], faltas: 0, curso: "Frontend" },
  { nome: "David", notas: [7.0, 7.5, 8.0, 7.0], faltas: 3, curso: "Backend" },
  { nome: "Eva", notas: [5.0, 6.0, 5.5, 6.0], faltas: 12, curso: "Frontend" },
];

function calcularMediasAlunos(turma) {
  // Adicione a propriedade 'media' em cada aluno
  // Seu código aqui
}

function alunosAprovados(turma, mediaMinima, faltasMaximas) {
  // Aluno aprovado: média >= mediaMinima E faltas <= faltasMaximas
  // Seu código aqui
}

function melhorAlunoPorCurso(turma) {
  // Retorne o aluno com maior média de cada curso
  // Retorno: { "Frontend": aluno, "Backend": aluno }
  // Seu código aqui
}

function estatisticasTurma(turma) {
  // Retorne: {
  //   mediaGeral: number,
  //   maiorNota: number,
  //   menorNota: number,
  //   totalFaltas: number
  // }
  // Seu código aqui
}

console.log("\n=== EXERCÍCIO 4 ===");
// calcularMediasAlunos(turma);
// console.log(alunosAprovados(turma, 7, 5));
// console.log(melhorAlunoPorCurso(turma));

// ========================================
// EXERCÍCIO 5: Pipeline de Transformação
// Encadeie múltiplos métodos para processar dados

const produtos = [
  { nome: "Camiseta", preco: 49.9, estoque: 100, desconto: 0.1 },
  { nome: "Calça Jeans", preco: 159.9, estoque: 50, desconto: 0.15 },
  { nome: "Tênis", preco: 299.9, estoque: 0, desconto: 0.2 },
  { nome: "Jaqueta", preco: 399.9, estoque: 30, desconto: 0.05 },
  { nome: "Boné", preco: 39.9, estoque: 200, desconto: 0 },
];

function processarProdutos(produtos) {
  // 1. Filtre produtos em estoque
  // 2. Aplique o desconto no preço
  // 3. Adicione a propriedade 'precoFinal'
  // 4. Ordene por preço final (menor para maior)
  // 5. Retorne apenas nome e precoFinal
  // Faça tudo em uma cadeia de métodos!
  // Seu código aqui
}

function calcularValorTotalEstoque(produtos) {
  // Calcule o valor total considerando: preco * estoque
  // Use reduce
  // Seu código aqui
}

function produtosPorFaixaPreco(produtos, min, max) {
  // Retorne produtos com preço (após desconto) entre min e max
  // Seu código aqui
}

console.log("\n=== EXERCÍCIO 5 ===");
// console.log(processarProdutos(produtos));
// console.log("Valor total em estoque:", calcularValorTotalEstoque(produtos));

// ========================================
// DESAFIO FINAL: Sistema de Carrinho de Compras
// Implemente um sistema completo usando todos os métodos

let carrinho = [];

function adicionarAoCarrinho(item) {
  // item: { id, nome, preco, quantidade }
  // Se o item já existe, aumente a quantidade
  // Se não existe, adicione ao carrinho
  // Seu código aqui
}

function removerDoCarrinho(itemId) {
  // Remova o item com o ID especificado
  // Dica: use filter
  // Seu código aqui
}

function atualizarQuantidade(itemId, novaQuantidade) {
  // Atualize a quantidade do item
  // Se quantidade for 0, remova o item
  // Seu código aqui
}

function calcularSubtotal(carrinho) {
  // Retorne o subtotal (soma de preco * quantidade)
  // Seu código aqui
}

function aplicarCupom(carrinho, percentualDesconto) {
  // Aplique desconto em todos os itens
  // Retorne novo array com preços atualizados
  // Seu código aqui
}

function resumoCarrinho(carrinho) {
  // Retorne: {
  //   quantidadeItens: total de itens diferentes,
  //   quantidadeTotal: soma de todas as quantidades,
  //   subtotal: valor total,
  //   itens: array com resumo de cada item
  // }
  // Seu código aqui
}

console.log("\n=== DESAFIO FINAL ===");
// Teste o sistema completo
// adicionarAoCarrinho({ id: 1, nome: "Produto A", preco: 50, quantidade: 2 });
// adicionarAoCarrinho({ id: 2, nome: "Produto B", preco: 30, quantidade: 1 });
// console.log(resumoCarrinho(carrinho));

// ========================================
// DICAS PARA RESOLUÇÃO:
// ========================================
// 1. Use map() quando precisar transformar cada elemento
// 2. Use filter() quando precisar selecionar elementos
// 3. Use reduce() quando precisar acumular/agregar valores
// 4. Use push() para adicionar no final
// 5. Use pop() para remover do final
// 6. Combine métodos encadeando: array.filter().map().reduce()
// 7. Lembre-se: map, filter e reduce NÃO modificam o array original
// 8. Use spread operator [...] para criar cópias quando necessário
