// array pop method
//it will return last element of array
// let namelist:string[] = ["sonia","samra","shafia","ali","samavia"]
// let newlist = namelist.pop()
// console.log(newlist);
// console.log(namelist);
//push(to add new names in list in last)
// let namelist:string[] = ["sonia","samra","shafia","ali","samavia"]
// let newlength = namelist.push("aliya","parii")
// console.log(namelist);//will return new list updated list
// console.log(newlength);//will return length of array
//shift(return first element of array)
// let namelist:string[] = ["sonia","samra","shafia","ali","samavia"]
// let shift = namelist.shift()
// console.log(namelist);
// console.log(shift);
//unshift (will add new elements at start of list)
// let namelist:string[] = ["sonia","samra","shafia","ali","samavia"]
// let unshift =namelist.unshift("aliya","parii")
// console.log(namelist);
// console.log(unshift);
//filter
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18];
var even = number.filter(function (num) { return num % 2 === 0; });
var odd = number.filter(function (num) { return num % 2 !== 0; });
var greater = number.filter(function (num) { return num >= 3; });
console.log(even);
console.log(odd);
console.log(greater);
