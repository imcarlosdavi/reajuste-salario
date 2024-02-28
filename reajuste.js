//Reajuste de salário. (usando função)
var nome   //var não respeita escopo, por isso foi declarado em nome/salário
var salario

function perguntaColaborador(){
    nome = prompt("Digite o nome do colaborador.")
    salario = parseFloat(prompt("Digite o salário do colaborador."))
    reajuste(nome,salario) //função "reajuste" recebe o nome e salário do usuário
}


function reajuste(nome, salario){ //verifica o nome e salário que foi inserido pelo usuário.
    let aumento = 0

    if(salario <= 1500){
        aumento = 0.2
    }else if(salario <= 2000){
        aumento = 0.15
    }else if(salario <= 3000){
        aumento = 0.1
    }else{
        aumento = 0.05
    }

    let novoSalario = salario + (salario*aumento) // adiciona a % do aumento no salário do usuário
    document.body.innerHTML+=`Nome do colaborador: "${nome}`;
    document.body.innerHTML+=`Salário do colaborador: "${salario}`
    document.body.innerHTML+=`Reajuste no salário: "${aumento*100}"%")` // transforma o aumento em %
    document.body.innerHTML+=`Novo salário reajustado: "${novoSalario}`

    pergunteNovamente();
}

function pergunteNovamente(){ //Usada para perguntar novamente, se o usuário quiser. 
    let resposta = prompt("Quer inserir outro? (sim/não)")

    if(resposta == "sim"){
        perguntaColaborador();
    }else{
        document.body.innerHTML+=`Obrigado! programa encerrado.`;
    }
}

perguntaColaborador(); // chamando o programa