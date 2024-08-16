// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const number1 = Number(prompt(" Digite um número:"));
const number2 = Number(prompt("Digite mais um número"));
alert(number1 + number2);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".💡 Para saber o tipo de dado você pode usar o operador `typeof`
const valOne = 5

if (typeof valOne == "number") {
  alert("É um número")
} else {
  alert("Não é um número")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isStrig = "oi"

if (typeof isStrig == "string") {
  alert("É uma string")
} else {
  alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBooleano = "false"

if (typeof isBooleano == "boolean") {
  alert("É um boolean")
} else {
  alert("Não é um boolean")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const number_1 = Number(prompt(" Digite um número:"));
const number_2 = Number(prompt("Digite mais um número"));
alert(number1 - number2);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const n1 = Number(prompt(" Digite um número:"));
const n2 = Number(prompt("Digite mais um número"));
alert(number1 * number2);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const numb1 = Number(prompt(" Digite um número:"));
const numb2 = Number(prompt("Digite mais um número"));
alert(number1 / number2);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const numberOne = Number(prompt(" Digite um número:"));
if (numberOne % 2 == 0) {
    alert("É um número par")
} else {
    alert("Não é um número par")
};

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const numberTwo = Number(prompt(" Digite um número:"));
if (numberTwo % 2 != 0) {
    alert("É um número ímpar")
} else {
    alert("Não é um número ímpar")
};