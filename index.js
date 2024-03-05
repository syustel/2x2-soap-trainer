var cornerPairs = ['BC','BD','BF','BG','BH','BI','BJ','BK','BL','BM','BO','BP','BS','BT','BU','BV','BW','BX','CB','CD','CF','CG','CH','CI','CK','CL','CN','CO','CP','CQ','CS','CT','CU','CV','CW','CX','DB','DC','DG','DH','DJ','DK','DL','DM','DN','DO','DP','DQ','DS','DT','DU','DV','DW','DX','FB','FC','FG','FH','FJ','FK','FL','FM','FN','FO','FP','FQ','FS','FT','FU','FV','FW','FX','GB','GC','GD','GF','GH','GI','GJ','GK','GM','GN','GO','GP','GQ','GS','GT','GV','GW','GX','HB','HC','HD','HF','HG','HI','HJ','HK','HL','HM','HN','HO','HP','HQ','HT','HU','HV','HW','IB','IC','IG','IH','IJ','IK','IL','IM','IN','IO','IP','IQ','IS','IT','IU','IV','IW','IX','JB','JD','JF','JG','JH','JI','JK','JL','JN','JO','JP','JQ','JS','JT','JU','JV','JW','JX','KB','KC','KD','KF','KG','KH','KI','KJ','KL','KM','KN','KO','KQ','KS','KT','KU','KW','KX','LB','LC','LD','LF','LH','LI','LJ','LK','LM','LN','LO','LP','LQ','LS','LT','LV','LW','LX','MB','MD','MF','MG','MH','MI','MK','ML','MN','MO','MP','MQ','MS','MT','MU','MV','MW','MX','NC','ND','NF','NG','NH','NI','NJ','NK','NL','NM','NO','NP','NS','NT','NU','NV','NW','NX','OB','OC','OD','OF','OG','OH','OI','OJ','OK','OL','OM','ON','OP','OQ','OS','OU','OV','OX','PB','PC','PD','PF','PG','PH','PI','PJ','PL','PM','PN','PO','PQ','PS','PT','PU','PW','PX','QC','QD','QF','QG','QH','QI','QJ','QK','QL','QM','QO','QP','QS','QT','QU','QV','QW','QX','SB','SC','SD','SF','SG','SI','SJ','SK','SL','SM','SN','SO','SP','SQ','ST','SU','SV','SW','TB','TC','TD','TF','TG','TH','TI','TJ','TK','TL','TM','TN','TP','TQ','TS','TU','TV','TX','UB','UC','UD','UF','UH','UI','UJ','UK','UM','UN','UO','UP','UQ','US','UT','UV','UW','UX','VB','VC','VD','VF','VG','VH','VI','VJ','VL','VM','VN','VO','VQ','VS','VT','VU','VW','VX','WB','WC','WD','WF','WG','WH','WI','WJ','WK','WL','WM','WN','WP','WQ','WS','WU','WV','WX','XB','XC','XD','XF','XG','XI','XJ','XK','XL','XM','XN','XO','XP','XQ','XT','XU','XV','XW'];

