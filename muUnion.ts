// let score: number | string = 33

// type User = {
//     name: string;
//     id: number
// }

// type Admin ={
//     username: string;
//     id: number
// }

// let Hiti: User | Admin = {name: "ff", id: 44}

// function getDBId(id: string|number){
//     if(typeof id === "string"){
//         id.toLowerCase()
//     }
// }

// const a: (number|string)[] = ["ff", 2] 
let tUser : [string, number, boolean]
tUser = ["ff", 11, false]

let color: [number, number, number]
color = [123, 304, 0]

type User = [number, string]

let bUser: User = [22, "rr"]
bUser[1] = "gg"

// bUser.push(true)