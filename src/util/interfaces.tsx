export interface iten {
    _id: string,
    name: string,
    price: number,
    description: string,
    amount: number,
    imgPath: string,
    type: string,
}


export interface pessoa {
    name: string,
    email: string,
    user: string,
    profile: string
}
export interface UserData {
    login: string;
    token: string;
}