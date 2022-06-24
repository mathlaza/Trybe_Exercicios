const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const hof = (gabarito, respostas, callback) => {
    return callback(gabarito, respostas);
}

const check = (gabarito, respostas) => {
    let score = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        if (gabarito[i] === respostas[i]) {
            score += 1;
        }
        else if (gabarito[i] !== respostas[i] && respostas[i] !== 'N.A') {
            score -= 0.5;
        };
    };
    return score;
};

console.log(hof(gabarito, respostas, check));