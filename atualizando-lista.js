// remover nomes de alunos 
// Remover Ana e Caio e Adicionar Rodrigo

const listaDeChamada = ['Joõo', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo'] 

console.log(listaDeChamada)

listaDeChamada.splice(1,2,'Rodrigo')
console.log(listaDeChamada)


// Para adicionar um item na posição desejada, basta não informar o segundo parametro

listaDeChamada.splice(1,0,'Diego')
console.log(listaDeChamada)

// Desta forma estamos adicionando Diego na segunda posição do array. 


/*
Parametros do SPLICE

1 -> Onde ele ira começar a remover
2 -> Numero de elementos que ele irá remover
3 -> Caso necessário, o que será inserido no lugar
*/