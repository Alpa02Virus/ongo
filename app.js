var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['brown','aqua','green'];
var i =-1;
function color(){
    i++;
    body.style.backgroundColor=colors[i];

}   
