const pessoa = ["LuanZra", "Main Jhin", 24, "Monitor"];
const teste = "LuanZra";

//Dividindo os elementos com um caractere no exmplo abaixo foi usado " - ".
//document.getElementById("altere").innerHTML = pessoa.join(" - ");
//Saída = LuanZra - Main Jhin - 24 - Monitor

//Apagando o ultimo elemento da lista.
//pessoa.pop();
//document.getElementById("altere").innerHTML = pessoa
//Saída = LuanZra - Main Jhin - 24

//Adicionando um elemento no final array.
//pessoa.push("Tri-Atleta");
//document.getElementById("altere").innerHTML = pessoa;
//Saída = LuanZra, Main Jhin, 24, Monitor, Tri-Atleta

//Removendo o primeiro elemento do array e depois disso os indices são realocados.
//pessoa.shift()
//document.getElementById("altere").innerHTML = pessoa
//Saída = Main Jhin, 24, Monitor

//Colocando um elemento no inicio do array e depois disso os indices são realocados.
//pessoa.unshift("comedor de acarajé");
//document.getElementById("altere").innerHTML = pessoa
//Saída = comedor de acarajé, LuanZra, Main Jhin, 24, Monitor

//Deletando elementos por posição, mas não altera as posições do array.
//delete pessoa[0]
//document.getElementById("altere").innerHTML = pessoa
//Saída = ,Main Jhin,24,Monitor
//ou
//Saída = undefined,Main Jhin,24,Monitor

//Adicionar multiplos elementos em um posição desejada do array, O primeiro valor pega qual posição vc quer alterar, quantos elementos vc quer apagar e o terceiro os elementos que vc deseja adicionar no array. (primeiro_valor,segundo_valor,terceiro_valor)
pessoa.splice(1, 2, "Comer", " sushi", " É top")
//Saída = LuanZra,Comer, sushi, É top,Monitor
document.getElementById("altere").innerHTML = pessoa
//Ou seja, ele começou no pessoa[1] apagou os dois elementos seguintes pessoa[2] = "Main Jhin" e pessoa[3] = "24" e manteve o pessoa[4] = "Monitor" e ao final adicionou "Comer", " sushi", " É top" no pessoa[2],pessoa[3],pessoa[4] respectivamente e adicionou mais um lugar na memória para armazenar pessoa[5] = "Monitor".



