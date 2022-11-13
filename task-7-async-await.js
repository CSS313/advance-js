console.log('person 1: shows ticket')
console.log('person 2: shows ticket')

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 3000);
    })

    const getPopcorn = new Promise((resolve, reject) => {
        resolve('popcorn')
    })

    const getButter = new Promise((resolve, reject) => {
        resolve('butter')
    })

    const getColdDrinks = new Promise((resolve, reject) => {
        resolve('cold drinks')
    })

    let ticket = await promiseWifeBringingTicks

    console.log(`wife: I have the ${ticket}`)
    console.log('husband: we should go in')
    console.log('wife: no I am hungry')

    let popcorn = await getPopcorn

    console.log(`husband: I got some ${popcorn}`)
    console.log('husband: we should go in')
    console.log('wife: I need butter on my popcorn')

    let butter = await getButter

    console.log(`husband: I got some ${butter} on popcorn`)
    console.log('husband: anything else darling')
    console.log('wife: I need cold drinks')

    let coldDrinks = await getColdDrinks
    
    console.log(`husband: I got ${coldDrinks}`)
    console.log('husband: anything else darling')
    console.log('wife: lets go we are getting late')
    console.log('thank you for the reminder *grins')


    return ticket

}

preMovie().then((m) => {
    console.log(`person 3: shows ${m}`)
})

console.log('person 4: shows ticket')
console.log('person 5: shows ticket')