let products = [
    {id:1, name : "Acer Laptop", unitPrice:15000},
    {id:2, name : "Asus Laptop", unitPrice:16000},
    {id:3, name : "Hp Laptop", unitPrice:13000},
    {id:4, name : "Dell Laptop", unitPrice:12000},
    {id:5, name : "Casper Laptop", unitPrice:17000},
]

//MAP

// console.log("<ul>")
// products.map(product=>console.log(`<li>${product.name}</li>`))
// console.log("</ul>")

// <ul>
//     <li>Acer Laptop</li>
//     <li>Asus Laptop</li>
//     <li>Hp Laptop</li>
//     <li>Dell Laptop</li>
//     <li>Casper Laptop</li>
// </ul>


// products.map(product=>{
//     console.log(product)
//     console.log(`<li>${product.name}</li>`)
// })


// {id: 1, name: "Acer Laptop", unitPrice: 15000}
//     <li>Acer Laptop</li>
// {id: 2, name: "Asus Laptop", unitPrice: 16000}
//     <li>Asus Laptop</li>
// {id: 3, name: "Hp Laptop", unitPrice: 13000}
//     <li>Hp Laptop</li>
// {id: 4, name: "Dell Laptop", unitPrice: 12000}
//     <li>Dell Laptop</li>
// {id: 5, name: "Casper Laptop", unitPrice: 17000}
//     <li>Casper Laptop</li>

// let numbers  = [1,2,3,4,5]
// numbers.map(number=>{
//     console.log(number*2)
// })

// 2
// 4
// 6
// 8
// 10

//FILTER

// let filteredProducts = products.filter(product=>product.unitPrice>12000)

// console.log(filteredProducts)

// products.push({id:6, name : "LAPTOP", unitPrice:16000});

// console.log(products)

// 0: {id: 1, name: "Acer Laptop", unitPrice: 15000}
// 1: {id: 2, name: "Asus Laptop", unitPrice: 16000}
// 2: {id: 3, name: "Hp Laptop", unitPrice: 13000}
// 3: {id: 4, name: "Dell Laptop", unitPrice: 12000}
// 4: {id: 5, name: "Casper Laptop", unitPrice: 17000}
// 5: {id:6, name : "LAPTOP", unitPrice:16000}

// console.log(filteredProducts)

// 0: {id: 1, name: "Acer Laptop", unitPrice: 15000}
// 1: {id: 2, name: "Asus Laptop", unitPrice: 16000}
// 2: {id: 3, name: "Hp Laptop", unitPrice: 13000}
// 3: {id: 5, name: "Casper Laptop", unitPrice: 17000}


//REDUCE

// let datas = [2, 4, 6, 8, 10];

// let result = datas.reduce((acc,value)=> acc + value ,0);

// console.log(result)

// let cartTotal = products.reduce((acc, product)=>acc+ product.unitPrice, 0)

// console.log(cartTotal)


let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2)


