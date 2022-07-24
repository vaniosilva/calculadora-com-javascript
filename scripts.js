function calculadora() {
 const operacao= Number(prompt ('escolha uma operacao:\n 1-soma(+) \n 2-substração(-) \n 3-multiplicão(*)\n 4-divisãoreal(/)\n 5-divisãointeira(%)\n 6-potenciação(**)'));
 if (!operacao || operacao >=7) {alert('erro-operacao invalida');

    
 } else {
 


let n1=Number(prompt('insira o primeiro valor:'))
let n2=Number(prompt ('insira o segundo valor'))
let resultado;
if (!n1||!n2) {alert('paramentros invalidos')
 calculadora()   
} else {



function soma (){
    resultado=n1+n2;
    alert(`${n1}+${n2}=${resultado}`)
    novaOperacao();
}
function substração (){
    resultado=n1-n2;
    alert(`${n1}-${n2}=${resultado}`)
    novaOperacao();
}
function multiplicão (){
    resultado=n1*n2;
    alert(`${n1}*${n2}=${resultado}`)
    novaOperacao();
}
function divisãoreal (){
    resultado=n1/n2;
    alert(`${n1}/${n2}=${resultado}`)
    novaOperacao();
}
function divisãointeira (){
    resultado=n1/n2;
    alert(`o resto da divisao entre ${n1} e ${n2} e igual a ${resultado}`)
    novaOperacao();
}
function potenciação(){
    resultado=n1**n2;
    alert(`${n1} elevado a ${n2} e igual a ${resultado}`)
    novaOperacao();
}
 
function novaOperacao(){
    let opcao=prompt('deseja fazer outra operação? \n 1-sim \n 2-nao');
    if (opcao==1) {
        calculadora();
 } 
 else if(opcao==2)
 {alert('ate mais')}

}

/*if (operacao==1){
    soma();}
    else if (operacao==2) {
    substração();}
    else if (operacao==3){
        multiplicão();}
        else if (operacao==4){
            divisãoreal();
        }
        else if(operacao==5){
            divisãointeira();
        }
        else if (operacao==6){
            potenciação()
        }*/
    }
    switch(operacao) {
        case 1: soma();
        break;
        case 2: substração();
        break;
        case 3 : multiplicão();
        break;
        case 4: divisãoreal();
        break;
        case 5: divisãointeira();
        break;
        case 6 :potenciação();
        break;

    }
    



}

    }


calculadora()