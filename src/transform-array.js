const CustomError = require("../extensions/custom-error");



module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error('Hi, That\'s Error');
  const dAndD = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  const controller = (arr, arg, place) => {
    //exceptions
    if(arg == '--discard-next' && (arr[place + 2] == '--double-prev' || arr[place + 2] == '--discard-prev')){
      arr.splice(place, 3)
      return transform(arr)
    }
    // console.log(place)
    // console.log(arr.length - 1)
    if((arg == '--double-next' || arg == '--discard-next') && place == arr.length - 1){
      arr.splice(place, 1)
      return transform(arr)
    }
    if((arg == '--discard-prev' || arg == '--double-prev') && place == 0){
      arr.splice(place, 1)
      return transform(arr)
    }
    if(arg == '--discard-next'){
      arr.splice(place, 2)
    }
    if(arg == '--double-next'){
      arr[place] = arr[place+1]
    }
    if(arg == '--discard-prev'){
      arr.splice(place - 1, 2)
    }
    if(arg == '--double-prev'){
      arr[place] = arr[place - 1]
    }
    return transform(arr)
  }
  
  let copy = [];
  for (let char of arr) {copy.push(char)};

  let move = '';
  let place = 0;
  if (copy.some(elem => {
      if (dAndD.includes(elem)) {
        move = elem;
        place = copy.indexOf(elem)
        return true
      };
    })) {
    return controller(copy, move, place)
  };
  return copy

};