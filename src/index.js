module.exports = function reverse (n) {
  let num=n;
let temp;

temp = Number(('' + Math.abs(num)).split('').reverse().join(''));
//if(num <0) return ( Number('-' + temp) )
//else
 return (temp);

}
