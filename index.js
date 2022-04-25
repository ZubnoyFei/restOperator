const log = function (a, b, ...rest ) { //Оператор показывает, что могут быть какие-то дополнительные аргументы. Аргумент можно назвать как угодно: Rest, c
    console.log(a, b, rest);
}


log('basic', 'rest', 'operator', 'usage');//basic rest [ 'operator', 'usage' ]  Оператор rest собрал сущности в массив

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);