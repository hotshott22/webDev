// 1. program to greet 

function greet(fn,ln){
    return 'Hello '+ fn + '_' + ln +  ' very good morning!';
}

const g1 = greet("Hotshott","22");
console.log(g1);


//2. greetbased on gender

function greet2(gender){

    if(gender == "male"){
        return "Good Moring Sir!";
    }
    if(gender == "female"){
        return "Good morning Maam!";
    }
    else{
        return "IDK what to do!!";
    }
}

const gf = greet2("female");
console.log(gf);

const gm = greet2("male");
console.log(gm);


//3. loops


function cnt(n){

    let sum=0;

    for(let i=0;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;
}


const ss=cnt(100);

console.log(ss);


