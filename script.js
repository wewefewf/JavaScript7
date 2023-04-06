let arr = ['morgen', 'nikolay', 'alexander', 'yulduz', 'timati']

let dd = ''

arr.filter(name => {
    if(name.length > dd.length) {
        dd = name
    }
})

console.log(dd);

let numbers = [2, 4, 1, 4, 7, 9, 3,2]

let even = numbers.filter(item => item % 2 === 0)
let odd = numbers.filter(item => item % 2 !== 0)

console.log(even);
console.log(odd);