interface User{
    readonly dbid: number,
    email: string,
    userId: number,
    googleId?: number,
    startTrial(): string,
    getCoupon(couponname:string, value:number): number
}

//reopening interface
interface User{
    githubToken: string
}
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const zay: Admin = {
    role: "admin",
    dbid: 33,
    email: "w2s.com",
    userId: 44,
    githubToken: "github",
    startTrial: () => {
        return "start trial"
    },
    getCoupon:(name: "dd", off:33)=>{
        return 33
    }
}

