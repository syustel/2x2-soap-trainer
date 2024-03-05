const learned = [];
const learnedPairs = [];
const resagados = [];

const subsets = ["SS1", "SS2", "U", "T", "Asymetric1", "Asymetric2"];
const twists = [1, 2, 0, 0, 1, 2];

const twist0 = ["sune", "antisune", "H", "L", "T", "U", "Pi"];
const twist12 = ["frog", "kick", "merge", "push", "single", "split", "swim", "wheel"];

const learnedSubsets = [];
const learnedCases = [];

let pos;

document.getElementById("go").onclick = () => {
    console.log('go')
    document.getElementById("intro").style.display = 'none';
    document.getElementById("cases").style.display = 'block';

    //Rellenar learnedCases (equivalente a learnedPairs)
    for (let i = 0; i < subsets.length; i++) {
        if (document.getElementById(subsets[i]).checked) {
            if (twists[i] == 0) {
                for (let j = 0; j < twist0.length; j++) {
                    learnedCases.push([subsets[i], "twist0/"+twist0[j]]);
                }
            }
            else {
                for (let j = 0; j<twist12.length; j++) {
                    learnedCases.push([subsets[i], "twist"+twists[i]+"/"+twist12[j]]);
                }
            }
        }
    }

    learnedCases.sort(function(a, b){return 0.5 - Math.random()});
    pos = 0;

    getCase();
}

function getCase() {
    //sconsole.log(learnedCases[pos]);
    document.getElementById("case").innerHTML = '<img src="'+learnedCases[pos][1]+'.PNG"><br><img src="'+learnedCases[pos][0]+'.PNG">';
    pos++;
}

function isLearned(pair) {
    for (j = 0; j < learned.length; j++) {
        if (pair.indexOf(learned[j]) != -1) {
            return true;
        }
    }
    return false;
}

function guardar() {
    resagados.push(learnedPairs[pos-1]);
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}