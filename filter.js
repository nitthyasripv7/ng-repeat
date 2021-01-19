var number =[1,2,34,5,6,7,8,9];

console.log("numberarray:" ,number );
function filter2( value){
    return value > 9;
}

var filternumber =number.filter(filter2);
console.log("filter number : ",filternumber);