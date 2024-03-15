import { orientations } from "./orientations.js";
import { permutations } from "./permutations.js";

/* current performance
Average movecount: 11.912207688287936
Maximum movecount: 19
*/
export function solve(orientation, permutation, check_inverse = true) {
    // solution
    const orientation_solution = orientations[orientation];
    orientation_solution.split(' ').forEach(move => {
        permutation = movePermutation(move, permutation);
    });
    const permutation_solution = permutations[permutation];
    const full_solution = orientation_solution + ' ' + permutation_solution

    // cleaning
    const clean_solution = [];
    let prev_move;
    full_solution.split(' ').forEach( (move, index) => {
        if (index == 0) {
            prev_move = move;
            clean_solution.push(move);
        } else {
            if (move[0] == prev_move[0]) {
                clean_solution.pop();
                const turn = {
                    ".": 1,
                    "2": 2,
                    "'": 3
                };
                const turn_amount = (turn[move[1]||'.'] + turn[prev_move[1]||'.'])%4;
                if (turn_amount != 0) clean_solution.push(move[0] + ["", "2", "'"][turn_amount-1])
            } else clean_solution.push(move);
            prev_move = move;
        }
    })

    if (check_inverse) {
        // aply solution to get inverse
        let inverse_orientation = '0000000';
        let inverse_permutation = '0123456';
        clean_solution.forEach( move => {
            inverse_orientation = moveOrientation(move, inverse_orientation);
            inverse_permutation = movePermutation(move, inverse_permutation);
        })

        const inverse_solution = solve(inverse_orientation, inverse_permutation, false);
        if (inverse_solution.length < clean_solution.length) return inverseAlg(inverse_solution);
    }

    return clean_solution;
}

export function inverseAlg(alg) {
    const sequence = alg.reverse();
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
    return inversed
}

export function movePermutation(move, state) {
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

export function moveOrientation(move, state) {
    const new_state = state.split('');
    let temp;
    if (move == "U2") {
        temp = new_state[0]
        new_state[0] = new_state[2]
        new_state[2] = temp
        temp = new_state[1]
        new_state[1] = new_state[3]
        new_state[3] = temp
    }
    else if (move == "U") {
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
        new_state[3] = String((parseInt(new_state[4])+2)%3)
        new_state[4] = String((parseInt(new_state[5])+1)%3)
        new_state[5] = String((parseInt(new_state[2])+2)%3)
        new_state[2] = String((parseInt(temp)+1)%3)
    } else if (move == "F'") {
        temp = new_state[3]
        new_state[3] = String((parseInt(new_state[2])+2)%3)
        new_state[2] = String((parseInt(new_state[5])+1)%3)
        new_state[5] = String((parseInt(new_state[4])+2)%3)
        new_state[4] = String((parseInt(temp)+1)%3)
    } else if (move == "R2") {
        temp = new_state[1]
        new_state[1] = new_state[5]
        new_state[5] = temp
        temp = new_state[2]
        new_state[2] = new_state[6]
        new_state[6] = temp
    } else if (move == "R") {
        temp = new_state[2]
        new_state[2] = String((parseInt(new_state[5])+2)%3)
        new_state[5] = String((parseInt(new_state[6])+1)%3)
        new_state[6] = String((parseInt(new_state[1])+2)%3)
        new_state[1] = String((parseInt(temp)+1)%3)
    } else if (move == "R'") {
        temp = new_state[2]
        new_state[2] = String((parseInt(new_state[1])+2)%3)
        new_state[1] = String((parseInt(new_state[6])+1)%3)
        new_state[6] = String((parseInt(new_state[5])+2)%3)
        new_state[5] = String((parseInt(temp)+1)%3)
    }
    return new_state.join('');
}