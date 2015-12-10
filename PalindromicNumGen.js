var arryMem = [];

function reverseNum (num) {
  stringIt = num.toString();
  arryMem.push(num);
  stringIt = stringIt.split("").reverse().join("");
  backToNum = parseInt (stringIt);
  arryMem.push(backToNum);
  //need to put in a loop somehow and interate the index?
    if (arryMem[0] === arryMem[1]) {
      return arryMem[0];
    }
    else {
      num = arryMem[0] + arryMem[1];
      arryMem = [];
      return reverseNum (num);
    }
}
console.log(reverseNum(87));