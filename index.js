//Find smallest number from array [10,-1,5,-5,0]

const numb = [10, -1, 5, -5, 0];

const smallNumber =Math.min(...numb);

console.log(smallNumber);



//Write a program to make words in reverse. String “This is your frontend design to implement with developer”

function reverseWords(str) {
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}
const str = "This is your frontend design to implement with developer";
console.log(reversed = reverseWords(str));


// const str = "This is your frontend design to implement with developer";
// const reverseStr = str.split(" ").reverse().join(" ");
// console.log(reverseStr);


//Find number occurrences for numbers present in the array. 
//[10,20,5,10,1,2,11,1,2,5,5,55]
const arr = [10, 20, 5, 10, 1, 2, 11, 1, 2, 5, 5, 55];
const occurrences = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(occurrences);
