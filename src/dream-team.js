const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let name = "";
  members.filter((elem)=>{
    if(typeof elem == "string"){return elem}
   }).map((elem)=> {
     elem = elem.trim()
     name = `${name}${elem[0]}`
   })
   name = name.toUpperCase()
   return name.split('').sort().join('')
 }
