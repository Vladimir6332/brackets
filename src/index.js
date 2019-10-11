module.exports = function check(str, bracketsConfig) {
  let difBracket = {};
  let sameBracket = {};

  // create configs different and same brackets
  bracketsConfig.forEach((val, index, arr) => {
    if (val[0] === val[1]) sameBracket[val[0]] = val[0]
    else difBracket[val[1]] = val[0];
  });

  // check simple brackets
  let countSimpleBrackets = function (arr) {
    
  }


  
   

}
