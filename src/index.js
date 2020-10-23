module.exports = function check(str, bracketsConfig) {
  let brackets = {};
bracketsConfig.forEach((elem) => { 
  brackets[elem[1]] = elem[0];
  });
  
  let newArr = [];
  
for (let i = 0; i < str.length; i++) {
  if (i === 0) {
          newArr.push(str[0]);
      } else {
    if (newArr.length !== 0 && newArr[newArr.length - 1] === brackets[str[i]]) {
      newArr.pop();
    } else {
      newArr.push(str[i]);
    }	
  }	
}
return newArr.length === 0;
}