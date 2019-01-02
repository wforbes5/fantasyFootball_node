
/**
 * function takes a nested array and returns array of json   
 * @constructor
 * @param {Array[Array]} table - The title of the book.
 *
 */
function nestedArrayToJsonArray(table) {
    let res = []
    for (let column = 0; column < table.length; column++) {
        let workingHeader = table[column][0];
        let header = table[column][0].replace('.', '_').replace('-','_');
        
        if (column > 0 && table[column][0] === 'RK') {
          header = table[column - 1][0].replace('.', '_').replace('-','_') + '_RK'
        
        }  
        for (let row = 1; row < table[column].length; row++) {
          let pair;
            if (res.length < table[column].length-1) {
              pair = {};
              pair[header] = table[column][row]
              res.push(pair)
            } else {
              pair = res[row-1]
              pair[header] = table[column][row]
              res.splice(row-1, 1,pair)            
            }
        }      
    }
      return res;
}

module.export