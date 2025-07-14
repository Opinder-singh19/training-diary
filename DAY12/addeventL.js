/*document.getElementById('img1').onmouseover=filter;
function filter(){
    document.getElementById('img1').style.filter='grayscale(0%)';
}

document.getElementById('img1').onmouseout=filtered;
function filtered(){
    document.getElementById('img1').style.filter='grayscale(100%)';
}
*/

// with the use of addeventlistener
document.getElementById('img1').addEventListener('mouseover',    function (){
    this.style.filter='grayscale(0%)';
});

document.getElementById('img1').addEventListener('mouseout',function (){
   this.style.filter='grayscale(100%)';
});

document.getElementById('img2').addEventListener('mouseover',    function (){
    this.style.filter='grayscale(0%)';
});

document.getElementById('img2').addEventListener('mouseout',function (){
   this.style.filter='grayscale(100%)';
});

// this is use inplace of -->document.getElementById('img2')