export interface IResUser {
    access_token: string;
    user:         User;
}

export interface User {
    id:    number;
    name:  string;
    email: string;
    role:  string;
}
