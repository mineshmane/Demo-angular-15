export interface ILogin {
    email: string,
    password: string,
}
export type ISignup = {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    confrimPassword: string
}
export interface IforgetPassword {
    email: string

}

type questionANdANswerType = {
    id: string;
    asnwer: string;
    question: string
}

interface note {
    title: string,
    questionANdAnswer:

    questionANdANswerType
}

export interface ILoginResponse {
    id: string;
    ttl: number;
    created: string;
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    imageUrl:string;
}

let mockdata = {
    "role": "user",

    "email": "mineshmane94@gmail.com",
    "imageUrl": "images/1613992075844.jpeg"
}

