const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let counter = 0;
  for(let grass of backyard){
    grass.map((elem) => {
      if(elem == ('^^')){
        counter++ 
      }
      return elem
    })
  }
  return counter
};
