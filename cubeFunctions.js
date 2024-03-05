export function inverseAlg(alg) {
    const sequence = alg.split(' ').reverse();
    const inversed = []
    sequence.forEach(move => {
        if (move.length == 1) {
            inversed.push(move + "'")
        } else if (move[1] == "'") {
            inversed.push(move[0])
        } else {
            inversed.push(move) 
        }
    });
    return inversed.join(' ')
}

export function movePermutation(move, state){
    const new_state = state.split('');
    let temp;
    if (move == "U2") {
        temp = new_state[0]
        new_state[0] = new_state[2]
        new_state[2] = temp
        temp = new_state[1]
        new_state[1] = new_state[3]
        new_state[3] = temp
    } else if (move == "U") {
        temp = new_state[3]
        new_state[3] = new_state[2]
        new_state[2] = new_state[1]
        new_state[1] = new_state[0]
        new_state[0] = temp
    } else if (move == "U'") {
        temp = new_state[0]
        new_state[0] = new_state[1]
        new_state[1] = new_state[2]
        new_state[2] = new_state[3]
        new_state[3] = temp
    } else if (move == "F2") {
        temp = new_state[3]
        new_state[3] = new_state[5]
        new_state[5] = temp
        temp = new_state[2]
        new_state[2] = new_state[4]
        new_state[4] = temp
    } else if (move == "F") {
        temp = new_state[3]
        new_state[3] = new_state[4]
        new_state[4] = new_state[5]
        new_state[5] = new_state[2]
        new_state[2] = temp
    } else if (move == "F'") {
        temp = new_state[3]
        new_state[3] = new_state[2]
        new_state[2] = new_state[5]
        new_state[5] = new_state[4]
        new_state[4] = temp
    } else if (move == "R2") {
        temp = new_state[1]
        new_state[1] = new_state[5]
        new_state[5] = temp
        temp = new_state[2]
        new_state[2] = new_state[6]
        new_state[6] = temp
    } else if (move == "R") {
        temp = new_state[2]
        new_state[2] = new_state[5]
        new_state[5] = new_state[6]
        new_state[6] = new_state[1]
        new_state[1] = temp
    } else if (move == "R'") {
        temp = new_state[2]
        new_state[2] = new_state[1]
        new_state[1] = new_state[6]
        new_state[6] = new_state[5]
        new_state[5] = temp
    }
    return new_state.join('')
}