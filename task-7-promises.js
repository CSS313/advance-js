console.log('person 1: shows ticket')
console.log('person 2: shows ticket')

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket') 
    }, 3000)
})

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: I have the tickets')
    console.log('husband: we should go in')
    console.log('wife: no I am hungry')
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))
})

const getButter = getPopcorn.then((t) => {
    console.log('husband: I got some popcorn')
    console.log('husband: we should go in')
    console.log('wife: I need butter on my popcorn')
    return new Promise((resolve, reject) => {
        resolve(`${t} butter`)
    })
})

const getColdDrinks = getButter.then((t) => {
    console.log('husband: I got cold drinks')
    console.log('husband: we should go in')    
})

getColdDrinks.then((t) => console.log(t))

console.log('person 4: shows ticket')
console.log('person 5: shows ticket')