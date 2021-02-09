const assertEqual = require ('./assertEqual');

const eqArrays = function(a,b){
   if (a.length === b.length) {
     let c = 0;
     for(let i = 0; i < a.length; i++) {
       if (a[ i ] !== b[ i ]){
        c = c + 1; 
        break;
       }
     }
     if(c > 0) {
       return false;
     } else {
       return true;
     }
     
   } else {
     return false;
   }
}


module.exports = eqArrays;
