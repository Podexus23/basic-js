const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disks, speed) {
  let calc = {turns: Math.pow(2, disks) - 1,};
  calc.seconds = Math.floor(calc.turns/(speed/(60*60)));  
  return calc
};