var edgePairs = ['AB', 'AD', 'AE', 'AF', 'AG', 'AH', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'BA', 'BD', 'BE', 'BF', 'BG', 'BH', 'BJ', 'BK', 'BL', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'DA', 'DB', 'DF', 'DG', 'DH', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX', 'EA', 'EB', 'EF', 'EG', 'EH', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EO', 'EP', 'EQ', 'ER', 'ES', 'ET', 'EU', 'EV', 'EW', 'EX', 'FA', 'FB', 'FD', 'FE', 'FG', 'FH', 'FJ', 'FK', 'FM', 'FN', 'FO', 'FP', 'FQ', 'FR', 'FS', 'FT', 'FU', 'FV', 'FW', 'FX', 'GA', 'GB', 'GD', 'GE', 'GF', 'GH', 'GJ', 'GK', 'GL', 'GM', 'GN', 'GO', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GV', 'GW', 'HA', 'HB', 'HD', 'HE', 'HF', 'HG', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HS', 'HT', 'HU', 'HV', 'HW', 'HX', 'JA', 'JB', 'JD', 'JE', 'JF', 'JG', 'JH', 'JK', 'JL', 'JM', 'JN', 'JO', 'JQ', 'JR', 'JS', 'JT', 'JU', 'JV', 'JW', 'JX', 'KA', 'KB', 'KD', 'KE', 'KF', 'KG', 'KH', 'KJ', 'KL', 'KM', 'KN', 'KO', 'KP', 'KQ', 'KR', 'KS', 'KT', 'KV', 'KW', 'KX', 'LA', 'LB', 'LD', 'LE', 'LG', 'LH', 'LJ', 'LK', 'LM', 'LN', 'LO', 'LP', 'LQ', 'LR', 'LS', 'LT', 'LU', 'LV', 'LW', 'LX', 'MA', 'MD', 'ME', 'MF', 'MG', 'MH', 'MJ', 'MK', 'ML', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'NA', 'NB', 'ND', 'NE', 'NF', 'NG', 'NH', 'NJ', 'NK', 'NL', 'NM', 'NO', 'NP', 'NQ', 'NR', 'NS', 'NU', 'NV', 'NW', 'NX', 'OA', 'OB', 'OD', 'OE', 'OF', 'OG', 'OH', 'OJ', 'OK', 'OL', 'OM', 'ON', 'OP', 'OQ', 'OR', 'OS', 'OT', 'OU', 'OW', 'OX', 'PA', 'PB', 'PD', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PO', 'PQ', 'PR', 'PS', 'PT', 'PU', 'PV', 'PW', 'PX', 'QB', 'QD', 'QE', 'QF', 'QG', 'QH', 'QJ', 'QK', 'QL', 'QM', 'QN', 'QO', 'QP', 'QR', 'QS', 'QT', 'QU', 'QV', 'QW', 'QX', 'RA', 'RB', 'RD', 'RE', 'RF', 'RG', 'RJ', 'RK', 'RL', 'RM', 'RN', 'RO', 'RP', 'RQ', 'RS', 'RT', 'RU', 'RV', 'RW', 'RX', 'SA', 'SB', 'SD', 'SE', 'SF', 'SG', 'SH', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SP', 'SQ', 'SR', 'ST', 'SU', 'SV', 'SX', 'TA', 'TB', 'TD', 'TE', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TO', 'TP', 'TQ', 'TR', 'TS', 'TU', 'TV', 'TW', 'TX', 'UA', 'UB', 'UD', 'UE', 'UF', 'UG', 'UH', 'UJ', 'UL', 'UM', 'UN', 'UO', 'UP', 'UQ', 'UR', 'US', 'UT', 'UV', 'UW', 'UX', 'VA', 'VB', 'VD', 'VE', 'VF', 'VG', 'VH', 'VJ', 'VK', 'VL', 'VM', 'VN', 'VP', 'VQ', 'VR', 'VS', 'VT', 'VU', 'VW', 'VX', 'WA', 'WB', 'WD', 'WE', 'WF', 'WG', 'WH', 'WJ', 'WK', 'WL', 'WM', 'WN', 'WO', 'WP', 'WQ', 'WR', 'WT', 'WU', 'WV', 'WX', 'XA', 'XB', 'XD', 'XE', 'XF', 'XH', 'XJ', 'XK', 'XL', 'XM', 'XN', 'XO', 'XP', 'XQ', 'XR', 'XS', 'XT', 'XU', 'XV', 'XW'];

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X"];
//var learned = ['B','C','D','F','G','H','I','J','K','L'];
var learned = [];
var learnedPairs = [];
var resagados = [];

var subsets = ["SS1", "SS2", "U", "T", "Asymetric1", "Asymetric2"];
var twists = [1, 2, 0, 0, 1, 2];

var twist0 = ["sune", "antisune", "H", "L", "T", "U", "Pi"];
var twist12 = ["frog", "kick", "merge", "push", "single", "split", "swim", "wheel"];

var learnedSubsets = [];
var learnedCases = [];

//radioButtons();

var pos;

function radioButtons() {
    var text = "";
    for (let i = 0; i < subsets.length; i++) {
        text += '<input type="radio" id="'+ subsets[i]+'">'+ '<img src="' + subsets[i] + '.PNG"><br>';
    }
    document.getElementById("selection").innerHTML = text;
}

document.getElementById("go").onclick = go;

function go() {
    console.log('go')
    document.getElementById("intro").style.display = 'none';
    document.getElementById("cases").style.display = 'block';

    //Rellenar learnedCases (equivalente a learnedPairs)
    for (let i = 0; i < subsets.length; i++) {
        if (document.getElementById(subsets[i]).checked) {
            if (twists[i] == 0) {
                for (let j = 0; j<twist0.length; j++) {
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