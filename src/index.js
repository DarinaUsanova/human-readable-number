const { re } = require("semver")

module.exports = function toReadable (number) {
  const
  units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
  teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  tenth = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero'
  };

  if (number <= 9){
    return units[number - 1]
  };
  
  if (number > 10 && number < 20){
    return teens[number - 11]
  };

  if (number % 10 === 0 && number < 100){
    return tenth[number / 10 - 1]
  };

 if (number < 100 && number % 10 !== 0){
  const ten = Math.floor(number / 10);
  const digit = number - (ten * 10);
  return `${tenth [ten - 1]} ${units [digit - 1]}`
 }

  const hundred = Math.floor(number / 100); 
  let ten = (number - hundred * 100);

  if (ten <= 19 && ten >= 11){
    return `${units [hundred - 1]} hundred ${teens[ten - 11]}`
  };
  ten  = Math.floor((number - (hundred * 100)) / 10);
  const digit = number - (hundred * 100) - (ten * 10);
  let result = `${units [hundred - 1]} hundred`;

  if (ten > 0){
    result = `${result} ${tenth [ten -1]}`;
  }
  if (digit > 0){
    result = `${result} ${units [digit - 1]}`;
  } 

  return result;

}


