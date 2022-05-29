// Procurando um aluno na lista 

const alunos = ['João','Juliana','Caio', 'Ana']
const mediaAlunos = [10,7,9,6]

let listaDeNotaseAlunos = [alunos, mediaAlunos]

// includes -> booleano
// indexOf -> numero 


const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotaseAlunos[0].includes(nomeDoAluno)){
       let indice = listaDeNotaseAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotaseAlunos[0][indice] + ', sua média é ' + listaDeNotaseAlunos[1][indice]
    }else{
        console.log('Aluno não encontrado')
    }
}

console.log(exibeNomeNota('Diego'))