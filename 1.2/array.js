//1. print even no. in array

function even(arr){

    const en = arr.filter((eachItem)=> eachItem%2==0);
    return en;

}

const a1 = even([1,2,3,4,5,6,7,8,9,0]);
console.log(a1);


//2. biggest element in array

function big(arr){

let me = arr[0];

for(let i=0;i<=me;i++){
    if(arr[i]>me){
        me=arr[i];
    }
    
}
return me;
}

const ln = big([1,2,3,4,5]);

console.log(ln);





