function getElementWidth(content, padding, border) {
  let totalWidth =
    parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
  return totalWidth;
}
console.log(getElementWidth('50px', '8px', '4px')); //returns sum 74
console.log(getElementWidth('60px', '12px', '8.5px')); //returns sum 101
console.log(getElementWidth('200px', '0px', '0px')); //returns sum 200
