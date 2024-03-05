import { permutations } from "./permutations.js";
import { orientations } from "./orientations.js";
import { inverseAlg, movePermutation } from "./cubeFunctions.js";

const subsets = ["SS1", "SS2", "U", "T", "Asymetric1", "Asymetric2"];
const soap_orientations = {
    'SS1': ['0002010', '0110010', '0101010', '2012010', '2021010', '0221010', '1121010', '2222010'],
    'SS2': ['0001020', '0022020', '0202020', '1120020', '0121020', '0211020', '2122020', '1111020'],
    'U': ['0222021', '1110021', '1020021', '2121021', '0012021', '0021021', '1122021'],
    'T': ['0222010', '1110010', '1020010', '2121010', '0012010', '0021010', '1122010'],
    'Asymetric1': ['0002022', '0110022', '0101022', '2012022', '2021022', '0221022', '1121022', '2222022'],
    'Asymetric2': ['0001011', '0022020', '0202020', '1120020', '0121020', '0211020', '2122020', '1111020'],
}

const learnedCases = [];

let pos;

document.getElementById("go").onclick = () => {
    document.getElementById("intro").style.display = 'none';
    document.getElementById("cases").style.display = 'block';

    //Rellenar learnedCases (equivalente a learnedPairs)
    for (let i = 0; i < subsets.length; i++) {
        if (document.getElementById(subsets[i]).checked) {
            learnedCases.push(...soap_orientations[subsets[i]])
        }
    }

    learnedCases.sort(function(a, b){return 0.5 - Math.random()});
    pos = 0;

    getCase();
}

document.body.onkeydown = getCase;
document.body.ontouchstart = getCase;

function getCase() {
    // random state
    const orientation = learnedCases[pos];
    const top_permutation = ['0', '1', '2', '3'].sort((a, b) => 0.5 - Math.random());
    const bottom_permutation = ['4', '5', '6'].sort((a, b) => 0.5 - Math.random());
    let permutation = top_permutation.join('') + bottom_permutation.join('');

    // solution
    const orientation_solution = orientations[orientation];
    orientation_solution.split(' ').forEach(move => {
        permutation = movePermutation(move, permutation);
    });
    const permutation_solution = permutations[permutation];
    const full_solution = orientation_solution + ' ' + permutation_solution

    document.getElementById("case").innerHTML = inverseAlg(full_solution);
    pos++;
    if (pos == learnedCases.length) {
        learnedCases.sort(function(a, b){return 0.5 - Math.random()});
        pos = 0;
    }
}