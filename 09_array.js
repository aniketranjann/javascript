const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// this will lead an array inside the array 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat = it returns a new array 
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
//// this will lead an array inside the array 

// spread operator 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//FLAT
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// CONVERT DATA IN ARRAY FORM 
console.log(Array.isArray("Aniket"));
console.log(Array.from("Aniket"));

//INTRESTING CASE --> RETURNS AN EMPTY ARRAY 
console.log(Array.from({name: "Aniket"}));

// returns mew array from a set of elements
let score1=100
let score2= 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

