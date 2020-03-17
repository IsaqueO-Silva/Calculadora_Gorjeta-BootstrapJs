function calcular(){
    var var01 = window.document.getElementById('txtvalor')
    var valor = Number(var01.value)//Valor da conta
    var var02 = window.document.getElementById('txtpessoas')
    var nPessoas = Number(var02.value)//N° de pessoas
    var opc = window.document.getElementById('opc')//Escolha do atendimento
    var atendimento = (String(opc.value))//Valor de opc convertido para string

    /*Atribuindo a porcentagem a uma váriavel auxiliar
    de acordo com a escolha de atendimento*/
    var aux
    if(atendimento == '30% - Incrível')
    {
        aux = 30
    }else if(atendimento == '20% - Bom')
    {
        aux = 20
    }else if(atendimento == '15% - Ok')
    {
        aux = 15
    }else if(atendimento == '10% - Ruim')
    {
        aux = 10
    }else if(atendimento == '5% - Horrível')
    {
        aux = 5
    }

    //Cálculo do valor da gorjeta
    var res = 0
    res = parseFloat(((valor * aux) / 100) / nPessoas).toFixed(2)//toFixed(2), define 2 casas decimais pós valor ex: 0.00
    window.alert(`Valor da gorjeta ${res} para ${nPessoas} pessoa(s).`)
}