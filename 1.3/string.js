// length of string

function sl(str){
    console.log("orginial string - ",str);
    console.log("len:",str.length);
}

sl("HelloWorld!")


// index in string

function index(str,target){
    console.log("first index:",str.indexOf(target));

    console.log("last index:",str.lastIndexOf(target));
}

index("HelloWorld!!!world World","World");


//slice string

function slice(str, start,end){
    console.log("After slice:",str.slice(start,end));// start and end are indexes
}
slice("HelloWorld!!!world World",8,14);


// toUpperCase
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");

  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World "); //remove the empty space before and after string



