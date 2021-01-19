const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof date != 'object'){
    return 'Unable to determine the time of year!'
  }
  if(toString.call(date) !== "[object Date]"){
    throw Error('Error')
  }
  let month = date.getMonth();
  let seasons = {
    'winter': [11, 1, 0],
    'spring': [3, 4, 2],
    'summer': [6, 7, 5],
    'autumn': [9, 10, 8],
  };
  for(let season in seasons){
    if(seasons[season].includes(month)){
      return season
    }
  }  
  return 'Unable to determine the time of year!';
};
