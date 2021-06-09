// rest

let showProducts = function(id,...products){
    console.log(id) 
    console.log(products)  
}
// showProducts()
// undefined
// empty array
// showProducts(10,"Apple","Strawberry","Watermelon")
// 10
// ["Apple", "Strawberry", "Watermelon"]
// showProducts(12,["Apple","Strawberry","Watermelon"],12)

// spread
// console.log(Math.max(1,23,6,5,48,4845,1000)) // 4845

// let scores = [1,23,6,5,48,4845,1000];
// console.log(...scores) // 1 23 6 5 48 4845 1000
// console.log(Math.max(...scores)) // 4845
// console.log(..."ABC","D",..."EFG","H") // A B C D E F G H


// Destructuring

let populations = [10000,20000,30000,[40000,15000]]
let [small,medium,high,[veryHigh,maximum]] = populations;

//console.log(small) // 10000
//console.log(medium) // 20000
//console.log(high) // 30000
//console.log(veryHigh) // 40000
//console.log(maximum) // 15000

function someFunc([small1],number){
    console.log(small1)
    console.log(number)
}

// someFunc(populations,5)
// 10000
// 5

let category = {id:1, name:"laptop"}
//console.log(category.id) // 1
//console.log(category["name"]) // laptop

let {id,name} = category;
console.log(id)
console.log(name)