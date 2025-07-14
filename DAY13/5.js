let meCookYou=[ 'let',"Me",'Cook','You'];
let Seeyou=['I',"see"];
// from last we use push
meCookYou.push('again');
//form front use unshift
meCookYou.unshift('yeah');
meCookYou.pop();  //remove last element from array 
meCookYou.shift();  //remove first element 
//meCookYou.splice(1,2); //remove from mid 
//meCookYou.length=0;  // if i want to blank my array with (0 or [])

let position=meCookYou.indexOf('Cook');   // to check element ka index kya ha 
console.log(meCookYou);
console.log(position);

let joinTwoarr=meCookYou.concat(Seeyou);  // joined two array 
console.log(joinTwoarr);

let joint=meCookYou.join(' _'); //joint array elements 
console.log(joint);

let text='this is my js code'; //splid array elements 
let word =text.split(" ");
console.log(word);

//Multi-dimensional Array
let twodim=[
    [ 'hello','kya','chal'],
    [ 'my','self','opinder'],
    ['how','are'],
];

console.log(twodim);    // outer array 
console.log( twodim[2][0]) // inner arrays [2] show 3 array and [0] show 3 array first element 
    