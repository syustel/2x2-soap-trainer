import { orientations } from "./orientations.js";
import { permutations } from "./permutations.js";

/* current performance
Average movecount: 10.42109026280837
Maximum movecount: 16
*/
export function solve(orientation, permutation, check_inverse = true, axis = 'top') {
    let shortest_solution = Array(20);
    // solution
    //console.log('solving for params', orientation, permutation, check_inverse, axis)
    const orientation_solution = orientations[orientation];
    const original_permutation = permutation;
    orientation_solution.split(' ').forEach(move => {
        permutation = movePermutation(move, permutation);
    });
    const permutation_solution = permutations[permutation];
    const full_solution = orientation_solution + ' ' + permutation_solution;

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
    if (clean_solution.length < shortest_solution.length) shortest_solution = clean_solution;

    if (check_inverse) {
        // aply solution to get inverse
        let inverse_orientation = '0000000';
        let inverse_permutation = '0123456';
        shortest_solution.forEach( move => {
            inverse_orientation = moveOrientation(move, inverse_orientation);
            inverse_permutation = movePermutation(move, inverse_permutation);
        })

        const inverse_solution = solve(inverse_orientation, inverse_permutation, false, axis);
        if (inverse_solution.length < shortest_solution.length) shortest_solution = inverseAlg(inverse_solution);
    }

    if(axis == 'top' && check_inverse) {
        const rotation_move_dict = {
            "U": "R",
            "U2": "R2",
            "U'": "R'",
            "R": "F",
            "R2": "F2",
            "R'": "F'",
            "F": "U",
            "F2": "U2",
            "F'": "U'",
        }
        // check axis X
        const [rotated_orientation, rotated_permutation] = rotateCube(orientation, original_permutation);
        let rotated_solution = solve(rotated_orientation, rotated_permutation, check_inverse, 'side');
        // rotate alg
        rotated_solution = rotated_solution.map(move => rotation_move_dict[move])
        if (rotated_solution.length < shortest_solution.length) shortest_solution = rotated_solution;

        // check axis Z
        const [rotated_orientationZ, rotated_permutationZ] = rotateCube(rotated_orientation, rotated_permutation);
        let rotated_solutionZ = solve(rotated_orientationZ, rotated_permutationZ, check_inverse, 'side');
        // rotate alg
        rotated_solutionZ = rotated_solutionZ.map(move => rotation_move_dict[move])
        rotated_solutionZ = rotated_solutionZ.map(move => rotation_move_dict[move])
        if (rotated_solutionZ.length < shortest_solution.length) shortest_solution = rotated_solutionZ;
    }

    return shortest_solution;
}

function rotateCube(orientation, permutation) {
    const traslation = [6, 5, 2, 1, 0, 3, 4];
    const rotation_perm_dict = {
        '0': '4',
        '1': '3',
        '2': '2',
        '3': '5',
        '4': '6',
        '5': '1',
        '6': '0',
    }
    const new_permutation = traslation.map( t => rotation_perm_dict[permutation.at(t)]);
    //new_permutation = new_permutation.map( p => rotation_perm_dict[p]).join('');

    let new_orientation = traslation.map( t => orientation.at(t));
    new_orientation = new_orientation.map( (p, i) => {
        if ((parseInt(new_permutation[i]) + i)%2 == 0) {
            return p;
        } else if (i%2 == 0) {
            return String((parseInt(p) + 1)%3);
        } else {
            return String((parseInt(p) + 2)%3);
        }
    })

    return [new_orientation.join(''), new_permutation.join('')];
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