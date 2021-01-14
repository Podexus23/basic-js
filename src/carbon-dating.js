const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730; //k

// module.exports = function dateSample(str) {
//   if(typeof str =='string' && typeof +str == 'number' && +str > 0 && Math.ceil(+str) <= 15){
//     let time = Math.log(MODERN_ACTIVITY/+str)/0.0001208978
//     return time
//   }
//   return false
// };

module.exports = function dateSample(str) {return false}