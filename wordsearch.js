const wordSearch = (letters, word) => {
    if (letters.length === 0 || !word) {
        return false;
    }

    // All possible directions
    const lettersFlipped = transpose(letters);
    const lettersReversed = letters.map(r => [...r].reverse());
    const reverseFlipped = lettersFlipped.map(r => [...r].reverse());
    const lettersDiagonal = diagonalTranspose(letters);
    const reverseDiagonal = lettersDiagonal.map(r => [...r].reverse());
    const flippedDiagonal = diagonalTranspose(lettersFlipped.map(r => [...r].reverse()));
    const reverseFlippedDiagonal = flippedDiagonal.map(r => [...r].reverse());
   
    const allRows = [
        ...letters,
        ...lettersReversed,
        ...lettersFlipped,
        ...reverseFlipped,
        ...lettersDiagonal,
        ...reverseDiagonal,
        ...flippedDiagonal,
        ...reverseFlippedDiagonal
    ];

    const horizontalJoin = allRows.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) { 
            return true;
        }
    }
    return false;
}

const transpose = function(matrix) {
    const output = [];
    
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (!output[col]) {
          output[col] = [];
        }
        output[col][row] = matrix[row][col];
      }
    }
  
    return output;
  };

const diagonalTranspose = (letterArray) => {
    const originalArray = [...letterArray];
    const diagonalTranspose = [];
    for (let i = 0; i < originalArray.length; i++) {
        const insideArray = [...originalArray[i]];
        const reversedRow = insideArray.reverse();
        for (let j = 0; j < reversedRow.length; j++) {
            if (!diagonalTranspose[i + j]) {
                diagonalTranspose[i + j] = [];
            }
            diagonalTranspose[i + j].push(reversedRow[j]);
        }
    }
    return diagonalTranspose;
}
module.exports = wordSearch
