
let cl=console.log;

//--------------flat------------------//
//Example 1 :
//By using flat
let num = [10,[[20,30],40,50,60,70],80,90]
let result = num.flat(4);
cl(result);

//Example 2 :
//By using flat
let numbers = [10,[[20,30,40],[50,[60,70],80,[90,100],110],][120,130],140];
let result1 = num.flat(Infinity);
cl(result1);

//--------------fill------------------//
//Example 1 :
//By using fill
let num1 = [10,20,30,40,50,60];
num1.fill(0,1,4)
cl(num1);

//Example 2 :
//By using fill
let result2 = new Array(5).fill(0);
cl(result2);

//Example 3 :
let result3 = (num) =>{
    return new Array(num).fill(0).map((_,i) => i+1)
    }
cl(result3(7));

