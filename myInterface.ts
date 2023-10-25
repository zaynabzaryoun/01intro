// interface User{
//     readonly dbid: number,
//     email: string,
//     userId: number,
//     googleId?: number,
//     startTrial(): string,
//     getCoupon(couponname:string, value:number): number
// }

// //reopening interface
// interface User{
//     githubToken: string
// }
// interface Admin extends User{
//     role: "admin" | "ta" | "learner"
// }

// const zay: Admin = {
//     role: "admin",
//     dbid: 33,
//     email: "w2s.com",
//     userId: 44,
//     githubToken: "github",
//     startTrial: () => {
//         return "start trial"
//     },
//     getCoupon:(name: "dd", off:33)=>{
//         return 33
//     }
// }

// function getSearchProduct<T>(products: T[]): T{
//     const myIndex = 3
//     return products[myIndex]
// }

// const getMoreProduct =<T> (products: T[]):T => {
//     const myIndex = 4
//     return products[myIndex]
// }

function detectType(val: string | number){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}


function provideId(id: string | null){
    if(!id){
        console.log("no ID");
        return
    }
    id.toLocaleLowerCase()
}