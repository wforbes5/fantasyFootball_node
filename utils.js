
/**
 * function takes a nested array and returns array of json   
 * @constructor
 * @param {Array[Array]} table - The title of the book.
 *
 */
function nestedToJsonArray(table) {
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
};



/**
 * function takes array of json and returns array with all keys converted
 * @constructor
 * @param {Array[JSON]} results - The title of the book.
 *
 */

function convertJsonArrayTypes(results) {
  try {
  results.forEach((result) => {
  Object.keys(result).forEach((key) => {
      let k = result[key];
      if (k.includes('%')) {
        result[key] = parseFloat(k.replace('%', ''))
      } else if (parseInt(k)) {
        result[key] = parseInt(k)
      }
    });
  })
  } catch (err) {
    console.log(err)
  }
  return results
};

module.exports.nestedToJsonArray = nestedToJsonArray;
module.exports.convertJsonArrayTypes = convertJsonArrayTypes;