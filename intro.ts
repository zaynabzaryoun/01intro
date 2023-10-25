
// let user = {
//     name: "g",
//     age: 10
// }
// console.log("hitesh");

/// function
function addTwo(num: number): number {
    return num + 2
    // return "hello"
}

const getHello = (s: string): string => {
    return `hello ${s}`
}


// const heros = ["spiderman", "spiderwoman", "spider"];
const heros = [1, 2, 3, 4]

heros.map((h): string => {
    return `hero is ${h}`
})


const consoleErr =(errMsg: string): void=>{
    console.log(errMsg);
}
const havdleErr =(errMsg: string): void=>{
    console.log(errMsg);
}

// function signup(name: string, password: string, isPade: boolean){

// }

// let logginUser = (name: string, password: string, isPade: boolean = false) => {}

// addTwo(3)

// signup("dd", "444", true)
// logginUser("gg", "45")


// const User ={
//     name: "hh",
//     email: "hh@gmail.com",
//     isActive: true
// }

// function createUser ({name: string, isPaid: boolean}){

// }

// const newUser ={name: "gg", isPaid: false, email: "h@h.com"} 
// createUser(newUser)


// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

// type User ={
//     name: string,
//      email: string,
//      isActive: boolean
// }

// const createUser = (user: User): User => {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "cc", email: "cc@gmail", isActive: false})

// type cardNumber = {
//     cardNumber: string
// }

// type cardDate ={
//     cardDate : string
// }

// type cardDtails = cardNumber & cardDate & {
//     cvv: number
// }

// type User ={
//     readonly _id: string,
//     name: string,
//      email: string,
//      isActive: boolean,
//      credCardDetails?: number
// }

// let myUser: User = {
//     _id : "23",
//     name:"hh",
//     email: "h@h.com",
//     isActive: false,

// }

// myUser.email = "hhhh@H.com"
// myUser._id = "555"


const superHeros: string[] = []
const heroPower: Array<number> =[]

superHeros.push("spiderman")
heroPower.push(2)

type User ={
    name:string,
    isActive: boolean
}

const arrayofUserObject : User[] =[]
arrayofUserObject.push({name: "gg", isActive: false})

const mlmodel : number[][] = [
    [255,255, 255],
    []
]



export {}
