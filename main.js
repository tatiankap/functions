//1
const average = (arr) => {
    const filteredArr = arr.filter(el => Number.parseInt(el) )
   const sum = filteredArr.reduce((a,b) => a + b, 0);
   
   return sum/filteredArr.length
}

console.log(average([4, 6, 6, 'f', 'dd', 9, 'ff', true, false, [], {}]))


//2 with eval
const doMath = (x, znak, y) => {
    const result = eval(x + znak.replace('^', '**') + y);
    return `${x} ${znak} ${y} = ${result}`
}
//2 with if
function doMath2(x, znak, y){
    let rez = 0;
    if(znak === '+') rez = x + y;
    if(znak === '-') rez = x - y;
    if(znak === '*') rez = x * y;
    if(znak === '/') rez = x / y;
    if(znak === '%') rez = x % y;
    if(znak === '^') rez = x ** y;
    return `${x} ${znak} ${y} = ${rez}`
}


const x = prompt('Введіть x:');
const y = prompt('Введіть y:')
const znak = prompt('Введіть znak: ')

alert(doMath(x, znak, y));
alert(doMath2(x, znak, y))

//3
const funcAdd = () => {
    const arr = [];
    const count = prompt('Введіть довжину основного масиву:');

    for(let i = 0; i < count; i++){
        arr.push([]);
        const count2 = prompt(`Введіть довжину внутрішнього ${i+1} масиву:`);
        for(let j = 0; j < count2; j++){
            const text = prompt(`Введіть значення ${j+1}: `);
            arr[i].push(text)
        }
    }
    return arr;
}

console.log(funcAdd());

//4
const func = (string, arr) => {
    console.log(string, arr)
    arr.forEach(element => {
        string = string.replaceAll(element, '')
    });
    return string;
}

const string = prompt('Введіть рядок: ');
const arr = prompt('Введіть які символи прибрати(без пробілу): '); 

alert(func(string, Array.from(arr)));