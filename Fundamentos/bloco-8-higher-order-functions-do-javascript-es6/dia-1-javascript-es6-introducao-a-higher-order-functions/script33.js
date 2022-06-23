const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (gabarito, respostas) => {
    if (gabarito === respostas) {
        return 1;
    } if (respostas === 'N.A') {
        return 0;
    }
    return -0.5;
};

const hof = (gabarito, respostas, callback) => {
    let score = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        const atual = callback(gabarito[i], respostas[i]);
        score += atual;
    }
    return score;
}

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, check));