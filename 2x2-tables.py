#print('solving')

def inverseAlg(alg):
    sequence = alg.split()
    sequence.reverse()
    inversed = []
    for move in sequence:
        if len(move) == 1:
            inversed.append(move + "'")
        elif move[1] == "'":
            inversed.append(move[0])
        else:
            inversed.append(move)
    return ' '.join(inversed)

# ULB, URB, UFR, UFL, DFL, DFR, DBR
permutation = '0123456'
perm_moves = ["U2","U", "U'", "F2", "R2"]

def movePermutation(move, state):
    new_state = list(state)
    if move == "U2":
        temp = new_state[0]
        new_state[0] = new_state[2]
        new_state[2] = temp
        temp = new_state[1]
        new_state[1] = new_state[3]
        new_state[3] = temp
    elif move == "U":
        temp = new_state[3]
        new_state[3] = new_state[2]
        new_state[2] = new_state[1]
        new_state[1] = new_state[0]
        new_state[0] = temp
    elif move == "U'":
        temp = new_state[0]
        new_state[0] = new_state[1]
        new_state[1] = new_state[2]
        new_state[2] = new_state[3]
        new_state[3] = temp
    elif move == "F2":
        temp = new_state[3]
        new_state[3] = new_state[5]
        new_state[5] = temp
        temp = new_state[2]
        new_state[2] = new_state[4]
        new_state[4] = temp
    elif move == "F":
        temp = new_state[3]
        new_state[3] = new_state[4]
        new_state[4] = new_state[5]
        new_state[5] = new_state[2]
        new_state[2] = temp
    elif move == "F'":
        temp = new_state[3]
        new_state[3] = new_state[2]
        new_state[2] = new_state[5]
        new_state[5] = new_state[4]
        new_state[4] = temp
    elif move == "R2":
        temp = new_state[1]
        new_state[1] = new_state[5]
        new_state[5] = temp
        temp = new_state[2]
        new_state[2] = new_state[6]
        new_state[6] = temp
    elif move == "R":
        temp = new_state[2]
        new_state[2] = new_state[5]
        new_state[5] = new_state[6]
        new_state[6] = new_state[1]
        new_state[1] = temp
    elif move == "R'":
        temp = new_state[2]
        new_state[2] = new_state[1]
        new_state[1] = new_state[6]
        new_state[6] = new_state[5]
        new_state[5] = temp
    return ''.join(new_state)

def isNewState(current_state, combinations):
    for existing_states in combinations:
        for existing_state in existing_states:
            if current_state == existing_state[0]:
                return False
    return True

perm_count = 1
permutations = [
    [[permutation, '']]
]
depth = 1
while False:
    #print(depth)
    permutations.append([])
    for [current_perm, moves] in permutations[depth-1]:
        for current_move in perm_moves:
            new_state = movePermutation(current_move, current_perm)
            if isNewState(new_state, permutations):
                perm_count += 1
                permutations[depth].append([new_state, moves + current_move + " "])
                print('"' + new_state + '": "' + inverseAlg(moves + current_move) + '",')
    #print(permutations[depth])
    if len(permutations[depth]) == 0:
        break
    depth += 1

orientation = '0000000'
ori_moves = ["U2", "U", "U'", "F2", "F", "F'", "R2", "R", "R'"]

def moveOrientation(move, state):
    new_state = list(state)
    if move == "U2":
        temp = new_state[0]
        new_state[0] = new_state[2]
        new_state[2] = temp
        temp = new_state[1]
        new_state[1] = new_state[3]
        new_state[3] = temp
    elif move == "U":
        temp = new_state[3]
        new_state[3] = new_state[2]
        new_state[2] = new_state[1]
        new_state[1] = new_state[0]
        new_state[0] = temp
    elif move == "U'":
        temp = new_state[0]
        new_state[0] = new_state[1]
        new_state[1] = new_state[2]
        new_state[2] = new_state[3]
        new_state[3] = temp
    elif move == "F2":
        temp = new_state[3]
        new_state[3] = new_state[5]
        new_state[5] = temp
        temp = new_state[2]
        new_state[2] = new_state[4]
        new_state[4] = temp
    elif move == "F":
        temp = new_state[3]
        new_state[3] = str((int(new_state[4])+2)%3)
        new_state[4] = str((int(new_state[5])+1)%3)
        new_state[5] = str((int(new_state[2])+2)%3)
        new_state[2] = str((int(temp)+1)%3)
    elif move == "F'":
        temp = new_state[3]
        new_state[3] = str((int(new_state[2])+2)%3)
        new_state[2] = str((int(new_state[5])+1)%3)
        new_state[5] = str((int(new_state[4])+2)%3)
        new_state[4] = str((int(temp)+1)%3)
    elif move == "R2":
        temp = new_state[1]
        new_state[1] = new_state[5]
        new_state[5] = temp
        temp = new_state[2]
        new_state[2] = new_state[6]
        new_state[6] = temp
    elif move == "R":
        temp = new_state[2]
        new_state[2] = str((int(new_state[5])+2)%3)
        new_state[5] = str((int(new_state[6])+1)%3)
        new_state[6] = str((int(new_state[1])+2)%3)
        new_state[1] = str((int(temp)+1)%3)
    elif move == "R'":
        temp = new_state[2]
        new_state[2] = str((int(new_state[1])+2)%3)
        new_state[1] = str((int(new_state[6])+1)%3)
        new_state[6] = str((int(new_state[5])+2)%3)
        new_state[5] = str((int(temp)+1)%3)
    return ''.join(new_state)

ori_count = 1
orientations = [
    [[orientation, '']]
]
depth = 1
while True:
    #print(depth)
    orientations.append([])
    for [current_ori, moves] in orientations[depth-1]:
        for current_move in ori_moves:
            new_state = moveOrientation(current_move, current_ori)
            #print(new_state)
            if isNewState(new_state, orientations):
                ori_count += 1
                orientations[depth].append([new_state, moves + current_move + " "])
                print('"' + new_state + '": "' + inverseAlg(moves + current_move) + '",')
    #print(orientations[depth])
    if len(orientations[depth]) == 0:
        break
    depth += 1

#print(ori_count)
#print(permutations)