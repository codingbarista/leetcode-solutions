/*
    In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  
    (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
    We may rotate the i-th domino, so that A[i] and B[i] swap values.
    Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.
    If it cannot be done, return -1.
*/

/*
    Our strategy to solve this problem is greedy.

    Our greedy choice
    - We will make either A or B to match A[0]
    - Or we will make either A or B to match B[0]
    - all else, we simply cannot make either A or B with same elements.
*/
function minDominoRotations(A, B) {
    // take the first element of A as our target
    const rotations = getRotations(A[0], A, B);
    // if we can make every element to match A[0] then return rotations
    if (rotation !== -1 || A[0] === B[0]) return rotations;
    // return rotation count of making all element to match B[0]
    else return getRotations(B[0], B, A);
}

function getRotations(target, A, B) {
    let rotationA = 0;
    let rotationB = 0;

    for (let i = 0; i < A.length; i++) {
        // cannot rotate
        if (A[i] !== target && B[i] !== target) return -1;
        // rotate A
        else if (A[i] !== target) rotationA++;
        // rotate B
        else if (B[i] !== target) rotationB++;
    }

    return Math.min(rotationA, rotationB);
}