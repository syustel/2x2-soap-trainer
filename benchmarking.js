import { solve } from "./cubeFunctions.js"
import { orientations } from "./orientations.js";
import { permutations } from "./permutations.js";

const iterations = 3674160;
let total_move_count = 0;
let max_move_count = 0;
Object.keys(orientations).forEach( o => {
    Object.keys(permutations).forEach( p => {
        const solution = solve(o, p);
        const move_count = solution.length;
        total_move_count += move_count;
        max_move_count = Math.max(max_move_count, move_count);
    })
})
console.log('Average', total_move_count/iterations);
console.log('Maximum', max_move_count);