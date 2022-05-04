// Map, Filter ,Reduce
// they are known as one liner functions
// map,filte,reduce never modifies the original array
// map,filte,reduce returns/creates a new array

// map
// let numbers = [2,3,4,5,6,7] 
// console.log(numbers);
// numbers.map((item)=>{console.log(item)})

// filter
// let res = numbers.filter(item=>{
//     return item > 3
// })

// console.log(res);

// reduce
// let res1 = numbers.reduce((acc,cur)=> acc = acc + cur,0);
// console.log(res1)

// let res2 = numbers.reduce((acc,cur) => acc = acc * cur,1);
// console.log(res2);

// charAt

let str = "Kuldeep Rathod";
console.log(str.length);
console.log(str.charAt(2));

// endswith

console.log(str.endsWith("d"));

// includes

let sentence = "Hello World";
console.log(sentence.includes("World"));

// indexOf, LastIndexof

console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));

// Length

console.log(str.length);

// Replace
// Not going to manipulate the original string

console.log(str.replace("Kuldeep","KD"));

// Search
console.log(str.search("Rathod"));

// substr
console.log(sentence.substr(1,4)); //first value is the index position and second value is the no of chaarcters from the index position mentioned in the first value.

// substring
console.log(sentence.substring(0,7));  //first index value is inclusive , last index value  is exclusive

//for substring always the lower value is the starting index and higher value is the ending index, irrespective of the position
// of the values mentioned. 
// eg:
console.log(sentence.substring(7,0));

// split
let email = "Kuldeeprathod33@gmail.com";

let values = email.split("@");
console.log(values);