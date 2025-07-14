//object
/*let bio={
    fname:'Opinder',
    lname:'Singh',
    age:21,
};
console.log(bio);*/

//array and function inside an object 
let bio={
    fname:'Opinder',
    lname:'Singh',
    age:21,
    abc:['hello','bye'],
    xyz:{
        'city':'hoshiarpur',
        'city2':'Ludhiana',
    },
    salary:function(){
        return 25000;
    }
};
console.log(bio);

//math object 
var x=Math.round(23.5);    /*round property ->. adjust acc to number like if no is 23.4 -->. it show 23 if
  is 23.7 it show 24 */


var y=Math.ceil(23.1); /*in ceil property --> it always show greater value like if no is 23.1 it show 24  */
var z=Math.floor(23.1);
console.log(z);//. floor property--> it is opposite of ceil
console.log(y);
console.log(x);
var a=Math.trunc(24.1);  
console.log(a);  // in trunc property--> if we not need of value after point

var b=Math.pow(2,5); //power property
console.log(b);

var c=Math.sqrt(25);  // square root propert
console.log(c);
var s=Math.min(23,1,4,5); // for minimum value find 
console.log(s);
var d=Math.max(24,1,4,5); // for max value find 
console.log(d);

//date method 
var o=new Date();
console.log(o.toDateString());
console.log(o.getFullYear());
console.log(o.getMonth());
console.log(o);

