const pessoa = ["LuanZra", "DEV FullStack", "Main Jhin", 24, "Monitor"];
const teste = "LuanZra";

//Dividindo os elementos com um caractere no exmplo abaixo foi usado " - ".
//document.getElementById("altere").innerHTML = pessoa.join(" - ");
//Saída = LuanZra - Main Jhin - 24 - Monitor

//Apagando o ultimo elemento da lista.
//pessoa.pop();
//document.getElementById("altere").innerHTML = pessoa;
//Saída = LuanZra - Main Jhin - 24

//Adicionando um elemento no final array.
//pessoa.push("Tri-Atleta");
//document.getElementById("altere").innerHTML = pessoa;
//Saída = LuanZra, Main Jhin, 24, Monitor, Tri-Atleta

//Removendo o primeiro elemento do array e depois disso os indices são realocados.
//pessoa.shift();
//document.getElementById("altere").innerHTML = pessoa;
//Saída = Main Jhin, 24, Monitor

//Colocando um elemento no inicio do array e depois disso os indices são realocados.
//pessoa.unshift("comedor de acarajé");
//document.getElementById("altere").innerHTML = pessoa;
//Saída = comedor de acarajé, LuanZra, Main Jhin, 24, Monitor

//Deletando elementos por posição, mas não altera as posições do array.
//delete pessoa[0];
//document.getElementById("altere").innerHTML = pessoa;
//Saída = ,Main Jhin,24,Monitor
//ou
//Saída = undefined,Main Jhin,24,Monitor

//Adicionar multiplos elementos apartir de uma posição desejada do array, O primeiro valor pega qual posição vc quer alterar, quantos elementos vc quer apagar e o terceiro os elementos que vc deseja adicionar no array. (primeiro_valor,segundo_valor,terceiro_valor)
//pessoa.splice(1, 2, "Comer", " sushi", " É top");
//Saída = LuanZra,Comer, sushi, É top,Monitor
//document.getElementById("altere").innerHTML = pessoa;
//Ou seja, ele começou no pessoa[1] apagou os dois elementos seguintes pessoa[2] = "Main Jhin" e pessoa[3] = "24" e manteve o pessoa[4] = "Monitor" e ao final adicionou "Comer", " sushi", " É top" no pessoa[2],pessoa[3],pessoa[4] respectivamente e adicionou mais um lugar na memória para armazenar pessoa[5] = "Monitor".

//Concatenando arrays.
//Junta duas arrays em uma nova variavel pré definida.
//const hobies = ["Treinar", "Jogar lol", "Ler livros"];
//const perfil = pessoa.concat(hobies).join(" * ");
//document.getElementById("altere").innerHTML = perfil;

//Fatiando arrays.
//Faz um fatiamente através de um ponto de partida que nesse caso é o indice do array e onde vc deseja parar, detalhe que ele pega um valor antes de onde vc quer parar não pegando o indice que vc declarou que deseja parar.
//const vulgo_Profissao = pessoa.slice(0, 2).join(" - ");
//document.getElementById("altere").innerHTML = vulgo_Profissao;

//Mostrando os elementos do array em ordem alfabetica.
//const ordem_Alfa = pessoa.sort().join(" * ");
//document.getElementById("altere").innerHTML = ordem_Alfa;
//Mostrando elementos em ordem invertida.
//const ordem_Alfa_Invert = pessoa.sort().reverse().join(" - ");
//document.getElementById("altere").innerHTML = ordem_Alfa_Invert;

//Para ordenar em ordem numérica é um pouco mais complicado, precisamos usar um function para o js entender que estamos querendo ordenar os numeros e não as letras.
//const numeros = [12, 22, 24, 40, 55, 56, 10, 33];
//document.getElementById("altere").innerHTML = numeros.sort(function (a, b) { return a - b });
//Para inverter a ordem apenas trocar no return b por a que retorna a ordem de trás para frente.
//document.getElementById("altere").innerHTML = numeros.sort(function (a, b) { return b - a });

//Para pegar o valor máximo de um array no caso numérico.
//const numeros = [12, 22, 24, 40, 55, 56, 10, 33];
//document.getElementById("altere").innerHTML = MenorNumero(numeros);

//function MaiorNumero(array) {
//    return Math.max.apply(null, array);
//}

//Para pegar o valor máximo de um array no caso numérico.
//function MenorNumero(array) {
//    return Math.min.apply(null, array)
//}

//Filtrar um números atravês de parametros pré definidos.
//const numeros = [12, 22, 24, 40, 55, 56, 10, 33];
//const num_over_20 = numeros.filter(filtragem)
//document.getElementById("altere").innerHTML = num_over_20
//function filtragem(value, index, array) {
//    return value > 20
//}

