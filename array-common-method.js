const orders = [
    ['chai', 'iced coffee', 'cold brew'],
    ['muffin', 'bread', 'doughnut'],
]

console.log('Number of drink:', orders[0].length)
console.log('Number of pastry:', orders[1].length)

console.log('First drink:', orders[0][0])
console.log('Last pastry:', orders[1][orders[1].length - 1])
console.log('Second drink:', orders[0][1])
console.log('First pastry:', orders[1][0])
console.log('Third drink:', orders[0][2])
console.log('Second pastry:', orders[1][1])

let drinkIndex = 1
let pastryIndex = 2
console.log('Selected drink:', orders[0][drinkIndex])
console.log('Selected pastry:', orders[1][pastryIndex]) 

for (let i = 0; i < orders[0].length; i++) {
    console.log('drink order:', orders[0][i])
}

orders[0].push('flat white')
console.log('Updated number of drinks:', orders[0].length)