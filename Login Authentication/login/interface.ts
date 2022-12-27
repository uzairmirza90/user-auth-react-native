

export const saveIntoLS = localStorage.setItem('userData', JSON.stringify({}))
export const getFromLS = localStorage.getItem('userData')

export type Data = {
    actions: Array<string | number | {isAdmin: boolean}>
}

export interface UserData extends Register {
    image: string,
    loginAttempts: Array<number>,

}
export interface User extends Login, Register{
    data: Array<UserData[]> | {} | [] | null | undefined | Array<Data>,
}

export const data: Array<{username: string, password: string, actionsData: Array<Data>}> = [
    {
        username: 'admin',
        password: 'admin',
        actionsData: [ { actions: [ { isAdmin: false } ]
            }
        ]
    },
]

export interface Login {
    username: string,
    password: string,
}

export interface Register {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: number,
    isAdmin: boolean,
    address: string,
}


