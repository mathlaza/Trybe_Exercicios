// //fatorial
// let fatorial = 10;

// for (let i = fatorial - 1; i > 0; i -= 1) {
//     fatorial = fatorial * i;
// }
// console.log(fatorial);


// //inverte palavra
// let word = 'tryber';
// let armazena = '';

// for (let i = word.length - 1; i >= 0; i -= 1) {
//     armazena = armazena + word[i];
// }
// console.log(armazena);


// //retorna a maior palavra do array
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let counter = 0;
// let compare = 0;
// let armazena = 0;

// for (let i = 0; i < array.length; i += 1) {
//     for (let j = 1; j <= array[i].length; j += 1) {
//         counter += 1;
//     }
//     if (counter > compare) {
//         compare = counter;
//         armazena = array[i];
//     }
//     counter = 0;
// }
// console.log(armazena);


// //retorna maior numero primo entre 0 e 50
// let maiorprimo = 0;
// let limite = 50;
// let contador = 0;

// for (i = 0; i <= limite; i += 1) {
//     for (j = 2; j <= i; j += 1) {
//         if (i % j === 0) {
//             contador += 1;
//         }
//     }
//     if (contador === 1 && i > maiorprimo) {
//         maiorprimo = i;
//     }
//     contador = 0;
// }
// console.log(maiorprimo);


//triângulo de asteriscos invertido
// let n = 5;
// let symbol = '*';
// let armazena = '';
// let position = n;

// for (let line = 0; line < n; line += 1) {
//     for (let col = 0; col <= n; col += 1) {
//         if (col < position) {
//             armazena = armazena + ' ';
//         } else {
//             armazena = armazena + symbol;
//         }
//     }
//     console.log(armazena);
//     armazena = '';
//     position -= 1;
// }



